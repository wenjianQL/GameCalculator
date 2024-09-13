/**
 * 显示(生成)树形列表
 */
function showTreeList() {
    let ulNode = document.getElementById("ul-0");
    if (ulNode) {
        ulNode.innerHTML = "";
    }
    for (let path in newResultData) {
        generateTreeHtml(newResultData, path);
    }

    refreshTreeListData();
}

function generateTreeHtml(data, path) {
    let item = data[path];
    // 查找父节点
    let parentNode = document.getElementById("ul-" + item['prePath']);
    if (parentNode == null) {
        return;
    }

    // 要显示的文本内容
    let str = "";
    if (item.hasOwnProperty('equName')) {
        str = item['number'].toFixed(2) + " " + getSatisFactoryImgAndNameNodeStr(item['material']) + " (" + item['equNumber'].toFixed(2) + "*" + getSatisFactoryImgAndNameNodeStr(item['equName']) + ")";
    } else {
        str = item['number'].toFixed(2) + " " + getSatisFactoryImgAndNameNodeStr(item['material']);
    }

    // 获取物品对应的配方
    // 找到物品对应的配方列表
    let recipeArr = game_data["recipe_data"][item['material']];
    if (recipeArr == null) {
        return;
    }
    let recipeList = recipeArr["data"];


    // 循环data， 判断data中的数据是否有pid为id的
    let hasChild = false;
    for (let key in data) {
        if (data[key]['prePath'] === path) {
            hasChild = true;
            break;
        }
    }

    if (!hasChild) {
        // 不可合成
        let liNode = document.createElement('li');
        liNode.innerHTML = str;
        liNode.style.marginTop = "6px";
        if (item["是否计算"] === true) {
            liNode.style.textDecoration = "none";
        } else {
            liNode.style.textDecoration = "line-through";
        }
        if (recipeList.length > 1) {
            // 添加配方选择
            addRecipeSelectNode(liNode, path);
        }
        // 添加忽略按钮
        addDisableBtn(liNode, path);
        parentNode.appendChild(liNode);
        return;
    }

    let summary = document.createElement("summary");
    summary.id = "summary-" + path;
    summary.innerHTML = str;


    if (recipeList.length > 1) {
        // 添加配方选择
        addRecipeSelectNode(summary, path);
    }

    // 添加增产剂效果选择
    // addYieldEnhancerSelectNode(summary, id);

    // 添加忽略按钮
    addDisableBtn(summary, path);

    let ul = document.createElement("ul");
    ul.id = "ul-" + path;

    let details = document.createElement("details");
    details.id = "details-" + path;
    details.open = item["isShow"] === true
    if (item["是否计算"] === true) {
        summary.style.textDecoration = "none";
    } else {
        summary.style.textDecoration = "line-through";
    }

    details.addEventListener('toggle', function() {
        newResultData[path]["isShow"] = details.open;
    });

    details.appendChild(summary);
    details.appendChild(ul);

    let li = document.createElement("li");
    li.appendChild(details);
    li.style.marginTop = "6px";
    parentNode.appendChild(li);
}

function addRecipeSelectNode(node, path) {
    if (!node) {
        return;
    }

    if (newResultData[path]["number"] < 0) {
        return;
    }

    let selectNode = getRecipeSelectNode(path);
    selectNode.id = "recipe-" + path;
    selectNode.style.marginLeft = "10px";
    // 配方修改事件
    selectNode.onchange = function (event) {
        newResultData[path]["recipeIndex"] = event.target.value;
        // 局部修改，不修改整体，所以下面这行注释掉。或者说应该修改成，只改计算数据中的所有这个物品对应的配方。
        // game_data["recipe_data"][name]["useIndex"] = event.target.value;
        // saveDataToLocalStorage();
        updateResultAfterChangeRecipe(path);
    }

    node.appendChild(selectNode);
}

function getRecipeSelectNode(path) {
    let item = newResultData[path];
    // 找到物品对应的所有配方
    let recipeList = find_material_recipe(item["material"])["data"];
    if (recipeList.length === 1) {
        return null;
    }

    // 创建下拉列表节点
    const select = document.createElement("select");
    for (let i = 0; i < recipeList.length; i++) {
        let recipeItem = recipeList[i];
        const option = document.createElement("option");
        option.value = i;
        option.innerHTML = getStep(recipeItem);
        option.id = "recipe-option-" + i;
        select.appendChild(option);

        if (i == item["recipeIndex"]) {
            select.value = option.value;
        }
    }

    return select;
}

function addDisableBtn(node, path) {
    if (!node) {
        return;
    }

    let btn = document.createElement("button");
    btn.id = "disable-btn-" + path;
    btn.style.marginLeft = "10px";

    if (newResultData[path]["是否计算"] === true) {
        btn.textContent = "忽略";
        if (needTranslate) {
            btn.textContent = "Ignore";
        }
    } else {
        btn.textContent = "恢复";
        if (needTranslate) {
            btn.textContent = "Restore";
        }
    }
    btn.onclick = function (event) {
        let path = event.target.id.split("-")[2];
        disablePathList.push(path);
        let isDisable = !newResultData[path]["是否计算"];
        for (let key in newResultData) {
            let item = newResultData[key];
            if (item["path"].toString().startsWith(path)) {
                item["是否计算"] = isDisable;
                let detailNode = document.getElementById("details-" + path);
                if (detailNode) {
                    detailNode.remove();
                }
            }
        }
        refreshCalResultInValueChange();
    }

    node.appendChild(btn);
}

function show_source_material_list() {
    if (newResultData === {}) {
        return;
    }

    let idList = [];
    let pidList = [];
    for (let id in newResultData) {
        if (newResultData[id]["是否计算"] === false) {
            continue;
        }
        idList.push(newResultData[id]['path']);
        pidList.push(newResultData[id]['prePath']);
    }

    // 遍历idList, 找到在pidList中不存在的id,即为原材料id
    let sourceMaterialList = [];
    idList.filter(function(path) {
        let isNotInList = !pidList.includes(path);
        if (isNotInList) {
            sourceMaterialList.push(path);
        }
    });

    source_data = {};
    // 遍历sourceMaterialList，找到对应的数据，然后进行累加
    for (let i = 0; i < sourceMaterialList.length; i++) {
        let path = sourceMaterialList[i];
        let item = newResultData[path];
        // 从item中获取 物品 和 数量， 并以物品：数量的形式存到source_data中。要注意source_data中是否以存在物品了，如果存在，则数量累加。
        if (source_data.hasOwnProperty(item['material'])) {
            source_data[item['material']] += item['number'];
        } else {
            source_data[item['material']] = item['number'];
        }
    }
    // 将原材料总计结果显示到页面上
    show_source_material_list_to_pager();
}

/**
 * 将原材料总计结果显示到页面上
 */
function show_source_material_list_to_pager() {
    // 原材料
    let source_str = "";
    // 多余产物
    let out_str = "";
    for (let sourceItem in source_data) {
        // 原材料
        if (source_data[sourceItem] >= 0) {
            source_str += "<li>" + source_data[sourceItem].toFixed(2) + " * " + getSatisFactoryImgAndNameNodeStr(sourceItem) + "</li>";
        } else {
            // 多余产物
            out_str += "<li>" + source_data[sourceItem].toFixed(1) + " * " + getSatisFactoryImgAndNameNodeStr(sourceItem) + "</li>";
        }
    }

    // 原材料
    let sourceListNode = document.getElementById("sourceList");
    sourceListNode.innerHTML = source_str;

    // 多余产物
    document.getElementById("surplusList").innerHTML = out_str;
}

/**
 * 树形列表的设备总计、电量总计
 */
function show_equipment_in_tree_list_mode() {
    // 设备数量
    let total_equipment_list = {};
    // 最大耗电量(按设备数量计算)
    let max_energy_count = 0;
    // 标准耗电量（按实际需要的设备数量计算）
    let standard_energy_count = 0;

    // 耗电量计算
    for (let cid in newResultData) {
        let item = newResultData[cid];

        if (!item.hasOwnProperty("equName")) {
            continue;
        }

        if (item["是否计算"] == false) {
            continue;
        }

        // 向上取整后再进行添加
        if (total_equipment_list.hasOwnProperty(item["equName"])) {
            total_equipment_list[item["equName"]] += Math.ceil(item["equNumber"]);
        } else {
            total_equipment_list[item["equName"]] = Math.ceil(item["equNumber"]);
        }

        // 获取设备列表
        let equipmentList = game_data.equipment;
        for (let equipmentType in equipmentList) {
            let equipmentData = equipmentList[equipmentType]["data"];
            for (let equipmentItem in equipmentData) {
                let equipmentDataItem = equipmentData[equipmentItem];
                if (equipmentDataItem["name"] === item["equName"]) {
                    // 最大耗电量（根据机器数量进行向上取整后计算）
                    max_energy_count += (equipmentDataItem["energy"] * Math.ceil(item["equNumber"]));
                    // 标准耗能(根据机器实际需要数量进行计算)
                    standard_energy_count += (equipmentDataItem["energy"] * item["equNumber"]);
                }
            }
        }
    }

    // 设备总计Node添加
    let total_str = "";
    for (let item in total_equipment_list) {
        total_str += "<li>" + total_equipment_list[item].toFixed(2) + " * " + getSatisFactoryImgAndNameNodeStr(item) + "</li>";
    }
    let totalListNode = document.getElementById("totalList");
    totalListNode.innerHTML = total_str;

    // 耗电添加
    let energy_str = "<li title=\"取整机器数量 * 机器耗电量。\">最大：" + max_energy_count.toFixed(2) + "</li>";
    energy_str += "<li title=\"实际机器数量 * 机器耗电量。\">标准：" + standard_energy_count.toFixed(2) + "</li>";
    if (needTranslate) {
        energy_str = "<li title=\"取整机器数量 * 机器耗电量。\">Max：" + max_energy_count.toFixed(2) + "</li>";
        energy_str += "<li title=\"实际机器数量 * 机器耗电量。\">Normal：" + standard_energy_count.toFixed(2) + "</li>";
    }
    let energyListNode = document.getElementById("energyList");
    energyListNode.innerHTML = energy_str;
}

/**
 * 刷新树形列表
 */
function refreshTreeListData()
{
    const treeData = convertToJsTreeFormat(newResultData);
    // 修改deptTree的数据为demoData
    $('#deptTree').jstree(true).settings.core.data = treeData.children;
    // // 重新加载数据
    $('#deptTree').jstree(true).refresh();

    function convertToJsTreeFormat(data) {
        let treeData = {};

        // 循环计算结果
        for (const key in data) {

            // 不计算
            if (data[key]["是否计算"] === false) {
                continue;
            }

            const path = key.split('_');
            let currentNode = treeData;
            for (let i = 0; i < path.length; i++) {
                let sourcePath = path.slice(0, i + 1).join('_');
                // 物品数量
                let num = data[sourcePath]["number"];
                // 设备数量
                let equNumber = data[sourcePath]["equNumber"];
                // 设备名字
                let equName = data[sourcePath]["equName"];
                // 材料名字
                const pathName = path[i].replace("~", "");
                const matName = pathName.split('`')[0];
                let nodeName = num.toFixed(2) + "*" + getTranslate(matName) + ", " + equNumber.toFixed(2) + "*" + getTranslate(equName);
                if (equName === undefined || equName === "") {
                    nodeName = num.toFixed(2) + "*" + getTranslate(matName);
                }
                if (!currentNode.children) {
                    currentNode.children = [];
                }
                const existingNode = currentNode.children.find(function (node) {
                    return node.path === sourcePath;
                });
                if (existingNode) {
                    currentNode = existingNode;
                } else {
                    const newNode = {
                        "path": sourcePath,
                        "icon": `../../../img/game/satisfactory/px_16/${matName}.jpg`,
                        "text": nodeName,
                        "checked": false,
                        "attributes": null,
                        "state": {
                            "opened": true
                        },
                        "children": []
                    };
                    currentNode.children.push(newNode);
                    currentNode = newNode;
                }
            }
        }
        return treeData;
    }
}

let scale = 1; // 初始缩放比例

function zoomIn() {
    const deptTree = document.getElementById("deptTree");
    scale += 0.1;
    deptTree.style.transform = "scale(" + scale + ")";
}

function zoomOut() {
    const deptTree = document.getElementById("deptTree");
    scale -= 0.1;
    deptTree.style.transform = "scale(" + scale + ")";
}