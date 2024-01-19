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
                material_str += "<tr>" + "<td>" + i + "</td>" + "<td>" + getImgAndNameNodeStr(material) + "</td>" + "<td>" + material_list[material]["材料数量"].toFixed(2) + "</td>";
                // 设备 + 设备数量
                if (material_list[material]["设备"] === undefined) {
                    material_str += "<td>" + "</td>";
                    material_str += "<td>" + "</td>";
                } else {
                    material_str += "<td>" + getImgAndNameNodeStr(material_list[material]["设备"]) + "</td>";
                    material_str += "<td>" + material_list[material]["设备数量"].toFixed(2) + "</td>";
                }
                
                // 配方
                material_str += "<td><select id=\"recipe_select_" + material + "\"></select></td>";
                material_str += "</tr>";
            }
        }
        material_str += "<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
    }

    let materialListNode = document.getElementById("material_table");
    materialListNode.innerHTML = material_str;

    // 给所有select添加option
    for (let material in material_list) {
        let selectNode = document.getElementById("recipe_select_" + material);

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

}

function get_material_list() {
    let material_list = {};
    for (const key in newResultData) {
        if (newResultData[key]["是否计算"] === false) {
            continue;
        }
        let depth = newResultData[key]["path"].split("_").length;
        let material = newResultData[key]["material"];
        let materialNumber = newResultData[key]["number"];
        let matEquipName = newResultData[key]["equName"];
        let matEquipNumber = newResultData[key]["equNumber"];
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