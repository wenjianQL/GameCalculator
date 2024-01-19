// 常量
// 当前网页的链接
let customGamePageLink = "customGame.html"
// 从缓存中获取的，用户添加游戏的游戏名字列表
let userAddGameNameList = [];

// 网页加载后生成的游戏数据
// 当前游戏的名字：从链接中获取
let curGameName = "";
// 游戏数据：从缓存中根据curGameName进行读取
let game_data = {};
// 物品列表数据：加载完游戏数据后，从game_data中获取配方数据，获取所有配方的material进行构建。
let material_data = []

// 计算数据
// 物品需求列表
let needs_list = {};
// 计算结果存放
let newResultData = {}
// 原材料数据
let source_data = {}
// 忽略计算的数据
let disablePathList = []

// 用于在进行计算时，从计算参数中取选中的设备。
let calValueMap = {}





