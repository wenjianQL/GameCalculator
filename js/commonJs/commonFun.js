/**
 * 从配方数据中，获取材料对应的选中配方
 * 如果recipeId < 0, 那么获取材料的默认选中配方
 * @param materialName
 * @param recipeIndex
 * @returns {*|null}
 */
function findSelectRecipe(materialName, recipeIndex) {
    try {
        return game_data["recipe_data"][materialName]["data"][recipeIndex];
    } catch (e) {
        return null;
    }
}

/**
 * 获取材料的所有配方
 */
function find_material_recipe(materialName) {
    if (!game_data["recipe_data"].hasOwnProperty(materialName)) {
        return null;
    }

    return game_data["recipe_data"][materialName];
}

/**
 * 从设备数据中，找到对应的设备
 * @param equipmentType
 * @param index
 */
function findSelectEquipment(equipmentType, index) {
    if (!game_data["equipment"].hasOwnProperty(equipmentType)) {
        console.log("没有对应的设备类型! " + equipmentType);
        return null;
    }

    let data = game_data["equipment"][equipmentType];
    let list = data["data"];
    return list[index];
}

function findDeviceType(equipmentType) {
    if (!game_data["equipment"].hasOwnProperty(equipmentType)) {
        console.log("没有对应的设备类型!" + equipmentType);
        return null;
    }

    return game_data["equipment"][equipmentType];
}

/**
 * 加载计算页面中，输入框中可供选择的物品数据
 */
function loadCalPagerMaterialList() {
    material_data = [];
    for (let item in game_data["recipe_data"]) {
        material_data.push(item);
    }

    let str = "";
    for (let i in material_data) {
        let optionElement = document.createElement('option');
        optionElement.value = material_data[i];
        optionElement.text = getTranslate(material_data[i]);
        // str += "<option value=\"" + material_data[i] + "\">\n";
        str += optionElement.outerHTML + "\n";
    }

    let node = document.getElementById("item_list");
    if (node) {
        node.innerHTML = str;
    }
}

/**
 * 点击计算按钮对应的清除事件
 * 只计算当前的物品和数量，所以需要将全部数据清空
 */
function clearDataInClickCalBtn(isAddCalculate = false) {
    // 输入框数据
    if (!isAddCalculate) {
        needs_list = {};
    }
    // 计算结果数据
    newResultData = {};
    // 树形列表数据清除
    document.getElementById("ul-").innerHTML = "";
    // 原材料统计数据清除
    source_data = {};
    document.getElementById("sourceList").innerHTML = "";
    // 多余产物清除
    document.getElementById("surplusList").innerHTML = "";
    // 设备总计清除
    document.getElementById("totalList").innerHTML = "";
    // 电量总计清除
    document.getElementById("energyList").innerHTML = "";
    // 层次表格清除
    document.getElementById("material_table").innerHTML = "";
}

/**
 * 在修改配方后进行计算结果更新
 * @param path
 */
function updateResultAfterChangeRecipe(path) {
    // 清除 newResultData 中 以path + "-" 开头的所有数据
    let needDeleteKeyList = [];
    for (let key in newResultData) {
        if (key.indexOf(path + "_") === 0) {
            needDeleteKeyList.push(key);
        }
    }
    for (let i = 0; i < needDeleteKeyList.length; i++) {
        delete newResultData[needDeleteKeyList[i]];
    }

    // 树形列表数据清除
    document.getElementById("ul-").innerHTML = "";
    // 原材料统计数据清除
    source_data = {};
    document.getElementById("sourceList").innerHTML = "";
    // 多余产物清除
    document.getElementById("surplusList").innerHTML = "";
    // 设备总计清除
    document.getElementById("totalList").innerHTML = "";
    // 电量总计清除
    document.getElementById("energyList").innerHTML = "";
    // 层次表格清除
    document.getElementById("material_table").innerHTML = "";

    startCalAndShow();
}

/**
 * 参数变化后，重新计算
 */
function refreshCalResultInValueChange() {
    // 树形列表数据清除
    document.getElementById("ul-").innerHTML = "";
    // 原材料统计数据清除
    source_data = {};
    document.getElementById("sourceList").innerHTML = "";
    // 多余产物清除
    document.getElementById("surplusList").innerHTML = "";
    // 设备总计清除
    document.getElementById("totalList").innerHTML = "";
    // 电量总计清除
    document.getElementById("energyList").innerHTML = "";
    // 层次表格清除
    document.getElementById("material_table").innerHTML = "";

    startCalAndShow();
}

function getStep(item) {
    let sourceList = item["sourceList"]
    let productList = item["productList"]

    let str = ""
    if (Object.keys(sourceList).length > 0) {
        for (let key in sourceList) {
            str += sourceList[key] + " * " + getTranslate(key) + " +"
        }
        str = str.substring(0, str.length - 1)
        str += " = "
    }
    for (let key in productList) {
        str += productList[key] + " * " + getTranslate(key) + " +"
    }
    str = str.substring(0, str.length - 1)

    str += "  (" + item["time"] + "s)"

    return str;
}

/**
 * 给材料在左边添加对应的img。
 * （使用的地方要通过innerHTML进行数据设置）
 * @param name
 * @returns {string}
 */
function getImgAndNameNodeStr(name) {
    let imgNode = document.createElement("img");
    imgNode.style.width = "30px";
    imgNode.style.height = "30px";
    if (game_data["game_name"] === "Dsp") {
        imgNode.src = "../../../img/game/dsp/" + name + ".png";
    } else if (game_data["game_name"] === "SatisFactory") {
        imgNode.src = "../../../img/game/satisfactory/" + name + ".jpg";
    }

    // 将imgNode转换成字符串格式，并进行返回
    return imgNode.outerHTML + getTranslate(name);
}

function compareAndModifyLists(proList, sourceList) {
    const proKeys = Object.keys(proList);
    const sourceKeys = Object.keys(sourceList);

    // 判断是否存在相同的键
    const hasSameKeys = proKeys.some(key => sourceKeys.includes(key));

    if (hasSameKeys) {
        proKeys.forEach(key => {
            if (sourceList.hasOwnProperty(key)) {
                proList[key] -= sourceList[key];
                delete sourceList[key];
            }
        });
    }

    return {proList, sourceList};
}

/**
 * 检查输出的目标物品的数量是否符合要求。
 * 用于处理多余产物中存在目标物品，但没有计算在内的情况。
 * 因此要根据公式， x= 用户输入数量 * （用户输入数量） / （用户输入数量 + 多余产物）
 * 例子：
 * 生产90精炼油，配方选择：
 * 1、2油+1氢+1煤矿 = 3精炼油
 * 2、2原油 = 1氢 + 2精炼油
 * 没有处理前，精炼油产物为90 + （多余180）= 270
 * 处理后：精炼油产物为 30 + （多余60） = 90，符合要求。
 */
function checkOutTargetMaterialNumber() {

    let map = {};
    // 获取多余产物的数量（这个多余产物刚好也是要生产的物品）
    for (let needsListKey in needs_list) {
        for (let path in newResultData) {
            if (newResultData[path]["material"] === needsListKey) {
                let outNumber = newResultData[path]["number"];
                if (outNumber < 0) {
                    if (map.hasOwnProperty(needsListKey)) {
                        map[needsListKey] += Math.abs(outNumber);
                    } else {
                        map[needsListKey] = Math.abs(outNumber);
                    }
                }
            }
        }
    }

    let needRefreshCal = false;
    // 根据map结果，重新调整输入的数量
    for (let needsListKey in needs_list) {
        if (!map.hasOwnProperty(needsListKey)) {
            continue;
        }

        // 调整后的输入数量x = 用户输入数量useInputNumber * （useInputNumber / （useInputNumber + 多余产物数量outNumber））
        const useInputNumber = needs_list[needsListKey];
        const outNumber = map[needsListKey];
        const x = useInputNumber * (useInputNumber / (useInputNumber + outNumber));
        // 向上取整,然后重新设置
        needs_list[needsListKey] = Math.ceil(x);
        needRefreshCal = true;
    }

    if (needRefreshCal) {
        if (!needTranslate) {
            alert(`
注意！
由于多余产物中存在要生产的物品，计算逻辑已重新调整要计算的物品的数量。
由于计算逻辑存在向上取整，请留意计算结果中的物品数量+多余产物的数量，是否符合你输入的要求。
如果不符合，请确保输入的数据 是（结果物品数量+多余产物数量）/结果物品数量的结果的整数倍。
如：生产91个精炼油，但结果物品数量为31，多余产物数量为62，(31+62)/31=3，因此需要输入3的整数倍。
        `);
        }
        cal_data();
    }
}

/**
 * 显示产物列表
 */
function showOutTotalList() {
    let map = {};

    for (let needsListKey in needs_list) {
        if (map.hasOwnProperty(needsListKey)) {
            map[needsListKey] += needs_list[needsListKey];
        } else {
            map[needsListKey] = needs_list[needsListKey];
        }
    }

    for (let path in newResultData) {
        let item = newResultData[path];
        let outNumber = item["number"];
        if (outNumber >= 0) {
            continue;
        }

        let name = item["material"];
        if (map.hasOwnProperty(name)) {
            map[name] += Math.abs(outNumber);
        } else {
            map[name] = Math.abs(outNumber);
        }
    }

    let out_str = "";
    for (let mapKey in map) {
        out_str += "<li>" + map[mapKey].toFixed(1) + " * " + getImgAndNameNodeStr(mapKey) + "</li>";
    }

    document.getElementById("surplusList").innerHTML = out_str;
}

function getTranslate(str) {
    if (needTranslate && game_data.hasOwnProperty("translate")) {
        return game_data["translate"][str];
    }
    return str;
}