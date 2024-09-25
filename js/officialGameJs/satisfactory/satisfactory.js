loadCalPagerMaterialList();

function initSatisFactorySelectDialog() {
    let node = document.getElementById("selectGridTableCustom")
    if (!node) {
        return;
    }

    node.innerHTML = '';

    const dialogData = game_data["select_dialog_data"];
    for (let key in dialogData) {
        const itemArray = dialogData[key];
        for (let i = 0; i < itemArray.length; i++) {
            let name = itemArray[i];
            if (material_data.concat(name)) {
                let divNode = document.createElement("div");
                // 将item数据添加到
                let spanNode = document.createElement("h5");
                spanNode.textContent = getTranslate(name);
                spanNode.nodeValue = name;
                // 添加一个img
                let imgNode = document.createElement("img");
                imgNode.style.width = "60px";
                imgNode.style.height = "60px";
                imgNode.src = "../../../img/game/satisfactory/" + name + ".jpg";
                divNode.appendChild(imgNode);
                divNode.appendChild(spanNode);

                divNode.onclick = function () {
                    let inputNode = document.getElementById("needs_item");
                    if (inputNode) {
                        inputNode.textContent = name;
                        inputNode.value = getTranslate(name)
                    }
                    let closeButton = document.getElementById("selectDialogClickClose");
                    if (closeButton) {
                        closeButton.click();
                    }
                }
                node.appendChild(divNode);
            }
        }
        // 添加换行符
        let count = 8 - (itemArray.length % 8);
        for (let i = 0; i < count; i++) {
            node.appendChild(document.createElement("div"));
        }
    }
}

function cal_data() {

    if (!needs_list) {
        console.log("缺少needs_list")
        return
    }

    if (Object.keys(needs_list).length === 0) {
        console.log("needs_list 为空！")
        return
    }

    let needCalStr = "";
    // 计算要生产的物品
    for (const item in needs_list) {
        calItem("", item, needs_list[item]);
        needCalStr += item + "*" + needs_list[item] + " ";
    }
    _czc.push(['_trackEvent', '按钮', '计算', game_data["game_name"] + '：' + needCalStr]);
}

/**
 * 合成路径计算
 * @param path 上一级路径
 * @param material 要计算的材料
 * @param num 材料数量
 */
function calItem(path, material, num) {
    // console.log("calItem: "+path);
    let curPath = "";
    if (num < 0) {
        curPath = path === "" ? material : path + "_~" + material;
    } else {
        curPath = path === "" ? material : path + "_" + material;
    }
    // 防止死循环崩溃
    if (curPath.split("_").length > 15) {
        return;
    }
    // 检查是否存在同路径的材料了
    if (newResultData.hasOwnProperty(curPath) && (Number(newResultData[curPath]["number"]) * num > 0)) {
        if (num < 0) {
            newResultData[curPath]["number"] += num;
        } else {
            newResultData[curPath]["number"] = num;
        }
    } else {
        newResultData[curPath] = {
            "path": curPath,
            "prePath": path,
            "material": material,
            "number": num,
            "是否计算": true,
            "recipeIndex": 0,
            "加速": "无",
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

    // 增产倍率
    let increase = 1;
    // 加速倍率
    let speed = 1;

    // 根据增产剂，获取对应的倍率
    if (item["加速"] !== "无") {
        if (item["加速"] === "speed") {
            speed = getSpeedRateByBuff(item["加速"], item["增产剂"], speed);
        }
        item["电力消耗倍率"] = getEnergyRateByBuff(item["加速"], item["增产剂"], 1);
    } else {
        item["电力消耗倍率"] = 1;
    }

    // 从配方中获取产物列表
    let pList = Object.assign({}, recipe.productList);
    // 从配方中获取原料列表
    let sList = Object.assign({}, recipe.sourceList);

    const { proList: productList, sourceList: sourceList } = compareAndModifyLists(pList, sList);

    // 计算该配方中产出该物品的数量
    let amount = productList[material];
    // 生产用时 = 原定生产用时 / 加速倍率
    let time = recipe.time / speed;
    // 数量倍数关系 = 当前需要数量 / (配方中产出物品数量 * 增产倍率)
    let multiplier = num / (amount * increase);

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
            calItem(path, product, real_amount);
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

/**
 * 给材料在左边添加对应的img。
 * （使用的地方要通过innerHTML进行数据设置）
 * @param name
 * @returns {string}
 */
function getSatisFactoryImgAndNameNodeStr(name) {

    if (!isSupportImg) {
        return getTranslate(name);
    }

    let imgNode = document.createElement("img");
    imgNode.style.width = "30px";
    imgNode.style.height = "30px";
    imgNode.src = "../../../img/game/satisfactory/" + name + ".jpg";

    // 将imgNode转换成字符串格式，并进行返回
    return imgNode.outerHTML + getTranslate(name);
}