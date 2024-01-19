/**
 * 物品计算
 * 生产目标中点击计算按钮后的埋点
 * @param type 分类-操作类型
 * @param name 物品名字
 * @param number 数量
 */
function materialCalculate(type, name, number) {
    _hmt.push(['_trackEvent', 'calculate', type, name, number]);
}

/**
 * 计算参数设置
 * 在进行计算参数点击后，进行埋点上报
 * @param type 分类
 * @param name 名字
 */
function calValueChange(type, name) {
    _hmt.push(['_trackEvent', 'calValueChange', type, name]);
}

/**
 * 树形列表-增产剂修改
 */
function treeListBuffChange(type, value) {
    _hmt.push(['_trackEvent', 'treeListBuffChange', type, value]);
}

function treeListRecipeChange(type, value) {
    _hmt.push(['_trackEvent', 'treeListRecipeChange', type, "" + value]);
}

/**
 * 切换结果展示tab
 * @param type tree、depthTable
 */
function changeResultShowTab(type) {
    _hmt.push(['_trackEvent', 'changeResultShowTab', type]);
}

/**
 * 切换管理展示tab
 * @param type cal、recipe、equipment
 */
function changeManagerShowTab(type) {
    _hmt.push(['_trackEvent', 'changeManagerShowTab', type]);
}

/**
 * 配方Tab页面的按钮点击
 * @param type add、edit、delete
 */
function recipeBtnClick(type) {
    _hmt.push(['_trackEvent', 'recipeBtnClick', type]);
}

/**
 * 设备Tab页面的按钮点击
 * @param type add、edit、delete、save
 * @param operation 具体的类型 device-type
 */
function equipmentBtnClick(type, operation = "") {
    _hmt.push(['_trackEvent', 'equipmentBtnClick', type, operation]);
}