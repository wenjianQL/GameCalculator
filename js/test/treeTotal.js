
/**
 * 统计结果
 */
let treeTotalList = {
    "原材料": {},
    "设备": {},
    "电量": 0,
    "多余产物": {}
}

/**
 * 旧的统计结果
 * 用于进行变化对比
 */
let oldTreeTotalList = {}

/**
 * 进行统计
 */
function treeTotal() {
    // 将当前统计结果赋值给旧的统计结果
    oldTreeTotalList = treeTotalList;
    treeTotalList = {
        "原材料": {},
        "设备": {},
        "电量": 0,
        "多余产物": {}
    };
    
    // 统计原材料
    countMaterial(treeRootNode);
    showMaterialResult();

    // 统计设备
    countDevice(treeRootNode);
    showDeviceResult();
    
    // 统计电量
    countElectricity();
    showElectricityResult();

    // 统计多余产物
    countExcessProduct(treeRootNode);
    showExcessProductResult();
}

/**
 * 统计原材料
 */
function countMaterial(treeNode) {

    // 如果isCalculator为false，则不进行统计
    if (!treeNode.isCalculator) {
        return;
    }

    // treeNode没有childNodeList，或childNodeList为空
    if (!treeNode.childNodeList || Object.keys(treeNode.childNodeList).length === 0) {
        // 是原材料
        if (treeNode.name in treeTotalList["原材料"]) {
            treeTotalList["原材料"][treeNode.name] = Math.ceil(treeTotalList["原材料"][treeNode.name] + treeNode.number);
        } else {
            treeTotalList["原材料"][treeNode.name] = Math.ceil(treeNode.number);
        }
    }

    // 遍历treeNode的childNodeList
    for (let i = 0; i < treeNode.childNodeList.length; i++) {
        countMaterial(treeNode.childNodeList[i]);
    }
}

/**
 * 显示“统计原材料”结果
 */
function showMaterialResult() {
    // 找到id为sourceList的ul，然后遍历treeTotalList["原材料"]，将每个原材料的名称和数量添加到ul中
    let sourceList = document.getElementById("sourceList");
    // null判断
    if (!sourceList) {
        return;
    }
    
    // 先清空sourceList
    sourceList.innerHTML = "";
    for (let key in treeTotalList["原材料"]) {
        let li = document.createElement("li");
        let img = createImageElement(key);
        li.appendChild(img);
        let text = key + "：" + treeTotalList["原材料"][key];
        
        if (oldTreeTotalList["原材料"] && key in oldTreeTotalList["原材料"]) {
            let diff = treeTotalList["原材料"][key] - oldTreeTotalList["原材料"][key];
            console.log("diff：" + key + ": " + diff);
            if (diff !== 0) {
                let span = document.createElement("span");
                span.style.color = diff < 0 ? "green" : "red";
                // 加粗
                span.style.fontWeight = "bold";
                span.textContent = diff > 0 ? " (+" + diff + ")" : " (" + diff + ")";
                li.appendChild(document.createTextNode(text));
                li.appendChild(span);
            } else {
                li.appendChild(document.createTextNode(text));
            }
        } else {
            li.appendChild(document.createTextNode(text));
        }
        
        sourceList.appendChild(li);
    }
}

/**
 * 统计设备
 */
function countDevice(treeNode) {
    // 如果isCalculator为false，则不进行统计
    if (!treeNode.isCalculator) {
        return;
    }

    // childNodeList为空，则不进行统计
    if (!treeNode.childNodeList || Object.keys(treeNode.childNodeList).length === 0) {
        return;
    }

    // 获取equType下的设备（幸福工厂设备类型下只有一个设备，因此获取第一个）
    const device = getDeviceByIndex(treeNode.equType, 0);
    // 根据number/oneEquProductNumber，计算设备数量
    let equNumber = Math.ceil(treeNode.number / (treeNode.oneEquProductNumber * device.rate));
    if (device.name in treeTotalList["设备"]) {
        treeTotalList["设备"][device.name] = Math.ceil(treeTotalList["设备"][device.name] + equNumber);
    } else {
        treeTotalList["设备"][device.name] = Math.ceil(equNumber);
    }
    
    // 遍历treeNode的childNodeList
    for (let i = 0; i < treeNode.childNodeList.length; i++) {
        countDevice(treeNode.childNodeList[i]);
    }
}

/**
 * 显示“统计设备”结果
 * 
 */
function showDeviceResult() {
    // 找到id为totalList的ul
    let deviceList = document.getElementById("deviceList");
    // null判断
    if (!deviceList) {
        return;
    }
    // 先清空totalList
    deviceList.innerHTML = "";
    // 参考上面的原材料显示，也要进行变化对比
    for (let key in treeTotalList["设备"]) {
        let li = document.createElement("li");
        let img = createImageElement(key);
        li.appendChild(img);
        let text = key + "：" + treeTotalList["设备"][key];

        if (oldTreeTotalList["设备"] && key in oldTreeTotalList["设备"]) {
            let diff = treeTotalList["设备"][key] - oldTreeTotalList["设备"][key];
            console.log("diff：" + key + ": " + diff);
            if (diff !== 0) {
                let span = document.createElement("span");
                span.style.color = diff < 0 ? "green" : "red";
                // 加粗
                span.style.fontWeight = "bold";
                span.textContent = diff > 0 ? " (+" + diff + ")" : " (" + diff + ")";
                li.appendChild(document.createTextNode(text));
                li.appendChild(span);
            } else {
                li.appendChild(document.createTextNode(text));
            }
        } else {
            li.appendChild(document.createTextNode(text));
        }
        deviceList.appendChild(li);
    }
}

/**
 * 统计电量
 */
function countElectricity() {
    // 遍历treeTotalList中的设备
    for (let key in treeTotalList["设备"]) {
        // 获取设备电量
        const electricity = getDeviceElectricity(key);
        // 设备数量
        const equNumber = treeTotalList["设备"][key];
        // 将电量累加到treeTotalList["电量"]
        treeTotalList["电量"] = Math.ceil(treeTotalList["电量"] + electricity * equNumber);
    }
}

/**
 * 显示“统计电量”结果
 */
function showElectricityResult() {
    // 找到id为totalList的ul
    let electricityList = document.getElementById("electricityList");
    // null判断
    if (!electricityList) {
        return;
    }
    // 先清空electricityList
    electricityList.innerHTML = "";
    // 进行电量变化对比
    let text = treeTotalList["电量"].toLocaleString() + " MW";
    let li = document.createElement("li");
    
    if (oldTreeTotalList["电量"]) {
        let diff = treeTotalList["电量"] - oldTreeTotalList["电量"];
        console.log("diff：" + diff);
        if (diff !== 0) {
            let span = document.createElement("span");
            span.style.color = diff < 0 ? "green" : "red";
            span.style.fontWeight = "bold";
            span.textContent = diff > 0 ? " (+" + diff.toLocaleString() + ")" : " (" + diff.toLocaleString() + ")";
            li.appendChild(document.createTextNode(text));
            li.appendChild(span);
        } else {
            li.appendChild(document.createTextNode(text));
        }
    } else {
        li.appendChild(document.createTextNode(text));
    }
    
    electricityList.appendChild(li);
}

/**
 * 统计多余产物Excess product
 */
function countExcessProduct(treeNode) {
    // 如果isCalculator为false，则不进行统计
    if (!treeNode.isCalculator) {
        return;
    }

    // 如果otherProductList不为空，则进行统计
    if (treeNode.otherProductList && Object.keys(treeNode.otherProductList).length > 0) {
        console.log(treeNode.otherProductList);
        // 遍历otherProductList
        for (let productName in treeNode.otherProductList) {
            // 获取产物数量
            const productNumber = treeNode.otherProductList[productName];
            // 将产物名称和数量添加到treeTotalList["多余产物"]
            if (productName in treeTotalList["多余产物"]) {
                treeTotalList["多余产物"][productName] = Math.ceil(treeTotalList["多余产物"][productName] + productNumber);
            } else {
                treeTotalList["多余产物"][productName] = Math.ceil(productNumber);
            }
        }
    }

    // 遍历treeNode的childNodeList
    for (let i = 0; i < treeNode.childNodeList.length; i++) {
        countExcessProduct(treeNode.childNodeList[i]);
    }
}

/**
 * 显示“统计多余产物”结果
 */
function showExcessProductResult() {
    // 找到id为totalList的ul
    let excessProductList = document.getElementById("excessProductList");
    // null判断
    if (!excessProductList) {
        return;
    }
    // 先清空excessProductList
    excessProductList.innerHTML = "";
    // 进行多余产物变化对比
    for (let key in treeTotalList["多余产物"]) {
        let li = document.createElement("li");
        let img = createImageElement(key);
        li.appendChild(img);

        let text = key + "：" + treeTotalList["多余产物"][key];
        if (oldTreeTotalList["多余产物"] && key in oldTreeTotalList["多余产物"]) {
            let diff = treeTotalList["多余产物"][key] - oldTreeTotalList["多余产物"][key];
            console.log("diff：" + key + ": " + diff);
            if (diff !== 0) {
                let span = document.createElement("span");
                span.style.color = diff < 0 ? "green" : "red";
                span.style.fontWeight = "bold";
                span.textContent = diff > 0 ? " (+" + diff.toLocaleString() + ")" : " (" + diff.toLocaleString() + ")";
                li.appendChild(document.createTextNode(text));
                li.appendChild(span);
            } else {
                li.appendChild(document.createTextNode(text));
            }
        } else {
            li.appendChild(document.createTextNode(text));
        }
        excessProductList.appendChild(li);
    }
}