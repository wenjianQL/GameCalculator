/**
 * 按物品进行分类，如：{"铁锭": [{}, {}]}
 */
let materialSortMap = {}

/**
 * 根据层级进行归类的数据map，key是层级，value是数组。value数组内是物品数据（物品名字、物品数量、物品层级、物品配方index、设备类型、）
 */
let depthTableDataMap = {}

/**
 * 加速Index
 */
let tableAccelerateIndexMap = {}
/**
 * 增产Index
 */
let tableIncreaseIndexMap = {}

/**
 * 忽略计算的路径。
 * 在对物品进行分类时，如果物品的路径包含ignorePathList中的路径，则将该物品忽略。
 */
let ignorePathList = []

/**
 * 渲染层次表格
 */
function renderTable(treeNodeData) {
    if (!treeNodeData) return null;

    materialSortMap = {};
    depthTableDataMap = {};

    // 先对物品进行分类
    addToMaterialSortMap(treeNodeData);

    // 根据分类结果，计算物品最大深度和物品数量，并根据深度进行归类
    calculateMaterialDepthAndNumberTotal();

    // 进行结果展示
    renderDepthTableDataMap();
}

/**
 * 传入data,根据data中的name，在materialSortMap中查找name对应的数组是否创建，
 * 如果没有创建，则创建一个空数组，并将data添加到数组中。
 */
function addToMaterialSortMap(data) {
    // 遍历pathList，查看当前dta的path是否由被忽略的路径对应的物品计算出来的。
    let isContain = false;
    // 是否一样的路径
    let isSamePath = false;
    ignorePathList.forEach(ignorePath => {
        // data.path !== path：忽略子节点，保留当前节点，以便恢复。
        if (data.path.startsWith(ignorePath)) {
            isContain = true;
            if (data.path === ignorePath) {
                isSamePath = true;
            }
        }
    });

    // 路径是忽略路径衍生出来的子节点
    if (isContain) {
        // 当前item的路径就是被忽略的数据
        if (isSamePath) {
            // 只是路径对应的节点标记不计算，因为还要显示在层次表格中。
            data.isCalculator = false
        } else {
            data.isCalculator = true;
            // 被忽略节点的子节点，就不需要算了。
            return;
        }
    } else {
        data.isCalculator = true;
    }

    if (!materialSortMap[data.name]) {
        materialSortMap[data.name] = [];
    }
    materialSortMap[data.name].push(data);

    // 配方index记录
    recipeIndexMap[data.name] = data.nodeRecipeIndex;
    if (storage != null) {
        storage.set(data.name, data.nodeRecipeIndex);
    }
    // 加速index记录
    tableAccelerateIndexMap[data.name] = data.accelerateIndex;
    // 增产index记录
    tableIncreaseIndexMap[data.name] = data.increaseIndex;

    // 遍历data的childNodeList
    for (let i = 0; i < data.childNodeList.length; i++) {
        addToMaterialSortMap(data.childNodeList[i]);
    }
}

/**
 * 物品最大深度计算，物品数量统计
 */
function calculateMaterialDepthAndNumberTotal() {
    for (let key in materialSortMap) {
        let result = {
            "depth": 1, // 深度
            "pathList": [], // 在树节点中的路径，用于在后面的配方修改、加速、增产等变化的情况下会用到。
            "name": key, // 物品名字
            "number": 0, // 数量
            "otherProductTotal": {}, // 多余产物及数量
            "childNodeTotal": {}, // 原料及数量
            "equType": "", // 制造设备类型
            "oneEquProductNumber": 0, // 配方中一台设备制造的产物数量
            "isCalculator": true, // 是否是计算
        }

        for (let i = 0; i < materialSortMap[key].length; i++) {
            let item = materialSortMap[key][i];
            // 根据item的path中的"-"进行分割，然后数组的大小就是depth
            let depth = item.path.split("-").length;
            // result中的depth取和depth的最大者
            result.depth = Math.max(result.depth, depth);
            // item的路径记录，
            result.pathList.push(item.path);
            // 物品数量统计
            result.number += materialSortMap[key][i].number;
            // 多余产物统计
            for (let j = 0; j < item.otherProductList.length; j++) {
                let otherProduct = item.otherProductList[j];
                if (!result.otherProductTotal[otherProduct.name]) {
                    result.otherProductTotal[otherProduct.name] = 0;
                }
                result.otherProductTotal[otherProduct.name] += otherProduct.number;
            }
            // 原料统计
            for (let j = 0; j < item.childNodeList.length; j++) {
                let childNode = item.childNodeList[j];
                if (!result.childNodeTotal[childNode.name]) {
                    result.childNodeTotal[childNode.name] = 0;
                }
                result.childNodeTotal[childNode.name] += childNode.number;
            }
            // 设备类型
            result.equType = item.equType;
            // 一台设备制造的产物数量
            result.oneEquProductNumber = item.oneEquProductNumber;
            // 是否是计算
            result.isCalculator = item.isCalculator;
        }

        depthTableDataMap[result.depth] = depthTableDataMap[result.depth] || [];
        depthTableDataMap[result.depth].push(result);
    }
    // console.log(depthTableDataMap);
}

/**
 * 层级表格的渲染
 */
function renderDepthTableDataMap() {
    // 遍历depthTableDataMap中的key，将key放到一个数组中，并进行从小到大的排序。
    let depthList = Object.keys(depthTableDataMap).map(Number);
    depthList.sort((a, b) => a - b);

    // 获取material_table
    const materialTable = document.getElementById('material_table');
    // 清空materialTable
    materialTable.innerHTML = '';

    for (let depth of depthList) {
        // 获取到depth对应的数组
        let depthData = depthTableDataMap[depth];
        for (let i = 0; i < depthData.length; i++) {
            // 获取到要渲染的item
            let item = depthData[i];
            let tr = renderDepthTableDataMapItem(item);
            materialTable.appendChild(tr);
        }
        // 添加一行空的tr
        const emptyTr = document.createElement('tr');
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        emptyTr.appendChild(document.createElement('td'));
        materialTable.appendChild(emptyTr);
    }
}

function renderDepthTableDataMapItem(item) {
    // 创建一个tr
    const tr = document.createElement('tr');
    // tr的id是item.name
    tr.id = item.name;

    // 创建一个td，并添加到tr中
    const depthTd = document.createElement('td');
    depthTd.textContent = item.depth;
    tr.appendChild(depthTd);

    const materialTd = document.createElement('td');
    const img = createImageElement(item.name);
    materialTd.appendChild(img);    
    materialTd.appendChild(document.createTextNode(item.name + "*" + Number(item.number)));
    if (!item.isCalculator) {
        materialTd.appendChild(document.createTextNode("（已忽略）"));
    }
    tr.appendChild(materialTd);

    // 获取物品对应的配方
    let recipe = getRecipeByIndex(item.name, recipeIndexMap[item.name]);
    if (recipe == null) {
        recipe = getRecipeByIndex(item.name, 0);
        recipeIndexMap[item.name] = 0;
        if (storage != null) {
            storage.set(item.name, 0);
        }
    }

    // 设备名字*数量
    const equipmentTd = document.createElement('td');
    if (item.isCalculator && Object.keys(item.childNodeTotal).length > 0) {
        const equ = getDevice(recipe.equType);
        // 计算设备需要的数量
        const oneEquProductNumber = item.oneEquProductNumber * equ.rate * (1 + deviceAccelerateList[tableAccelerateIndexMap[item.name]])
        let needDeviceNumber = Math.ceil((item.number / oneEquProductNumber) * 100) / 100;

        const img = createImageElement(equ.name);
        equipmentTd.appendChild(img);
        equipmentTd.appendChild(document.createTextNode(equ.name + "*" + needDeviceNumber));
    }
    tr.appendChild(equipmentTd);

    // 原料：原料名字*数量
    const sourceTd = document.createElement('td');
    if (item.isCalculator && Object.keys(item.childNodeTotal).length > 0) {
        for (let key in item.childNodeTotal) {
            const img = createImageElement(key);
            sourceTd.appendChild(img);
            sourceTd.appendChild(document.createTextNode(key + "*" + item.childNodeTotal[key]));
            // 加个间隔
            sourceTd.appendChild(document.createTextNode(" "));
        }
    }
    tr.appendChild(sourceTd);

    // 多余产物
    const otherProductTd = document.createElement('td');
    if (item.isCalculator) {
        if (Object.keys(item.otherProductTotal).length > 0) {
            for (let key in item.otherProductTotal) {
                const img = createImageElement(key);
                otherProductTd.appendChild(img);
                otherProductTd.appendChild(document.createTextNode(key + "*" + item.otherProductTotal[key]));
            }
        }
    }
    tr.appendChild(otherProductTd);

    // 配方Select
    const recipeTd = document.createElement('td');
    if (item.isCalculator) {
        const select = document.createElement('select');
        const recipeList = getRecipeList(item.name);
        for (let i = 0; i < recipeList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = getRecipeStep(recipeList[i]);
            option.id = item.name + "_" + i;
            select.appendChild(option);
        }
        select.value = recipeIndexMap[item.name];
        select.addEventListener('change', () => {
            const selectId = select.options[select.selectedIndex].id;
            const selectIdArr = selectId.split("_");
            const name = selectIdArr[0];
            const index = selectIdArr[1];
            // 修改物品记录的配方index
            recipeIndexMap[name] = index;
            if (storage != null) {
                storage.set(name, index);
            }
            item.pathList.forEach(path => {
                setDefaultRecipe(path, index)
            });
    
            // 重新进行页面的计算和渲染
            clickTableCalculateBtn();
        });
        recipeTd.appendChild(select);
    }
    tr.appendChild(recipeTd);

    // 加速select
    const accelerateSelectTd = document.createElement('td');
    if (item.isCalculator) {
        const accelerateSelect = document.createElement('select');
        // 创建option
        for (let i = 0; i < deviceAccelerateList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = "加速: " + deviceAccelerateList[i];
            option.id = item.name + "-加速_" + i;
            accelerateSelect.appendChild(option);
        }
        accelerateSelect.value = tableAccelerateIndexMap[item.name];
        accelerateSelect.addEventListener('change', () => {
            const selectId = accelerateSelect.options[accelerateSelect.selectedIndex].id;
            const selectIdArr = selectId.split("-加速_");
            const name = selectIdArr[0]
            const index = selectIdArr[1];
            tableAccelerateIndexMap[name] = index;
            changeTrData(item);
        });
        accelerateSelectTd.appendChild(accelerateSelect);
    }
    tr.appendChild(accelerateSelectTd);

    // 增产select
    const increaseSelectTd = document.createElement('td');
    if (item.isCalculator) {
        const increaseSelect = document.createElement('select');
        for (let i = 0; i < deviceIncreaseList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = "增产: " + deviceIncreaseList[i];
            option.id = item.name + "-增产_" + i;
            increaseSelect.appendChild(option);
        }
        increaseSelect.value = tableIncreaseIndexMap[item.name];
        increaseSelect.addEventListener('change', () => {
            const selectId = increaseSelect.options[increaseSelect.selectedIndex].id;
            const selectIdArr = selectId.split("-增产_");
            const name = selectIdArr[0];
            const index = selectIdArr[1];
            tableIncreaseIndexMap[name] = index;

            /*
            增产计算：
                找到item的pathList下的节点，然后设置增产倍率，然后调用getCalculateResult方法进行计算。
                然后将结果赋值回来。
                然后去重新渲染页面。
            */
           item.pathList.forEach(itemPath => {
                let findTreeData = getTreeDataByPath(itemPath);
                if (findTreeData != null) {
                    findTreeData.increaseIndex = index;
                    const newData = getCalculateResult(itemPath.substring(0, itemPath.lastIndexOf('-')), name, item.number / (1 + deviceIncreaseList[index]));
                    findTreeData.childNodeList = newData.childNodeList;
                }
           });
           // 重新进行页面的渲染
           renderTable(treeRootNode)
        });
        increaseSelectTd.appendChild(increaseSelect);
    }
    tr.appendChild(increaseSelectTd);

    // 其它
    const otherTd = document.createElement('td');
    // 忽略/恢复按钮
    const ignoreButton = document.createElement('button');
    if (item.isCalculator) {
        ignoreButton.innerHTML = '忽略';
        ignoreButton.addEventListener('click', () => {
            item.isCalculator = false;
            item.pathList.forEach(path => {
                ignorePathList.push(path);
            });
            // 重新进行页面的渲染
            renderTable(treeRootNode)
        });
    } else {
        ignoreButton.innerHTML = '恢复';
        ignoreButton.addEventListener('click', () => {
            item.isCalculator = true;
            item.pathList.forEach(path => {
                ignorePathList = ignorePathList.filter(item => item !== path);
            });
            // 重新进行页面的渲染
            renderTable(treeRootNode)
        });
    }
    
    otherTd.appendChild(ignoreButton);
    tr.appendChild(otherTd);

    return tr;
}

function changeTrData(item) {
    const tr = renderDepthTableDataMapItem(item);
    // 如果存在一个tr的id为item.name，则将tr替换为新的tr
    const oldTr = document.getElementById(item.name);
    if (oldTr) {
        oldTr.parentNode.replaceChild(tr, oldTr);
    }
}

function getTreeDataByPath(path) {
    // 根据path，在treeNodeData中查找，并返回对应的treeNodeData
    return findTreeDataByPath(treeRootNode, path);
}

function findTreeDataByPath(data, path) {
    if (data.path === path) {
        return data;
    }
    for (let i = 0; i < data.childNodeList.length; i++) {
        const childNode = data.childNodeList[i];
        const result = findTreeDataByPath(childNode, path);
        if (result) {
            return result;
        }
    }
    return null;
}


function createImageElement(key) {
    const img = document.createElement('img');
    img.src = imgPath + "/" + key + ".jpg";
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.marginRight = '4px';
    return img;
}

/**
 * 增产变化处理
 * 传入data和增产倍率，对data中的childNodeList内的数据进行增产变化处理，并递归处理childNodeList内的数据。
 */
function increaseChange(data, increase) {
    for (let key in data.childNodeList) {
        data.childNodeList[key].number = data.childNodeList[key].number / (1 + increase);
    }
}