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
            newResultData[id]["增产剂效果"] = "speed"
            if (value === "1.25") {
                newResultData[id]["增产剂"] = 0;
            } else if (value === "1.5") {
                newResultData[id]["增产剂"] = 1;
            } else if (value === "2") {
                newResultData[id]["增产剂"] = 2;
            }
        } else if (event.target.value.startsWith("increase")) {
            newResultData[id]["增产剂效果"] = "increase"
            if (value === "1.125") {
                newResultData[id]["增产剂"] = 0;
            } else if (value === "1.2") {
                newResultData[id]["增产剂"] = 1;
            } else if (value === "1.25") {
                newResultData[id]["增产剂"] = 2;
            }
        } else {
            newResultData[id]["增产剂效果"] = "无";
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
    let type = result_item["增产剂效果"];
    let buffIndex = result_item["增产剂"];

    // 创建下拉列表节点
    const select = document.createElement("select");

    const nullOption = document.createElement("option");
    nullOption.id = "无";
    nullOption.value = "无";
    nullOption.textContent = getTranslate("增产剂效果：无");
    select.appendChild(nullOption);

    if (result_item.hasOwnProperty("notBuff")) {
        // 没有增产剂效果
        return null;
    }

    // 将加速生成数据添加到下拉列表中
    for (const item of data) {
        const option = document.createElement("option");
        option.value = "speed-" + item["加速生成"];
        option.textContent = item["名字"].substring(3) + getTranslate("加速") +"：+" + (Math.ceil((item["加速生成"] - 1) * 1000) / 10) + "%";
        option.id = "speed-" + item["加速生成"];
        console.log("加速生成"+item["名字"]);
        select.appendChild(option);

        if (type === "speed") {
            if (buffIndex === (parseInt(item["id"]) - 1)) {
                select.value = option.value;
            }
        }
    }

    // 额外产出
    if (!result_item.hasOwnProperty("onlySpeed")) {
        for (const item of data) {
            const option = document.createElement("option");
            option.value = "increase-" + item["额外产出"];
            option.textContent = item["名字"].substring(3) + getTranslate("增产") +"：+" + (Math.ceil((item["额外产出"] - 1) * 1000) / 10) + "%";
            console.log("额外产出"+item["名字"]);
            option.id = "increase-" + item["额外产出"];
            select.appendChild(option);

            if (type === "increase") {
                if (buffIndex === (parseInt(item["id"]) - 1)) {
                    select.value = option.value;
                }
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

/*
类说明：进行增产剂的统计
数据结构说明：
{
    "增产剂MK.Ⅰ": 累计喷涂次数，
    "增产剂MK.Ⅱ": 累计喷涂次数，
    "增产剂MK.Ⅲ": 累计喷涂次数，
}
 */
let buffNumber = {}

/**
 * 获取增产剂总数
 */
function getTotalBuffNumber() {

    buffNumber = {};

    // 先获取增产剂数据
    let buffDataList = game_data["buff"]["增产剂"].data

    // 对计算结果进行遍历
    let sourcePath;
    for (let id in newResultData) {
        if (newResultData[id]["是否计算"] === false || newResultData[id]["增产剂效果"] === "无") {
            continue;
        }

        // 获取增产剂
        let buffItem = buffDataList[newResultData[id]["增产剂"]]
        // 物品
        let material = newResultData[id]["material"];
        // 获取对应的配方
        let recipe = findSelectRecipe(material, newResultData[id]["recipeIndex"]);
        // 根据配方，获取原材料的数量
        let sourceNumber = 0;
        for (let ingredient in recipe["sourceList"]) {
            // 找到原材料
            sourcePath = id + "_" + ingredient;
            if (newResultData.hasOwnProperty(sourcePath)) {
                // 累计原材料数量
                sourceNumber += newResultData[sourcePath]["number"];
            }
        }

        let buffName = buffItem["名字"];
        if (buffNumber.hasOwnProperty(buffName)) {
            buffNumber[buffName] += sourceNumber;
        } else {
            buffNumber[buffName] = sourceNumber;
        }
    }

    let buffListUl = document.getElementById("buffList");
    if (buffListUl) {
        buffListUl.innerHTML = '';
        for (let key in buffNumber) {
            let li = document.createElement("li");
            li.textContent = key + "：" + buffNumber[key].toFixed(1) + "个";
            buffListUl.appendChild(li);
        }
    }
}
