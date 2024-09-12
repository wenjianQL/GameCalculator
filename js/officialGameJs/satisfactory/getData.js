// 配方获取爬虫
// 材料名字
const materialName = document.querySelector('.breadcrumb-item.active').textContent.trim();

const result = {};
result[materialName] = {
    "useIndex": 0,
    "data": []
}

// 获取所有class为card-body border-top的div
const cardBodies = document.querySelectorAll('.card-body.border-top');
// 遍历每个card-body
cardBodies.forEach(cardBody => {
    resultItem = {
        "time": 60,
        "equType": "",
        "equIndex": 0,
        "productList": {},
        "sourceList": {}
    }
    // cardBody第一个子元素是装备info
    const equipmentInfo = cardBody.children[0];
    // 设备名字
    const equipmentName = equipmentInfo.querySelector('small a').textContent.trim();
    resultItem.equType = equipmentName;

    // cardBody第二个子元素是配方info
    const recipeInfo = cardBody.children[1];
    // recipeInfo有两个子元素，第一个是sourceList，第二个是productionList
    const sourceList = recipeInfo.children[0];
    const productionList = recipeInfo.children[1];

    // 原料
    const sourceDivs = sourceList.querySelectorAll('div');
    sourceDivs.forEach(source => {
        // source中获取small标签中的内容，并把内容中的(和 / min)去掉
        const sourceName = source.querySelector('small').textContent.trim().replace('(', '').replace(' / min)', '');
        // source中获取a标签的文本内容
        const sourceLink = source.querySelector('a').textContent.trim();
        resultItem.sourceList[sourceName] = sourceLink;
    });

    // 成品
    const productionDivs = productionList.querySelectorAll('div');
    productionDivs.forEach(production => {
        // production中获取small标签中的内容，并把内容中的(和 / min)去掉
        const productionName = production.querySelector('small').textContent.trim().replace('(', '').replace(' / min)', '');
        // production中获取a标签的文本内容
        const productionLink = production.querySelector('a').textContent.trim();
        resultItem.productList[productionName] = productionLink;
    });

    // 将resultItem放到resultde data中
    result[materialName].data.push(resultItem);
});

// 已json格式的字符串进行输出，请去掉第一个字符和最后一个字符
const resultStr = JSON.stringify(result).slice(1, -1)
console.log(resultStr);