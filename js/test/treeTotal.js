
/**
 * 统计结果
 */
let treeTotalList = {
    "原材料": {},
    "设备": {},
    "电量": 0,
    "产物": {}
}

/**
 * 旧的统计结果
 * 用于进行变化对比
 */
let oldTreeTotalList = {
    "原材料": {},
    "设备": {},
    "电量": 0,
    "产物": {}
}

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
        "产物": {}
    };
    // 统计原材料
    countMaterial(treeRootNode);
    showMaterialResult();
    // 统计设备

    // 统计电量

    // 统计产物
}

/**
 * 统计原材料
 */
function countMaterial(treeNode) {

    // 如果isCalculator为false，则不进行统计
    if (!treeNode.isCalculator) {
        console.log(treeNode.name + "treeNode.isCalculator：" + treeNode.isCalculator);
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
function countDevice() {
}
