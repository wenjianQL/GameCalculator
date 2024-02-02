let selectDialogMaterialTable = [
    ['铁块', '铜块', '高纯硅块', '钛块', '石材', '高能石墨', '精炼油', '石墨烯', '塑料', '增产剂MK.Ⅰ', '增产剂MK.Ⅱ', '增产剂MK.Ⅲ', '机枪弹箱', '导弹组'],
    ['磁铁', '磁线圈', '晶格硅', '钛合金', '玻璃', '金刚石', '', '', '有机晶体', '燃烧单元', '爆破单元', '晶石爆破单元', '钛化弹箱', '超音速导弹组'],
    ['钢材', '电动机', '', '钛化玻璃', '棱镜', '', '', '钛晶石', '', '动力引擎', '推进器', '加力推进器', '超合金弹箱', '引力导弹组'],
    ['齿轮', '电磁涡轮', '硅石', '电路板', '引力透镜', '硫酸', '氢', '碳纳米管', '奇异物质', '配送运输机', '物流运输机', '星际物流运输船', '等离子胶囊', '炮弹组'],
    ['电浆激发器', '超级磁场环', '粒子宽带', '处理器', '卡西米尔晶体', '粒子容器', '重氢', '', '太阳帆', '框架材料', '戴森球组件', '小型运载火箭', '反物质胶囊', '高爆炮弹组'],
    ['光子合并器', '', '微晶元件', '量子芯片', '', '', '液氢燃料棒', '氘核燃料棒', '反物质燃料棒', '奇异湮灭燃料棒', '位面过滤器', '反物质', '湮灭约束球', '晶石炮弹组'],
    ['电磁矩阵', '能量矩阵', '结构矩阵', '信息矩阵', '引力矩阵', '宇宙矩阵', '原型机', '精准无人机', '攻击无人机', '护卫舰', '驱逐舰', '空间翘曲器', '', '地基'],
    ['可燃冰', '临界光子', '', '', '', '', '', '', '', '', '', '', '', '']
];

let selectDialogBuildTable = [
    ['电力感应塔', '无线输电塔', '卫星配电站', '风力涡轮机', '火力发电机', '太阳能板', '蓄电器', '地热发电站', '微型聚变发电站', '能量枢纽', '射线接收站', '人造恒星', '', ''],
    ['传送带', '高速传送带', '极速传送带', '四向分流器', '自动集装机', '流速监测器', '喷涂机', '小型储物仓', '大型储物仓', '储液罐', '物流配送器', '行星内物流运输站', '星际物流运输站', '轨道采集器'],
    ['分拣器', '高速分拣器', '极速分拣器', '采矿机', '大型采矿机', '抽水机', '原油萃取站', '原油精炼厂', '分馏塔', '化工厂', '量子化工厂', '微型粒子对撞机', '', ''],
    ['电弧熔炉', '位面熔炉', '负熵熔炉', '制造台MK.Ⅰ', '制造台MK.Ⅱ', '制造台MK.Ⅲ', '重组式制造台', '研究站', '自演化研究站', '电磁轨道弹射器', '垂直发射井', '', '', ''],
    ['高斯机枪塔', '导弹防御塔', '聚爆加农炮', '高频激光塔', '磁化电浆炮', '战场分析基站', '信号塔', '行星护盾发生器', '', '', '', '', '', '']
]

let materialArray = selectDialogMaterialTable.flat();
let buildArray = selectDialogBuildTable.flat()

/**
 * 初始化弹窗选择的内容
 */
function initSelectDialog() {
    let node = document.getElementById("selectGridTableCustom")
    if (!node) {
        return;
    }

    node.innerHTML = '';

    for (let item in material_data) {
        // item不在selectDialogMaterialTable中
        if (materialArray.includes(material_data[item]) || buildArray.includes(material_data[item])) {
            continue;
        }

        // 将item数据添加到
        let spanNode = document.createElement("span");
        spanNode.textContent = material_data[item];
        spanNode.onclick = function () {
            let inputNode = document.getElementById("needs_item");
            if (inputNode) {
                inputNode.value = this.textContent;
            }
            let closeButton = document.getElementById("selectDialogClickClose");
            if (closeButton) {
                closeButton.click();
            }
        }
        node.appendChild(spanNode);
    }
}

function loadGridTable(tableData, targetId) {
    let columnNumber = 14;
    let node = document.getElementById(targetId);
    if (!node) {
        return;
    }
    node.innerHTML = '';

    for (let i = 0; i < tableData.length; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";

        for (let j = 0; j < columnNumber; j++) {
            let material = tableData[i][j];
            let cell = document.createElement("div");
            cell.style.width = "50px";
            cell.style.height = "50px";
            cell.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell.style.margin = "2px";
            cell.setAttribute("data-name", material)

            if (material === '') {
                let spanNode = document.createElement("span");
                spanNode.style.width = "100%";
                spanNode.style.height = "100%";
                spanNode.textContent = material;
                cell.appendChild(spanNode);
            } else {
                let imgNode = document.createElement("img");
                imgNode.style.width = "100%";
                imgNode.style.height = "100%";
                imgNode.src = "../../../img/game/dsp/" + material + ".png";
                cell.appendChild(imgNode);
            }

            cell.onclick = function () {
                let inputNode = document.getElementById("needs_item");
                if (inputNode) {
                    inputNode.value = this.getAttribute("data-name");
                }
                let closeButton = document.getElementById("selectDialogClickClose");
                if (closeButton) {
                    closeButton.click();
                }
            }

            row.appendChild(cell);
        }

        node.appendChild(row);
    }
}

/**
 * 计算参数设置
 * 支持：
 *     戴森球计划：
 *         熔炉设置、制造台设置、化工厂设置、研究站设置、能量枢纽设置
 */
function calConfigChange(data) {
    // 对data进行-分割，前面的是类型type、后面的是value
    let splits = data.split("-");
    let type = splits[0];
    let value = splits[1];
    calValueChange(type, value);

    calValueMap[type] = parseInt(value) - 1;

    // 找到计算参数配置的div
    let divNode = document.getElementsByClassName("calConfigSetting");
    // 从divNode中查找id为type对应内容开头的img标签。
    for (let i = 0; i < divNode.length; i++) {
        const imgTags = divNode[i].querySelectorAll(`img[id^="${type}"]`);
        imgTags.forEach(img => {
            // 设置背景颜色
            if (img.id == data) {
                img.style.backgroundColor = "red";
            } else {
                img.style.backgroundColor = "";
            }
        });

        // 计算结果中，修改选中的设备
        for (let item in newResultData) {
            // 不含有这个设备类型，不修改。
            if (!newResultData[item].hasOwnProperty("equType")) {
                continue;
            }

            if (newResultData[item]["equType"] === type) {
                newResultData[item]["equIndex"] = parseInt(value) - 1;
            }
        }
    }

    // 更新计算结果
    refreshCalResultInValueChange();
}

/**
 * 戴森球计划的buff点击（增产剂效果点击）
 * 支持：
 *     戴森球计划：
 *         增产剂设置、增产剂效果设置
 * @param data
 */
function handleClickDspBuff(data) {
    let splits = data.split("-");
    let type = splits[0];
    let value = parseFloat(splits[1]); // 将字符串转换为浮点数
    calValueChange(type, value);

    for (let key in newResultData) {
        let item = newResultData[key];
        if (item.hasOwnProperty("notBuff")) {
            continue;
        }
        if (type === "加速") {
            item["增产剂效果"] = "speed";
            if (value === 1.25) {
                item["增产剂"] = 0;
            } else if (value === 1.5) {
                item["增产剂"] = 1;
            } else if (value === 2) {
                item["增产剂"] = 2;
            }
            continue;
        }

        if (type === "增产" && !item.hasOwnProperty("onlySpeed")) {
            item["增产剂效果"] = "increase";
            if (value === 1.125) {
                item["增产剂"] = 0;
            } else if (value === 1.2) {
                item["增产剂"] = 1;
            } else if (value === 1.25) {
                item["增产剂"] = 2;
            }
            continue;
        }

        item["增产剂效果"] = "无";
    }

    // if newResultData not empty
    if (Object.keys(newResultData).length !== 0) {
        let buffText = "" + type + ":" + (((value - 1) * 100).toFixed(2) + "%");
        // result = (value - 1) * 100,
        let spanNode = document.getElementById("showBuffText");
        if (spanNode) {
            spanNode.textContent = buffText;
        }
    }

    // 刷新计算结果
    refreshCalResultInValueChange();
}

function clearAllBuff() {
    // find span, it id is showBuffText, set text is 无
    let spanNode = document.getElementById("showBuffText");
    if (spanNode) {
        spanNode.textContent = "无";
    }

    for (let key in newResultData) {
        let item = newResultData[key];
        item["增产剂效果"] = "无";
        item["增产剂"] = 0;
    }
    refreshCalResultInValueChange();
}

/**
 * 重置计算参数
 */
function resetCalValueSetting() {
    // find div if id is calConfigSetting
    let divNode = document.getElementsByClassName("calConfigSetting");
    for (let i = 0; i < divNode.length; i++) {
        const imgTags = divNode[i].querySelectorAll("img");
        imgTags.forEach(img => {
            img.style.backgroundColor = "";
        });
    }
}

/**
 * 修改传送带
 * @param data
 */
function changeBelt(data) {
    // 对data进行-分割，前面的是类型type、后面的是value
    let splits = data.split("-");
    let type = splits[0];
    let value = splits[1];

    // 找到计算参数配置的div
    let divNode = document.getElementsByClassName("calConfigSetting");
    // 从divNode中查找id为type对应内容开头的img标签。
    for (let i = 0; i < divNode.length; i++) {
        const imgTags = divNode[i].querySelectorAll(`img[id^="${type}"]`);
        imgTags.forEach(img => {
            // 设置背景颜色
            if (img.id === data) {
                img.style.backgroundColor = "red";
            } else {
                img.style.backgroundColor = "";
            }
        });
    }

    if (value === "1") {
        beltSize = 360;
    } else if (value === "2") {
        beltSize = 720;
    } else {
        beltSize = 1800;
    }

    // 更新计算结果
    // refreshCalResultInValueChange();
}