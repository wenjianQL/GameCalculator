/**
 * 计算函数入口
 * @param name 物品名字
 * @param number 物品数量
 */
function tableCalculateItem(name, number) {
    // 统一的计算逻辑
    calculateItem(name, number);

    ignorePathList = [];

    // 进行层次表格的结果显示
    renderTable(treeRootNode);

}

function clickTableCalculateBtn() {
    // 需求item
    let needs_item = document.getElementById("needs_item").textContent;
    // item 数量
    let needs_amount = document.getElementById("needs_amount").value;
    // 计算
    tableCalculateItem(needs_item, needs_amount);
}

// 如果域名后有：?name=${data.name}&number=${data.number}，则将name和number设置到input中
function setNameAndNumber() {
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let name = params.get("name");
    let number = params.get("number");
    if (name) {
        name = decodeURIComponent(name);
        document.getElementById("needs_item").value = name;
        document.getElementById("needs_item").textContent = name;
    } else {
        return;
    }

    if (number) {
        document.getElementById("needs_amount").value = number;
    } else {
        return;
    }

    // name和number都不为空
    treeCalculateItem(name, number);
}