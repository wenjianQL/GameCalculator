// 显示层次表格数据（材料总计与布置层级）
function show_table_list() {
    // 获取需要的所有材料
    let material_list = get_material_list();
    // 最大合成深度
    let max_depth = 0;
    for (const key in newResultData) {
        if (newResultData[key]["是否计算"] === false) {
            continue;
        }
        max_depth = Math.max(max_depth, key.split("_").length);
    }

    // 结果显示
    // 材料总计的显示(根据最大深度，显示第一层到最大深度层的材料内容)
    let material_str = "";
    // 从1到max_depth进行循环
    for (let i = 1; i <= max_depth; i++) {
        for (let material in material_list) {
            if (material_list[material]["深度"] === i) {
                material_str += "<tr>" + "<td>" + i + "</td>";
                const matNumber = material_list[material]["材料数量"];
                if (matNumber === 0) {
                    material_str += "<td>" + getImgAndNameNodeStr(material) + "\t" + "<span style='color: darkred'>已忽略</span>" + "</td>";
                } else {
                    material_str += "<td>" + getImgAndNameNodeStr(material) + "</td>";
                }
                material_str += "<td>" + matNumber.toFixed(2) + "</td>";
                // 设备 + 设备数量
                if (material_list[material]["设备"] === undefined) {
                    material_str += "<td>" + "</td>";
                    material_str += "<td>" + "</td>";
                } else {
                    material_str += "<td>" + getImgAndNameNodeStr(material_list[material]["设备"]) + "</td>";
                    material_str += "<td>" + material_list[material]["设备数量"].toFixed(2) + "</td>";
                }
                
                // 配方
                material_str += "<td>" +
                    "<select id=\"recipe_select_" + material + "\" style=\"max-width: 300px;\"></select>" +
                    "</td>";
                material_str += "<td>" +
                    "<select id=\"buff_select_" + material + "\" style=\"margin-top: 8px;\"></select>" +
                    "</td>";

                // 是否计算
                const materialNumber = material_list[material]["材料数量"];
                const isCal = materialNumber !== 0;
                const disableBtnText = isCal ? "忽略" : "恢复";
                material_str += `<td><button id="disable-btn-${material}" onclick="clickDisableBtn('${material}', ${isCal})">${disableBtnText}</button></td>`;

                material_str += "</tr>";
            }
        }
        material_str += "<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
    }

    let materialListNode = document.getElementById("material_table");
    materialListNode.innerHTML = material_str;

    // 给所有select添加option
    for (let material in material_list) {
        let selectNode = document.getElementById("recipe_select_" + material);
        if (selectNode === null) {
            continue;
        }

        // 获取物品对应的所有配方
        let materialRecipe = find_material_recipe(material);
        if (materialRecipe == null) {
            continue;
        }
        let useIndex = materialRecipe["useIndex"];
        let list = materialRecipe["data"];

        // 选中的配方进行修改
        selectNode.onchange = function (event) {
            let material = event.target.id.replace("recipe_select_", "");
            for (let key in newResultData) {
                // material的配方都进行修改
                if (key.endsWith(material)) {
                    newResultData[key].recipeIndex = parseInt(event.target.value);
                }
            }
            game_data["recipe_data"][material]["useIndex"] = parseInt(event.target.value);
            // 重新计算
            updateResultAfterChangeRecipe(material);
        }

        for (let i = 0; i < list.length; i++) {
            let array_item = list[i];
            let optionNode = document.createElement("option");
            optionNode.value = i;
            optionNode.innerHTML = getStep(array_item);
            selectNode.appendChild(optionNode);
            if (i === useIndex) {
                selectNode.value = i;
            }
        }
    }

    // 获取增产剂数据
    const buffData = game_data["buff"]["增产剂"]["data"];
    if (buffData != null) {
        for (let material in material_list) {
            let selectNode = document.getElementById("buff_select_" + material);
            if (selectNode === null) {
                continue;
            }

            // 获取任意一个material对应的newResultData的数据，因为有些物品存在增产剂限制
            let resultItem = {};
            for (let key in newResultData) {
                if (key.endsWith(material)) {
                    resultItem = newResultData[key];
                    break;
                }
            }

            if (resultItem == null) {
                continue;
            }

            let type = resultItem["增产剂效果"];
            let buffIndex = resultItem["增产剂"];

            // 没有增产剂效果
            if (resultItem.hasOwnProperty("notBuff")) {
                continue;
            }

            const nullOption = document.createElement("option");
            nullOption.id = "无";
            nullOption.value = "无";
            nullOption.textContent = getTranslate("增产剂效果：无");
            selectNode.appendChild(nullOption);

            // 添加加速效果
            for (const item of buffData) {
                const option = document.createElement("option");
                option.value = "speed-" + item["加速生成"];
                option.textContent = item["名字"].substring(3) + "加速：+" + (Math.ceil((item["加速生成"] - 1) * 1000) / 10) + "%";
                option.id = "speed-" + item["加速生成"];
                selectNode.appendChild(option);

                if (type === "speed") {
                    if (buffIndex === (parseInt(item["id"]) - 1)) {
                        selectNode.value = option.value;
                    }
                }
            }

            // 额外产出
            if (!resultItem.hasOwnProperty("onlySpeed")) {
                for (const item of buffData) {
                    const option = document.createElement("option");
                    option.value = "increase-" + item["额外产出"];
                    option.textContent = item["名字"].substring(3) + "产出：+" + (Math.ceil((item["额外产出"] - 1) * 1000) / 10) + "%";
                    option.id = "increase-" + item["额外产出"];
                    selectNode.appendChild(option);

                    if (type === "increase") {
                        if (buffIndex === (parseInt(item["id"]) - 1)) {
                            selectNode.value = option.value;
                        }
                    }
                }
            }

            // 增产剂效果修改
            selectNode.onchange = function (event) {
                // buff_select_材料名字
                let id = event.target.id.replace("buff_select_", "")
                // speed-1.5
                let value = event.target.value.split('-')[1];

                let effectType = "无";
                let effectIndex = 0;
                if (event.target.value.startsWith("speed")) {
                    effectType = "speed"
                    if (value === "1.25") {
                        effectIndex = 0;
                    } else if (value === "1.5") {
                        effectIndex = 1;
                    } else if (value === "2") {
                        effectIndex = 2;
                    }
                } else if (event.target.value.startsWith("increase")) {
                    effectType = "increase"
                    if (value === "1.125") {
                        effectIndex = 0;
                    } else if (value === "1.2") {
                        effectIndex = 1;
                    } else if (value === "1.25") {
                        effectIndex = 2;
                    }
                }

                // 给每个材料修改增产剂效果
                for (let key in newResultData) {
                    if (key.endsWith(id)) {
                        newResultData[key]["增产剂效果"] = effectType;
                        newResultData[key]["增产剂"] = effectIndex;
                    }
                }

                // 刷新计算结果
                refreshCalResultInValueChange()
            }
        }
    }

}

function get_material_list() {
    let material_list = {};
    for (const key in newResultData) {
        if (newResultData[key]["是否计算"] === false) {
            // continue;
        }
        let depth = newResultData[key]["path"].split("_").length;
        let material = newResultData[key]["material"];
        let materialNumber = newResultData[key]["number"];
        let matEquipName = newResultData[key]["equName"];
        let matEquipNumber = newResultData[key]["equNumber"];

        if (newResultData[key]["是否计算"] === false) {
            materialNumber = 0;
            matEquipNumber = 0;
        }

        if (material_list.hasOwnProperty(material)) {
            material_list[material]["材料数量"] += materialNumber;
            material_list[material]["设备数量"] += matEquipNumber;
            material_list[material]["深度"] = Math.max(depth, material_list[material]["深度"]);
        } else {
            material_list[material] = {};
            material_list[material]["深度"] = depth;
            material_list[material]["材料数量"] = materialNumber;
            material_list[material]["设备数量"] = matEquipNumber;
            material_list[material]["设备"] = matEquipName;
        }
    }

    return material_list;
}

/**
 * 层次表格中的点击忽略
 * @param material
 * @param isCal
 */
function clickDisableBtn(material, isCal) {
    for (let key in newResultData) {
        if (key.includes(material)) {
            let item = newResultData[key];
            item["是否计算"] = !isCal;
            let detailNode = document.getElementById("details-" + item["path"]);
            if (detailNode) {
                detailNode.remove();
            }
        }
    }
    refreshCalResultInValueChange();
}