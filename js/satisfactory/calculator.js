/*
线性计算。
计算逻辑：
1、根据传入的物品，获取物品对应的配方；
2、根据配比关系，计算需要的原料数据；
 */

// 树根节点
let treeRootNode = {}
// 树节点配方index映射
let treeNodeRecipeIndexMap = {}


/**
 * 计算物品生产所需的资源和设备
 * @param {string} name - 物品名称
 * @param {number} number - 需要生产的物品数量
 */
function calculateItem(name, number) {
    // 给title添加前缀：${name}*${number}
    document.title = `${name}*${number}`;
    // 获取计算结果
    treeRootNode = getCalculateResult("", name, number)
}


/**
 * 获取计算结果
 * 传入物品名字和数量，获取对应的配方，然后计算需要的原料数量，
 * 
 * @param {string} path - 当前物品的路径，用于追溯制造链
 * @param {string} name - 物品的名称，用于查找配方
 * @param {number} number - 需要制造的物品数量
 * @returns {Object|null} - 返回制造结果对象，包含制造路径、物品信息和所需原料等；如果找不到配方或原料，则返回null
 */
function getCalculateResult(path, name, number) {
    
    // 构造当前物品的完整路径
    let currentPath = path;
    if (path.length > 0) {
        currentPath += "-";
    }
    currentPath += name;

    // 初始化制造结果对象
    let result = {
        "path": currentPath, // 制造路径
        "name": name, // 物品名称
        "nodeRecipeIndex": 0, // 当前节点配方index
        "number": number, // 需要制造的数量
        "equType": "", // 制造设备类型
        "oneEquProductNumber": 0, // 配方中一台设备制造的产物数量
        "otherProductList": [], // 多余产物及数量
        "childNodeList": [], // 原料节点列表，用于存储下一级物品的制造结果
        "isCalculator": true, // 是否是计算
        "isExpand": true, // 是否展开
        "accelerateIndex": 0, // 加速index
        "increaseIndex": 0, // 增产index
        "isExcess": false, // 是否是多余产物
    };

    // if number < 0, return result
    if (number < 0) {
        result.isExcess = true;
        result.number = number * -1;
        return result;
    }

    // 如果treeNodeRecipeIndexMap中存在currentPath，则直接返回
    if (treeNodeRecipeIndexMap[currentPath]) {
        result.nodeRecipeIndex = treeNodeRecipeIndexMap[currentPath];
    }

    // 根据物品名称获取制造配方
    let recipe = getRecipeByIndex(name, result.nodeRecipeIndex);
    // 没有找到配方，说明是原料或不存在的物品
    if (recipe === null) {
        delete treeNodeRecipeIndexMap[currentPath];
        console.log("没有找到配方，说明是原料或不存在的物品： " + name);
        return result;
    }

    // 从配方中获取制造设备类型
    result.equType = recipe.equType;
    result.oneEquProductNumber = recipe.productList[name];
    // 获取配方中的产物列表
    let pList = recipe.productList;

    // 计算制造倍率，即需要制造的数量与配方中数量的比例
    let rate = 1;
    for (let key in pList) {
        if (key === name) {
            rate = number / pList[key];
        }
    }

    // 根据制造倍率计算副产物和原料的数量
    for (let key in recipe.productList) {
        if (key === name) {
            continue;
        }
        const otherResult = getCalculateResult(currentPath, key, -1 * Math.round(recipe.productList[key] * rate * 100) / 100);
        if (otherResult !== null) {
            result.otherProductList.push(otherResult);
        }
    }
    for (let key in recipe.sourceList) {
        // 递归计算原料的制造结果，并添加到子节点列表中
        let childNodeResult = getCalculateResult(currentPath, key, Math.round(recipe.sourceList[key] * rate * 100) / 100);
        if (childNodeResult !== null) {
            result.childNodeList.push(childNodeResult);
        }
    }

    // 返回制造结果
    return result;
}