/**
 * 计算函数入口
 * @param name 物品名字
 * @param number 物品数量
 */
function tableCalculateItem(name, number) {
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

function clickTableCalculateBtn() {
    // 需求item
    let needs_item = document.getElementById("needs_item").textContent;
    // item 数量
    let needs_amount = document.getElementById("needs_amount").value;
    // 计算
    calculateItem(needs_item, needs_amount);
}