let recipeIndexMap = {}

/**
 * 获取配方列表
 * @param name 物品名字
 * @returns {*} 配方列表
 */
function getRecipeList(name) {
    return recipeData[name]
}

/**
 * 根据传入的物品名字，获取data中的配方
 */
function getRecipe(name) {
    // 如果配方中没有name，则返回null
    console.log("getRecipe name = "+name);
    if (!recipeData[name]) {
        return null
    }

    if (!recipeIndexMap[name]) {
        recipeIndexMap[name] = 0
    }

    const index = recipeIndexMap[name]
    return recipeData[name][index]
}

/**
 * 传入name和index，获取data中的第index个配方
 */
function getRecipeByIndex(name, index) {
    // 防止index越界
    if (!recipeData[name]) {
        return null
    }

    if (recipeData[name].length === 0) {
        return null
    }

    if (index > recipeData[name].length) {
        return null
    }
    
    return recipeData[name][index]
}

/**
 * 传入名字和位置，修改默认配方
 */
function setDefaultRecipe(nameOrPath, index) {
    recipeIndexMap[nameOrPath] = index
}

function getRecipeIndexByPath(path) {
    if (!recipeIndexMap[path]) {
        return 0
    }
    return recipeIndexMap[path]
}

/**
 * 获取配方步骤
 * @param {object} item 配方
 * @returns {string} 配方步骤
 */
function getRecipeStep(item) {
    let sourceList = item["sourceList"]
    let productList = item["productList"]

    let str = ""
    if (Object.keys(sourceList).length > 0) {
        for (let key in sourceList) {
            str += sourceList[key] + " * " + key + " +"
        }
        str = str.substring(0, str.length - 1)
        str += " = "
    }
    for (let key in productList) {
        str += productList[key] + " * " + key + " +"
    }
    str = str.substring(0, str.length - 1)

    str += " (60s)"

    return str;
}