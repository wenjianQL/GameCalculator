function cal_data() {

    if (!needs_list) {
        console.log("缺少needs_list")
        return
    }

    if (Object.keys(needs_list).length === 0) {
        console.log("needs_list 为空！")
        return
    }

    const beltSwitchNode = document.getElementById("beltSwitch")
    beltSwitch = beltSwitchNode.checked

    let needCalStr = "";
    // 计算要生产的物品
    for (const item in needs_list) {
        calItem("", item, needs_list[item]);
    }
    _czc.push(['_trackEvent', '按钮', '计算', game_data["game_name"] + '：' + needCalStr]);
}

function splitCalItem(path, material, num) {
    let remainingNum = num;
    let index = 0;
    while (remainingNum > 0) {
        const currentNum = Math.min(remainingNum, beltSize);
        calItem(path, material, currentNum, index); // 调用 calItem 方法处理当前数量的数据
        remainingNum -= currentNum;
        index++;
    }
}

/**
 * 合成路径计算
 * @param path 上一级路径
 * @param material 要计算的材料
 * @param num 材料数量
 * @param curI
 */
function calItem(path, material, num, curI = -1) {

    // 传送带运力
    // 大于传送带运力，要拆分
    if (beltSwitch && Math.abs(num) > beltSize) {
        splitCalItem(path, material, num);
        return;
    }

    let curPath;
    if (num < 0) {
        curPath = path === "" ? material : path + "_~" + material;
    } else {
        curPath = path === "" ? material : path + "_" + material;
    }
    if (curI >= 0) {
        curPath = curPath + "`" + curI;
    }
    // 防止死循环崩溃
    if (curPath.split("_").length > 15) {
        return;
    }

    // 检查是否存在同路径的材料了
    if (newResultData.hasOwnProperty(curPath) && (Number(newResultData[curPath]["number"]) * num > 0)) {
        newResultData[curPath]["number"] = num;
    } else {
        newResultData[curPath] = {
            "path": curPath,
            "prePath": path,
            "material": material,
            "number": num,
            "是否计算": true,
            "recipeIndex": 0,
            "增产剂效果": "无",
            "增产剂": 0,
            "电力消耗倍率":1,
            "equType": "",
            "equIndex": 0,
            "equNumber": 0,
            "isShow": true
        };
    }

    if (num <= 0) {
        // 需要的数量小于等于0，是多余产物，不处理。
        return;
    }

    let item = newResultData[curPath];

    // 从game_data.recipe_data中找到需要产出的物品的配方
    let recipe = findSelectRecipe(material, item["recipeIndex"]);
    if (recipe == null || Object.keys(recipe.sourceList).length === 0) {
        // recipe中的原料数组的长度为0，当前物品是原材料
        return;
    }

    if (recipe.hasOwnProperty("onlySpeed")) {
        newResultData[curPath]["onlySpeed"] = true;
    } else if (recipe.hasOwnProperty("notBuff")) {
        newResultData[curPath]["notBuff"] = true;
    }

    // 增产倍率
    let increase = 1;
    // 加速倍率
    let speed = 1;

    // 根据增产剂，获取对应的倍率
    if (item["增产剂效果"] !== "无") {
        if (item["增产剂效果"] === "speed") {
            speed = getSpeedRateByBuff(item["增产剂效果"], item["增产剂"], speed);
        } else {
            increase = getIncreaseRateByBuff(item["增产剂效果"], item["增产剂"], increase);
        }
        item["电力消耗倍率"] = getEnergyRateByBuff(item["增产剂效果"], item["增产剂"], 1);
    } else {
        item["电力消耗倍率"] = 1;
    }

    let pList = Object.assign({}, recipe.productList);
    let sList = Object.assign({}, recipe.sourceList);
    let productList, sourceList;

    // 如果开启循环计算
    const circleCalSwitchNode = document.getElementById("switch-circle-cal")
    if (circleCalSwitchNode.checked) {
        const result = compareAndModifyLists(pList, sList);
        productList = result.proList;
        sourceList = result.sourceList;
    } else {
        productList = pList;
        sourceList = sList;
    }

    // 计算该配方中产出该物品的数量
    let amount = productList[material];
    // 生产用时 = 原定生产用时 / 加速倍率
    let time = recipe.time / speed;
    // 数量倍数关系 = 当前需要数量 / (配方中产出物品数量 * 增产倍率)
    let multiplier = num / (amount * increase);

    // 从计算参数中获取要选中的设备
    if (calValueMap.hasOwnProperty(recipe.equType)) {
        item["equIndex"] = calValueMap[recipe.equType];
    }

    // 要使用的机器
    let useEquipment = findSelectEquipment(recipe.equType, item["equIndex"]);
    item["equType"] = recipe.equType;
    // 获取机器的倍率
    let equipmentProductRate = useEquipment["rate"];
    // 机器需要的数量 = num / (60 / 生产用时 * 生产数量 * 增产倍率 * 机器倍率)
    item["equNumber"] = num / (60 / time * amount * increase * equipmentProductRate);
    item["equName"] = useEquipment["name"];

    // for循环产物列表，计算其余不等于out_item的物品的需要的数量
    for (let product in productList) {
        if (product !== material) {
            // 其余产物在配方中的数量
            let amount = productList[product];
            // 实际的产出数量
            let real_amount = amount * multiplier * -1;
            calItem(curPath, product, real_amount);
        }
    }


    // 原料总数
    let ingredient_number = 0;
    // for循环原料列表，计算需要的原料数量
    for (let ingredient in sourceList) {
        // 计算需要的原料数量
        let need_amount = sourceList[ingredient] * multiplier;
        ingredient_number = ingredient_number + need_amount;
        calItem(curPath, ingredient, need_amount);
    }
}