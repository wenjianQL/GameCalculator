/*
传入数据：
{
    "path": "电磁矩阵",
    "prePath": "",
    "material": "电磁矩阵",
    "number": 60,
    "是否计算": true,
    "recipeIndex": 0,
    "增产剂效果": "无",
    "增产剂": 0,
    "电力消耗倍率": 1,
    "equType": "科研设备",
    "equIndex": 0,
    "equNumber": 3,
    "equName": "研究站",
    "expand": true
}
获取数据：
{
    "path": "电磁矩阵",
    "icon": "./img/game/dsp_16/电磁矩阵.png",
    "text": "电磁矩阵",
    "state": {
        "opened": false
    }
    "children": []
}
 */
function convertData(inputData) {
    return {
        "path": inputData.path,
        "number": inputData.number,
        "checked": inputData["是否计算"],
        "icon": "./img/game/dsp_16/" + inputData.material + ".png",
        "text": inputData.material,
        "state": {
            "opened": true
        },
        "children": []
    };
}
