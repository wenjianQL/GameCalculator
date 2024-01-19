/*
所有的初始化都放到这里，这里放在</body>前，最后才执行。
按页面结构顺序进行排列:
- 根据链接，加载对应的游戏数据和数据设置
- 侧拉栏数据
- 顶部导航栏
- 配方页面
    - 输入框数据
    - 弹窗选择数据
 */

// 加载游戏数据
let gameValue = getParameterByName('gameName');
if (gameValue) {
    curGameName = gameValue;
    loadCustomGameData(gameValue);
    document.title += "-" + gameValue;
}

// 侧拉栏列表数据加载
if (gameValue) {
    loadGameList(gameValue);
}

// 顶部导航栏添加按钮
addHead();
addBtnNode(true);

// 配方页面
// 输入框可选择的数据
loadCalPagerMaterialList();

// 配方管理页面
updateRecipeTable();

// 设备管理页面
updateDeviceTable();
addEditEquDialog();

