/**
 * 清除所有的（计算）数据
 */
function clearAllCalData() {
    needs_list = {};
    newResultData = {};
    source_data = {};
}

// 点击数量单独计算按钮
function clickCalculateBtn() {
    clearDataInClickCalBtn(false);
    commonNumberCalculate();
}

/*
* 点击数量累加计算
*/
function addCalculateBtn() {
    clearDataInClickCalBtn(true);
    commonNumberCalculate();
}

/**
 * 点击设备数量的”单独计算“按钮
 */
function clickEquCalBtn() {
    clearDataInClickCalBtn(false);
    commonEquNumberCalculate();
}

/**
 * 点击设备数量的”累加计算“按钮
 */
function clickEquAddCalBtn() {
    clearDataInClickCalBtn(true);
    commonEquNumberCalculate();
}

function commonNumberCalculate() {
    // 需求item
    let needs_item = document.getElementById("needs_item").value;
    // item 数量
    let needs_amount = document.getElementById("needs_amount").value;

    if (!material_data.includes(needs_item)) {
        alert("请输入或选择正确的物品名字！");
        return;
    }

    // 添加要生成的物品到需求列表中
    if (needs_item in needs_list) {
        needs_list[needs_item] = Number(needs_list[needs_item]) + Number(needs_amount);
        materialCalculate('material-add', needs_item, needs_amount)
    } else {
        needs_list[needs_item] = Number(needs_amount);
        materialCalculate('material-new', needs_item, needs_amount)
    }

    startCalAndShow();
}

let firstShowTotalMenu = true;
function startCalAndShow() {
    // 计算
    cal_data();
    // 计算结果检查
    checkOutTargetMaterialNumber();
    // 显示树形列表
    showTreeList();
    // // 显示原材料总计
    show_source_material_list();
    // // 显示（树形列表的）设备统计和电量统计
    show_equipment_in_tree_list_mode();
    // // 显示：材料总计与布置层级
    show_table_list();
    // 产物总计显示
    showOutTotalList();
    // 显示buff总数
    getTotalBuffNumber();
    if (firstShowTotalMenu) {
        firstShowTotalMenu = false;
        $(".theme-config-box").toggleClass("show");
    }
}

function dataClear() {
    document.getElementById("ul-").innerHTML = "";
    document.getElementById("surplusList").innerHTML = "";
    document.getElementById("sourceList").innerHTML = "";
    document.getElementById("material_table").innerHTML = "";
    document.getElementById("totalList").innerHTML = "";
    document.getElementById("energyList").innerHTML = "";

    clearAllCalData();
}

/**
 * 更新计算结果
 */
function updateCalResult() {
    dataClear();
    clickCalculateBtn();
}

function resetNeeds(item) {
    clearDataInClickCalBtn(false);
}

function saveDataToLocalStorage() {
    const jsonString = JSON.stringify(game_data);
    localStorage.setItem(curGameName, jsonString);
}

/**
 * 通用逻辑，不支持清除当前游戏对应的缓存数据
 */
function clearLocalStorage() {
    localStorage.removeItem(curGameName);
    // 刷新页面
    location.reload();
}

function commonEquNumberCalculate() {
    // 需求item
    let needs_item = document.getElementById("needs_item").value;
    // 设备数量
    let equ_count = parseFloat(document.getElementById("need_equipment_count").value);

    if (!material_data.includes(needs_item)) {
        alert("请输入或选择正确的物品名字！");
        return;
    }

    // 获取配方
    let recipe = findSelectRecipe(needs_item, 0)
    if (recipe == null) {
        alert("缺少物品配方！");
        return;
    }

    // 获取配方中的needs_item对应的产物的数量
    let productList = recipe["productList"]
    // 需要的物品数量
    let needNumber = 1;
    for (const productsKey in productList) {
        if (productsKey === needs_item) {
            needNumber = Number(productList[productsKey]);
        }
    }

    let equIndex = recipe["equIndex"];
    // 从计算参数设置中，获取选中的设备
    if (calValueMap.hasOwnProperty(recipe.equType)) {
        equIndex = calValueMap[recipe.equType];
    }

    // 获取设备
    let equipment = findSelectEquipment(recipe["equType"], equIndex);
    let equipRate = parseFloat(equipment["rate"])
    // 真实数量 = （60秒 * 设备数量 * 设备倍率） / 配方用时 * 配方生产数量
    let realNumber = (60 * equ_count * equipRate) / recipe["time"] * needNumber

    // 添加要生成的物品到需求列表中
    if (needs_item in needs_list) {
        needs_list[needs_item] = Number(needs_list[needs_item]) + Number(realNumber);
        materialCalculate('device-add', needs_item, equ_count)
    } else {
        needs_list[needs_item] = Number(realNumber);
        materialCalculate('device-new', needs_item, equ_count)
    }

    startCalAndShow();
}