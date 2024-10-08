/**
 * 计算函数入口
 * @param name 物品名字
 * @param number 物品数量
 */
function treeCalculateItem(name, number) {
    // 统一的计算逻辑
    calculateItem(name, number);

    // 根据页面特性，进行数据显示
    // 获取树形结构容器元素
    const treeContainer = document.getElementById('ul-0');

    if (treeContainer) {
        treeContainer.innerHTML = "";
    }
    
    // 渲染计算结果树
    renderTree(treeContainer, treeRootNode);

    // 进行统计
    treeTotal();
}

function clickTreeCalculateBtn() {
    // 需求item
    let needs_item = document.getElementById("needs_item").textContent;
    // item 数量
    let needs_amount = document.getElementById("needs_amount").value;
    // 计算
    treeCalculateItem(needs_item, needs_amount);
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