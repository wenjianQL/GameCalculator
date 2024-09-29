// 进行增产剂的显示和操作
// 传入增产剂类型和效果，从game_data.buff.增产剂中获取对应的数据

/**
 * 添加增产剂效果选择下拉列表
 */
function addYieldEnhancerSelectNode(node, path) {
    // 找到id为"summary-" + path的节点
    if (!node) {
        return;
    }

    // 给这个节点添加增产剂选择下拉列表
    let selectNode = getYieldEnhancerSelectNode(path);
    if (selectNode == null) {
        return;
    }
    selectNode.id = "buff-" + path;
    // selectNode.value = "speed1-1.5";
    selectNode.style.marginLeft = "10px";

    // 修改事件
    selectNode.onchange = function (event) {
        // buff-1
        let id = event.target.id.split('-')[1];
        // speed-1.5
        let value = event.target.value.split('-')[1];

        if (event.target.value.startsWith("speed")) {
            newResultData[id]["加速"] = "speed"
            if (value === "1.5") {
                newResultData[id]["增产剂"] = 0;
            } else if (value === "2") {
                newResultData[id]["增产剂"] = 1;
            } else if (value === "2.5") {
                newResultData[id]["增产剂"] = 2;
            }
        } else {
            newResultData[id]["加速"] = "无";
        }
        // 刷新计算结果
        refreshCalResultInValueChange()
    }

    node.appendChild(selectNode);
}

function getYieldEnhancerSelectNode(path) {
    // 获取数据
    let data = game_data["buff"]["增产剂"]["data"];
    if (data == null) {
        return null;
    }

    // 结果数据，用于判断哪个option要选中
    let result_item = newResultData[path];
    let type = result_item["加速"];
    let buffIndex = result_item["增产剂"];

    // 创建下拉列表节点
    const select = document.createElement("select");

    const nullOption = document.createElement("option");
    nullOption.id = "无";
    nullOption.value = "无";
    nullOption.textContent = getTranslate("加速：无");
    select.appendChild(nullOption);

    if (result_item.hasOwnProperty("notBuff")) {
        // 没有增产剂效果
        return null;
    }

    // 将加速生成数据添加到下拉列表中
    for (const item of data) {
        const option = document.createElement("option");
        option.value = "speed-" + item["加速生成"];
        option.textContent = getTranslate("加速") +"：+" + (Math.ceil((item["加速生成"] - 1) * 1000) / 10) + "%";
        option.id = "speed-" + item["加速生成"];
        // console.log("加速生成"+item["名字"]);
        select.appendChild(option);

        if (type === "speed") {
            if (buffIndex === (parseInt(item["id"]) - 1)) {
                select.value = option.value;
            }
        }
    }

    return select;
}

function getBuffData(index) {
    try {
        return game_data["buff"]["增产剂"]["data"][index];
    } catch (err) {
        return null;
    }
}

/**
 * 获取增产倍率
 * @param type 类型：无、speed、increase
 * @param index 第几个数据
 * @param curRate 当前倍率
 * @returns {number|*} 返回倍率
 */
function getIncreaseRateByBuff(type, index, curRate) {
    let item = getBuffData(index)
    if (item === null) {
        return curRate;
    }

    return parseFloat(item["额外产出"]) * curRate;
}

function getSpeedRateByBuff(type, index, curRate) {
    let item = getBuffData(index)
    if (item === null) {
        return curRate;
    }

    return parseFloat(item["加速生成"]) * curRate;
}

function getEnergyRateByBuff(type, index, curRate) {
    let item = getBuffData(index)
    if (item === null) {
        return curRate;
    }

    return parseFloat(item["电力消耗"]) * curRate;
}
