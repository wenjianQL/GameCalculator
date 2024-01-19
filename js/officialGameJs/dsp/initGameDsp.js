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

// 加载游戏数据: data_satisfactory.js放在这个文件前面

// 侧拉栏列表数据加载
loadGameList("");

// 顶部导航栏添加按钮
addHead();
addBtnNode(false);

// 配方页面
// 输入框可选择的数据
loadCalPagerMaterialList();
loadGridTable(selectDialogMaterialTable, "selectGridTableMaterial");
loadGridTable(selectDialogBuildTable, "selectGridTableBuild");

// 配方管理页面
updateRecipeTable();

// 设备管理页面
updateDeviceTable();
addEditEquDialog();

