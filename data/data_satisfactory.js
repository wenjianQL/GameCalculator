// 游戏数据
curGameName = "game_satis_factory";

try {
    const data = localStorage.getItem(curGameName);
    if (data) {
        console.log("success");
        game_data = JSON.parse(data);
    } else {
        console.log("fail");
        game_data = {
            "game_name": "幸福工厂",
            "recipe_data": {
                "组装编导系统": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "组装编导系统",
                            "material": "组装编导系统",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "组装编导系统": 0.75
                            },
                            "sourceList": {
                                "自适应控制单元": 1.5,
                                "超级计算机": 0.75
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "0.75*组装编导系统 = 1.5*自适应控制单元 + 0.75*超级计算机"
                        }
                    ]
                },
                "自适应控制单元": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "自适应控制单元",
                            "isMultiRecipe": 0,
                            "material": "自适应控制单元",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "自适应控制单元": 1.0
                            },
                            "sourceList": {
                                "自动线路": 7.5,
                                "电路板": 5.0,
                                "计算机": 1.0,
                                "重型模块化框架": 1.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.0*自适应控制单元 = 7.5*自动线路 + 5.0*电路板 + 1.0*计算机 + 1.0*重型模块化框架"
                        }
                    ]
                },
                "自动线路": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "自动线路",
                            "isMultiRecipe": 0,
                            "material": "自动线路",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "自动线路": 2.5
                            },
                            "sourceList": {
                                "定子": 2.5,
                                "电缆": 50.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "2.5*自动线路 = 2.5*定子 + 50.0*电缆"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：高速自动线路",
                            "isMultiRecipe": 1,
                            "material": "自动线路",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "自动线路": 7.5
                            },
                            "sourceList": {
                                "定子": 3.75,
                                "高速连接器": 1.875,
                                "电线": 75.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "7.5*自动线路 = 3.75*定子 + 1.875*高速连接器 + 75.0*电线"
                        }
                    ]
                },
                "转子": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "转子",
                            "isMultiRecipe": 0,
                            "material": "转子",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "转子": 4.0
                            },
                            "sourceList": {
                                "铁棒": 20.0,
                                "螺丝": 100.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "4.0*转子 = 20.0*铁棒 + 100.0*螺丝"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：铜制转子",
                            "isMultiRecipe": 1,
                            "material": "转子",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "转子": 11.25
                            },
                            "sourceList": {
                                "铜板": 22.5,
                                "螺丝": 195.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "11.25*转子 = 22.5*铜板 + 195.0*螺丝"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：钢制转子",
                            "isMultiRecipe": 1,
                            "material": "转子",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "转子": 5.0
                            },
                            "sourceList": {
                                "钢管": 10.0,
                                "电线": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "5.0*转子 = 10.0*钢管 + 30.0*电线"
                        }
                    ]
                },
                "重渣油": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：重渣油",
                            "isMultiRecipe": 1,
                            "material": "重渣油",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "重渣油": 40.0,
                                "聚合树脂": 20.0
                            },
                            "sourceList": {
                                "原油": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "40.0*重渣油 + 20.0*聚合树脂 = 30.0*原油"
                        }
                    ]
                },
                "重型模块化框架": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "重型模块化框架",
                            "isMultiRecipe": 0,
                            "material": "重型模块化框架",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "重型模块化框架": 2.0
                            },
                            "sourceList": {
                                "模块化框架": 10.0,
                                "钢筋混凝土梁": 10.0,
                                "钢管": 30.0,
                                "螺丝": 200.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "2.0*重型模块化框架 = 10.0*模块化框架 + 10.0*钢筋混凝土梁 + 30.0*钢管 + 200.0*螺丝"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：重型高韧性框架",
                            "isMultiRecipe": 1,
                            "material": "重型模块化框架",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "重型模块化框架": 3.75
                            },
                            "sourceList": {
                                "模块化框架": 18.75,
                                "钢筋混凝土梁": 11.25,
                                "橡胶": 75.0,
                                "螺丝": 390.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.75*重型模块化框架 = 18.75*模块化框架 + 11.25*钢筋混凝土梁 + 75.0*橡胶 + 390.0*螺丝"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：重型封闭式框架",
                            "isMultiRecipe": 1,
                            "material": "重型模块化框架",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "重型模块化框架": 2.8125
                            },
                            "sourceList": {
                                "模块化框架": 7.5,
                                "钢筋混凝土梁": 9.375,
                                "钢管": 33.75,
                                "混凝土": 20.625
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "2.8125*重型模块化框架 = 7.5*模块化框架 + 9.375*钢筋混凝土梁 + 33.75*钢管 + 20.625*混凝土"
                        }
                    ]
                },
                "智能护板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "智能护板",
                            "isMultiRecipe": 0,
                            "material": "智能护板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "智能护板": 2.0
                            },
                            "sourceList": {
                                "加强铁板": 2.0,
                                "转子": 2.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "2.0*智能护板 = 2.0*加强铁板 + 2.0*转子"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：塑料智能护板",
                            "isMultiRecipe": 1,
                            "material": "智能护板",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "智能护板": 5.0
                            },
                            "sourceList": {
                                "塑料": 7.5,
                                "加强铁板": 2.5,
                                "转子": 2.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "5.0*智能护板 = 7.5*塑料 + 2.5*加强铁板 + 2.5*转子"
                        }
                    ]
                },
                "原矿": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "原矿",
                            "isMultiRecipe": 1,
                            "material": "原矿",
                            "equType": "",
                            "equIndex": 0,
                            "productList": {
                                "原矿": ""
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "*原矿 = "
                        }
                    ]
                },
                "铀燃料棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "铀燃料棒",
                            "isMultiRecipe": 0,
                            "material": "铀燃料棒",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "铀燃料棒": 0.4
                            },
                            "sourceList": {
                                "铀核心": 20.0,
                                "电磁控制杆": 2.0,
                                "钢筋混凝土梁": 1.2
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "0.4*铀燃料棒 = 20.0*铀核心 + 2.0*电磁控制杆 + 1.2*钢筋混凝土梁"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：铀燃料单元",
                            "isMultiRecipe": 1,
                            "material": "铀燃料棒",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "铀燃料棒": 0.6
                            },
                            "sourceList": {
                                "铀核心": 20.0,
                                "电磁控制杆": 2.0,
                                "晶体振荡器": 0.6,
                                "信标": 1.2
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "0.6*铀燃料棒 = 20.0*铀核心 + 2.0*电磁控制杆 + 0.6*晶体振荡器 + 1.2*信标"
                        }
                    ]
                },
                "铀核心": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "铀核心",
                            "isMultiRecipe": 0,
                            "material": "铀核心",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "铀核心": 25.0,
                                "硫酸": 10.0
                            },
                            "sourceList": {
                                "铀": 50.0,
                                "硫酸": 40.0,
                                "混凝土": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "25.0*铀核心 + 10.0*硫酸 = 50.0*铀 + 40.0*硫酸 + 15.0*混凝土"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：注入式铀核芯",
                            "isMultiRecipe": 1,
                            "material": "铀核心",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "铀核心": 20.0
                            },
                            "sourceList": {
                                "铀": 25.0,
                                "硫": 25.0,
                                "石英砂": 15.0,
                                "快速线": 75.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "20.0*铀核心 = 25.0*铀 + 25.0*硫 + 15.0*石英砂 + 75.0*快速线"
                        }
                    ]
                },
                "油焦": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "油焦",
                            "isMultiRecipe": 0,
                            "material": "油焦",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "油焦": 120.0
                            },
                            "sourceList": {
                                "重渣油": 40.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "120.0*油焦 = 40.0*重渣油"
                        }
                    ]
                },
                "氧化铝溶液": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：氧化铝匀浆",
                            "isMultiRecipe": 1,
                            "material": "氧化铝溶液",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "氧化铝溶液": 240.0
                            },
                            "sourceList": {
                                "铝土矿": 200.0,
                                "水": 200.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "240.0*氧化铝溶液 = 200.0*铝土矿 + 200.0*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "氧化铝溶液",
                            "isMultiRecipe": 0,
                            "material": "氧化铝溶液",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "氧化铝溶液": 120.0,
                                "石英砂": 50.0
                            },
                            "sourceList": {
                                "铝土矿": 120.0,
                                "水": 180.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "120.0*氧化铝溶液 + 50.0*石英砂 = 120.0*铝土矿 + 180.0*水"
                        }
                    ]
                },
                "压力转换立方体": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "压力转换立方体",
                            "isMultiRecipe": 0,
                            "material": "压力转换立方体",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "压力转换立方体": 1.0
                            },
                            "sourceList": {
                                "熔合模块化框架": 1.0,
                                "无线电控制单元": 2.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.0*压力转换立方体 = 1.0*熔合模块化框架 + 2.0*无线电控制单元"
                        }
                    ]
                },
                "信标": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：晶体信标",
                            "isMultiRecipe": 1,
                            "material": "信标",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "信标": 10.0
                            },
                            "sourceList": {
                                "晶体振荡器": 0.5,
                                "钢管": 8.0,
                                "钢梁": 2.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "10.0*信标 = 0.5*晶体振荡器 + 8.0*钢管 + 2.0*钢梁"
                        },
                        {
                            "time": 60,
                            "recipe_name": "信标",
                            "isMultiRecipe": 0,
                            "material": "信标",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "信标": 7.5
                            },
                            "sourceList": {
                                "铁板": 22.5,
                                "铁棒": 7.5,
                                "电线": 112.5,
                                "电缆": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "7.5*信标 = 22.5*铁板 + 7.5*铁棒 + 112.5*电线 + 15.0*电缆"
                        }
                    ]
                },
                "硝酸": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "硝酸",
                            "isMultiRecipe": 0,
                            "material": "硝酸",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "硝酸": 30.0
                            },
                            "sourceList": {
                                "氮气": 120.0,
                                "铁板": 10.0,
                                "水": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*硝酸 = 120.0*氮气 + 10.0*铁板 + 30.0*水"
                        }
                    ]
                },
                "橡胶": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：聚合橡胶",
                            "isMultiRecipe": 1,
                            "material": "橡胶",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "橡胶": 20.0
                            },
                            "sourceList": {
                                "聚合树脂": 40.0,
                                "水": 40.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "20.0*橡胶 = 40.0*聚合树脂 + 40.0*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：再生橡胶",
                            "isMultiRecipe": 1,
                            "material": "橡胶",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "橡胶": 60.0
                            },
                            "sourceList": {
                                "燃料": 30.0,
                                "塑料": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "60.0*橡胶 = 30.0*燃料 + 30.0*塑料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "橡胶",
                            "isMultiRecipe": 0,
                            "material": "橡胶",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "橡胶": 20.0,
                                "重渣油": 20.0
                            },
                            "sourceList": {
                                "原油": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "20.0*橡胶 + 20.0*重渣油 = 30.0*原油"
                        }
                    ]
                },
                "无线电控制单元": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：无线电连接单元",
                            "isMultiRecipe": 1,
                            "material": "无线电控制单元",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "无线电控制单元": 3.75
                            },
                            "sourceList": {
                                "散热器": 15.0,
                                "高速连接器": 7.5,
                                "石英晶体": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.75*无线电控制单元 = 15.0*散热器 + 7.5*高速连接器 + 45.0*石英晶体"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：无线电控制系统",
                            "isMultiRecipe": 1,
                            "material": "无线电控制单元",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "无线电控制单元": 4.5
                            },
                            "sourceList": {
                                "铝制外壳": 90.0,
                                "电路板": 15.0,
                                "晶体振荡器": 1.5,
                                "橡胶": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "4.5*无线电控制单元 = 90.0*铝制外壳 + 15.0*电路板 + 1.5*晶体振荡器 + 45.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "无线电控制单元",
                            "isMultiRecipe": 0,
                            "material": "无线电控制单元",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "无线电控制单元": 2.5
                            },
                            "sourceList": {
                                "铝制外壳": 40.0,
                                "晶体振荡器": 1.25,
                                "计算机": 1.25
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "2.5*无线电控制单元 = 40.0*铝制外壳 + 1.25*晶体振荡器 + 1.25*计算机"
                        }
                    ]
                },
                "涡轮燃料": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：重质涡轮燃料",
                            "isMultiRecipe": 1,
                            "material": "涡轮燃料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "涡轮燃料": 30.0
                            },
                            "sourceList": {
                                "重渣油": 37.5,
                                "压缩煤": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "30.0*涡轮燃料 = 37.5*重渣油 + 30.0*压缩煤"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：混合涡轮燃料",
                            "isMultiRecipe": 1,
                            "material": "涡轮燃料",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "涡轮燃料": 45.0
                            },
                            "sourceList": {
                                "燃料": 15.0,
                                "重渣油": 30.0,
                                "硫": 22.5,
                                "油焦": 22.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "45.0*涡轮燃料 = 15.0*燃料 + 30.0*重渣油 + 22.5*硫 + 22.5*油焦"
                        },
                        {
                            "time": 60,
                            "recipe_name": "涡轮燃料",
                            "isMultiRecipe": 0,
                            "material": "涡轮燃料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "涡轮燃料": 18.75
                            },
                            "sourceList": {
                                "燃料": 22.5,
                                "压缩煤": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "18.75*涡轮燃料 = 22.5*燃料 + 15.0*压缩煤"
                        }
                    ]
                },
                "涡轮电机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：涡轮增压电机",
                            "isMultiRecipe": 1,
                            "material": "涡轮电机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "涡轮电机": 3.75
                            },
                            "sourceList": {
                                "电机": 7.5,
                                "定子": 15.0,
                                "压力转换立方体": 1.875,
                                "瓶装氮气": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.75*涡轮电机 = 7.5*电机 + 15.0*定子 + 1.875*压力转换立方体 + 45.0*瓶装氮气"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：涡轮电磁电机",
                            "isMultiRecipe": 1,
                            "material": "涡轮电机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "涡轮电机": 2.8125
                            },
                            "sourceList": {
                                "电机": 6.5625,
                                "无线电控制单元": 8.4375,
                                "电磁控制杆": 4.6875,
                                "转子": 6.5625
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "2.8125*涡轮电机 = 6.5625*电机 + 8.4375*无线电控制单元 + 4.6875*电磁控制杆 + 6.5625*转子"
                        },
                        {
                            "time": 60,
                            "recipe_name": "涡轮电机",
                            "isMultiRecipe": 0,
                            "material": "涡轮电机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "涡轮电机": 1.875
                            },
                            "sourceList": {
                                "电机": 7.5,
                                "无线电控制单元": 3.75,
                                "橡胶": 45.0,
                                "冷却系统": 7.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.875*涡轮电机 = 7.5*电机 + 3.75*无线电控制单元 + 45.0*橡胶 + 7.5*冷却系统"
                        }
                    ]
                },
                "铜粉": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "铜粉",
                            "isMultiRecipe": 0,
                            "material": "铜粉",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "铜粉": 50.0
                            },
                            "sourceList": {
                                "铜锭": 300.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "50.0*铜粉 = 300.0*铜锭"
                        }
                    ]
                },
                "铜锭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "铜锭",
                            "isMultiRecipe": 0,
                            "material": "铜锭",
                            "equType": "冶炼器",
                            "equIndex": 0,
                            "productList": {
                                "铜锭": 30.0
                            },
                            "sourceList": {
                                "铜矿": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*铜锭 = 30.0*铜矿"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：铜合金锭",
                            "isMultiRecipe": 1,
                            "material": "铜锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "铜锭": 100.0
                            },
                            "sourceList": {
                                "铜矿": 50.0,
                                "铁矿": 25.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "100.0*铜锭 = 50.0*铜矿 + 25.0*铁矿"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：纯铜锭",
                            "isMultiRecipe": 1,
                            "material": "铜锭",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "铜锭": 37.5
                            },
                            "sourceList": {
                                "铜矿": 15.0,
                                "水": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "37.5*铜锭 = 15.0*铜矿 + 10.0*水"
                        }
                    ]
                },
                "铜板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "铜板",
                            "isMultiRecipe": 0,
                            "material": "铜板",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "铜板": 10.0
                            },
                            "sourceList": {
                                "铜锭": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "10.0*铜板 = 20.0*铜锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：蒸汽铜板",
                            "isMultiRecipe": 1,
                            "material": "铜板",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "铜板": 22.5
                            },
                            "sourceList": {
                                "铜锭": 22.5,
                                "水": 22.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "22.5*铜板 = 22.5*铜锭 + 22.5*水"
                        }
                    ]
                },
                "铁锭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "铁锭",
                            "isMultiRecipe": 0,
                            "material": "铁锭",
                            "equType": "冶炼器",
                            "equIndex": 0,
                            "productList": {
                                "铁锭": 30.0
                            },
                            "sourceList": {
                                "铁矿": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*铁锭 = 30.0*铁矿"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：铁合金锭",
                            "isMultiRecipe": 1,
                            "material": "铁锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "铁锭": 50.0
                            },
                            "sourceList": {
                                "铁矿": 20.0,
                                "铜矿": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "50.0*铁锭 = 20.0*铁矿 + 20.0*铜矿"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：纯铁锭",
                            "isMultiRecipe": 1,
                            "material": "铁锭",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "铁锭": 65.0
                            },
                            "sourceList": {
                                "铁矿": 35.0,
                                "水": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "65.0*铁锭 = 35.0*铁矿 + 20.0*水"
                        }
                    ]
                },
                "铁棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：钢棒",
                            "isMultiRecipe": 1,
                            "material": "铁棒",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "铁棒": 48.0
                            },
                            "sourceList": {
                                "钢锭": 12.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "48.0*铁棒 = 12.0*钢锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "铁棒",
                            "isMultiRecipe": 0,
                            "material": "铁棒",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "铁棒": 15.0
                            },
                            "sourceList": {
                                "铁锭": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "15.0*铁棒 = 15.0*铁锭"
                        }
                    ]
                },
                "铁板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：覆钢板",
                            "isMultiRecipe": 1,
                            "material": "铁板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "铁板": 45.0
                            },
                            "sourceList": {
                                "钢锭": 7.5,
                                "塑料": 5.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "45.0*铁板 = 7.5*钢锭 + 5.0*塑料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：镀层铁板",
                            "isMultiRecipe": 1,
                            "material": "铁板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "铁板": 75.0
                            },
                            "sourceList": {
                                "铁锭": 50.0,
                                "塑料": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "75.0*铁板 = 50.0*铁锭 + 10.0*塑料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "铁板",
                            "isMultiRecipe": 0,
                            "material": "铁板",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "铁板": 20.0
                            },
                            "sourceList": {
                                "铁锭": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "20.0*铁板 = 30.0*铁锭"
                        }
                    ]
                },
                "塑料": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：聚合塑料",
                            "isMultiRecipe": 1,
                            "material": "塑料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "塑料": 20.0
                            },
                            "sourceList": {
                                "聚合树脂": 60.0,
                                "水": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "20.0*塑料 = 60.0*聚合树脂 + 20.0*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：再生塑料",
                            "isMultiRecipe": 1,
                            "material": "塑料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "塑料": 60.0
                            },
                            "sourceList": {
                                "燃料": 30.0,
                                "橡胶": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "60.0*塑料 = 30.0*燃料 + 30.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "塑料",
                            "isMultiRecipe": 0,
                            "material": "塑料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "塑料": 20.0,
                                "重渣油": 10.0
                            },
                            "sourceList": {
                                "原油": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "20.0*塑料 + 10.0*重渣油 = 30.0*原油"
                        }
                    ]
                },
                "石英砂": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：粗制石英砂",
                            "isMultiRecipe": 1,
                            "material": "石英砂",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "石英砂": 26.25
                            },
                            "sourceList": {
                                "原石英": 11.25,
                                "石灰石": 18.75
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "26.25*石英砂 = 11.25*原石英 + 18.75*石灰石"
                        },
                        {
                            "time": 60,
                            "recipe_name": "石英砂",
                            "isMultiRecipe": 0,
                            "material": "石英砂",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "石英砂": 37.5
                            },
                            "sourceList": {
                                "原石英": 22.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "37.5*石英砂 = 22.5*原石英"
                        }
                    ]
                },
                "石英晶体": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：纯石英晶体",
                            "isMultiRecipe": 1,
                            "material": "石英晶体",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "石英晶体": 52.5
                            },
                            "sourceList": {
                                "原石英": 67.5,
                                "水": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "52.5*石英晶体 = 67.5*原石英 + 37.5*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "石英晶体",
                            "isMultiRecipe": 0,
                            "material": "石英晶体",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "石英晶体": 22.5
                            },
                            "sourceList": {
                                "原石英": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "22.5*石英晶体 = 37.5*原石英"
                        }
                    ]
                },
                "散热器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：热交换器",
                            "isMultiRecipe": 1,
                            "material": "散热器",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "散热器": 10.0
                            },
                            "sourceList": {
                                "铝制外壳": 30.0,
                                "橡胶": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "10.0*散热器 = 30.0*铝制外壳 + 30.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "散热器",
                            "isMultiRecipe": 0,
                            "material": "散热器",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "散热器": 7.5
                            },
                            "sourceList": {
                                "镀铝板": 37.5,
                                "铜板": 22.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "7.5*散热器 = 37.5*镀铝板 + 22.5*铜板"
                        }
                    ]
                },
                "熔合模块化框架": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：热熔框架",
                            "isMultiRecipe": 1,
                            "material": "熔合模块化框架",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "熔合模块化框架": 3.0
                            },
                            "sourceList": {
                                "重型模块化框架": 3.0,
                                "铝锭": 150.0,
                                "硝酸": 24.0,
                                "燃料": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.0*熔合模块化框架 = 3.0*重型模块化框架 + 150.0*铝锭 + 24.0*硝酸 + 30.0*燃料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "熔合模块化框架",
                            "isMultiRecipe": 0,
                            "material": "熔合模块化框架",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "熔合模块化框架": 1.5
                            },
                            "sourceList": {
                                "重型模块化框架": 1.5,
                                "铝制外壳": 75.0,
                                "氮气": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.5*熔合模块化框架 = 1.5*重型模块化框架 + 75.0*铝制外壳 + 37.5*氮气"
                        }
                    ]
                },
                "热推进火箭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "热推进火箭",
                            "isMultiRecipe": 0,
                            "material": "热推进火箭",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "热推进火箭": 1.0
                            },
                            "sourceList": {
                                "模块化引擎": 2.5,
                                "涡轮电机": 1.0,
                                "冷却系统": 3.0,
                                "熔合模块化框架": 1.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.0*热推进火箭 = 2.5*模块化引擎 + 1.0*涡轮电机 + 3.0*冷却系统 + 1.0*熔合模块化框架"
                        }
                    ]
                },
                "燃料": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：裂化燃油",
                            "isMultiRecipe": 1,
                            "material": "燃料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "燃料": 40.0
                            },
                            "sourceList": {
                                "重渣油": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "40.0*燃料 = 60.0*重渣油"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：稀释燃料",
                            "isMultiRecipe": 1,
                            "material": "燃料",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "燃料": 100.0
                            },
                            "sourceList": {
                                "重渣油": 50.0,
                                "水": 100.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "100.0*燃料 = 50.0*重渣油 + 100.0*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "燃料",
                            "isMultiRecipe": 0,
                            "material": "燃料",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "燃料": 40.0,
                                "聚合树脂": 30.0
                            },
                            "sourceList": {
                                "原油": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "40.0*燃料 + 30.0*聚合树脂 = 60.0*原油"
                        }
                    ]
                },
                "钦锭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "钦锭",
                            "isMultiRecipe": 0,
                            "material": "钦锭",
                            "equType": "冶炼器",
                            "equIndex": 0,
                            "productList": {
                                "钦锭": 15.0
                            },
                            "sourceList": {
                                "钦矿": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "15.0*钦锭 = 45.0*钦矿"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：纯钦锭",
                            "isMultiRecipe": 1,
                            "material": "钦锭",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "钦锭": 12.0
                            },
                            "sourceList": {
                                "钦矿": 24.0,
                                "水": 24.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "12.0*钦锭 = 24.0*钦矿 + 24.0*水"
                        }
                    ]
                },
                "贫铀": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：富铀",
                            "isMultiRecipe": 1,
                            "material": "贫铀",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "贫铀": 100.0,
                                "水": 40.0
                            },
                            "sourceList": {
                                "铀废料": 25.0,
                                "硫酸": 25.0,
                                "硝酸": 15.0,
                                "铀": 25.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "100.0*贫铀 + 40.0*水 = 25.0*铀废料 + 25.0*硫酸 + 15.0*硝酸 + 25.0*铀"
                        },
                        {
                            "time": 60,
                            "recipe_name": "贫铀",
                            "isMultiRecipe": 0,
                            "material": "贫铀",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "贫铀": 50.0,
                                "水": 15.0
                            },
                            "sourceList": {
                                "铀废料": 37.5,
                                "硫酸": 15.0,
                                "硝酸": 15.0,
                                "石英砂": 25.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "50.0*贫铀 + 15.0*水 = 37.5*铀废料 + 15.0*硫酸 + 15.0*硝酸 + 25.0*石英砂"
                        }
                    ]
                },
                "模块化引擎": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "模块化引擎",
                            "isMultiRecipe": 0,
                            "material": "模块化引擎",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "模块化引擎": 1.0
                            },
                            "sourceList": {
                                "智能护板": 2.0,
                                "橡胶": 15.0,
                                "电机": 2.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.0*模块化引擎 = 2.0*智能护板 + 15.0*橡胶 + 2.0*电机"
                        }
                    ]
                },
                "模块化框架": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：模块化钢框",
                            "isMultiRecipe": 1,
                            "material": "模块化框架",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "模块化框架": 3.0
                            },
                            "sourceList": {
                                "加强铁板": 2.0,
                                "钢管": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.0*模块化框架 = 2.0*加强铁板 + 10.0*钢管"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：螺栓式框架",
                            "isMultiRecipe": 1,
                            "material": "模块化框架",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "模块化框架": 5.0
                            },
                            "sourceList": {
                                "加强铁板": 7.5,
                                "螺丝": 140.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "5.0*模块化框架 = 7.5*加强铁板 + 140.0*螺丝"
                        },
                        {
                            "time": 60,
                            "recipe_name": "模块化框架",
                            "isMultiRecipe": 0,
                            "material": "模块化框架",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "模块化框架": 2.0
                            },
                            "sourceList": {
                                "加强铁板": 3.0,
                                "铁棒": 12.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "2.0*模块化框架 = 3.0*加强铁板 + 12.0*铁棒"
                        }
                    ]
                },
                "铝制外壳": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：镀铝外壳",
                            "isMultiRecipe": 1,
                            "material": "铝制外壳",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "铝制外壳": 112.5
                            },
                            "sourceList": {
                                "铝锭": 150.0,
                                "铜锭": 75.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "112.5*铝制外壳 = 150.0*铝锭 + 75.0*铜锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "铝制外壳",
                            "isMultiRecipe": 0,
                            "material": "铝制外壳",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "铝制外壳": 60.0
                            },
                            "sourceList": {
                                "铝锭": 90.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "60.0*铝制外壳 = 90.0*铝锭"
                        }
                    ]
                },
                "铝块": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：速成型铝块",
                            "isMultiRecipe": 1,
                            "material": "铝块",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "铝块": 300.0,
                                "水": 50.0
                            },
                            "sourceList": {
                                "铝土矿": 150.0,
                                "煤": 100.0,
                                "硫酸": 50.0,
                                "水": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "300.0*铝块 + 50.0*水 = 150.0*铝土矿 + 100.0*煤 + 50.0*硫酸 + 60.0*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：电极铝块",
                            "isMultiRecipe": 1,
                            "material": "铝块",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "铝块": 300.0,
                                "水": 105.0
                            },
                            "sourceList": {
                                "氧化铝溶液": 180.0,
                                "油焦": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "300.0*铝块 + 105.0*水 = 180.0*氧化铝溶液 + 60.0*油焦"
                        },
                        {
                            "time": 60,
                            "recipe_name": "铝块",
                            "isMultiRecipe": 0,
                            "material": "铝块",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "铝块": 360.0,
                                "水": 120.0
                            },
                            "sourceList": {
                                "氧化铝溶液": 240.0,
                                "煤": 120.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "360.0*铝块 + 120.0*水 = 240.0*氧化铝溶液 + 120.0*煤"
                        }
                    ]
                },
                "铝锭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：纯铝锭",
                            "isMultiRecipe": 1,
                            "material": "铝锭",
                            "equType": "冶炼器",
                            "equIndex": 0,
                            "productList": {
                                "铝锭": 30.0
                            },
                            "sourceList": {
                                "铝块": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "30.0*铝锭 = 60.0*铝块"
                        },
                        {
                            "time": 60,
                            "recipe_name": "铝锭",
                            "isMultiRecipe": 0,
                            "material": "铝锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "铝锭": 60.0
                            },
                            "sourceList": {
                                "铝块": 90.0,
                                "石英砂": 75.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "60.0*铝锭 = 90.0*铝块 + 75.0*石英砂"
                        }
                    ]
                },
                "螺丝": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：铸造螺丝",
                            "isMultiRecipe": 1,
                            "material": "螺丝",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "螺丝": 50.0
                            },
                            "sourceList": {
                                "铁锭": 12.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "50.0*螺丝 = 12.5*铁锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：钢制螺丝",
                            "isMultiRecipe": 1,
                            "material": "螺丝",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "螺丝": 260.0
                            },
                            "sourceList": {
                                "钢梁": 5.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "260.0*螺丝 = 5.0*钢梁"
                        },
                        {
                            "time": 60,
                            "recipe_name": "螺丝",
                            "isMultiRecipe": 0,
                            "material": "螺丝",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "螺丝": 40.0
                            },
                            "sourceList": {
                                "铁棒": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "40.0*螺丝 = 10.0*铁棒"
                        }
                    ]
                },
                "硫酸": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "硫酸",
                            "isMultiRecipe": 0,
                            "material": "硫酸",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "硫酸": 50.0
                            },
                            "sourceList": {
                                "硫": 50.0,
                                "水": 50.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "50.0*硫酸 = 50.0*硫 + 50.0*水"
                        }
                    ]
                },
                "冷却系统": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：冷却装置",
                            "isMultiRecipe": 1,
                            "material": "冷却系统",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "冷却系统": 3.75
                            },
                            "sourceList": {
                                "散热器": 9.375,
                                "氮气": 45.0,
                                "电机": 1.875
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.75*冷却系统 = 9.375*散热器 + 45.0*氮气 + 1.875*电机"
                        },
                        {
                            "time": 60,
                            "recipe_name": "冷却系统",
                            "isMultiRecipe": 0,
                            "material": "冷却系统",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "冷却系统": 6.0
                            },
                            "sourceList": {
                                "散热器": 12.0,
                                "氮气": 150.0,
                                "橡胶": 12.0,
                                "水": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "6.0*冷却系统 = 12.0*散热器 + 150.0*氮气 + 12.0*橡胶 + 30.0*水"
                        }
                    ]
                },
                "快速线": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：融合快速线",
                            "isMultiRecipe": 1,
                            "material": "快速线",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "快速线": 90.0
                            },
                            "sourceList": {
                                "钦锭": 7.5,
                                "铜锭": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "90.0*快速线 = 7.5*钦锭 + 37.5*铜锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "快速线",
                            "isMultiRecipe": 0,
                            "material": "快速线",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "快速线": 60.0
                            },
                            "sourceList": {
                                "钦锭": 12.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "60.0*快速线 = 12.0*钦锭"
                        }
                    ]
                },
                "空瓶": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "空瓶",
                            "isMultiRecipe": 0,
                            "material": "空瓶",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "空瓶": 60.0
                            },
                            "sourceList": {
                                "铝锭": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "60.0*空瓶 = 60.0*铝锭"
                        }
                    ]
                },
                "空罐": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：钢罐",
                            "isMultiRecipe": 1,
                            "material": "空罐",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "空罐": 40.0
                            },
                            "sourceList": {
                                "钢锭": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "40.0*空罐 = 60.0*钢锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：镀层铁罐",
                            "isMultiRecipe": 1,
                            "material": "空罐",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "空罐": 60.0
                            },
                            "sourceList": {
                                "铁板": 30.0,
                                "铜板": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "60.0*空罐 = 30.0*铁板 + 15.0*铜板"
                        },
                        {
                            "time": 60,
                            "recipe_name": "空罐",
                            "isMultiRecipe": 0,
                            "material": "空罐",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "空罐": 60.0
                            },
                            "sourceList": {
                                "塑料": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "60.0*空罐 = 30.0*塑料"
                        }
                    ]
                },
                "聚合树脂": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：重渣油",
                            "isMultiRecipe": 1,
                            "material": "聚合树脂",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "聚合树脂": 20.0,
                                "重渣油": 40.0
                            },
                            "sourceList": {
                                "原油": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "20.0*聚合树脂 + 40.0*重渣油 = 30.0*原油"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：聚合树脂",
                            "isMultiRecipe": 1,
                            "material": "聚合树脂",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "聚合树脂": 130.0,
                                "重渣油": 20.0
                            },
                            "sourceList": {
                                "原油": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "130.0*聚合树脂 + 20.0*重渣油 = 60.0*原油"
                        }
                    ]
                },
                "晶体振荡器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：绝缘晶体振荡器",
                            "isMultiRecipe": 1,
                            "material": "晶体振荡器",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "晶体振荡器": 1.875
                            },
                            "sourceList": {
                                "石英晶体": 18.75,
                                "橡胶": 13.125,
                                "Ai限制器": 1.875
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "1.875*晶体振荡器 = 18.75*石英晶体 + 13.125*橡胶 + 1.875*Ai限制器"
                        },
                        {
                            "time": 60,
                            "recipe_name": "晶体振荡器",
                            "isMultiRecipe": 0,
                            "material": "晶体振荡器",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "晶体振荡器": 1.0
                            },
                            "sourceList": {
                                "石英晶体": 18.0,
                                "电缆": 14.0,
                                "加强铁板": 2.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.0*晶体振荡器 = 18.0*石英晶体 + 14.0*电缆 + 2.5*加强铁板"
                        }
                    ]
                },
                "加强铁板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：粘合铁板",
                            "isMultiRecipe": 1,
                            "material": "加强铁板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "加强铁板": 3.75
                            },
                            "sourceList": {
                                "铁板": 11.25,
                                "橡胶": 3.75
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.75*加强铁板 = 11.25*铁板 + 3.75*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：拼接铁板",
                            "isMultiRecipe": 1,
                            "material": "加强铁板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "加强铁板": 5.625
                            },
                            "sourceList": {
                                "铁板": 18.75,
                                "电线": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "5.625*加强铁板 = 18.75*铁板 + 37.5*电线"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：螺栓铁板",
                            "isMultiRecipe": 1,
                            "material": "加强铁板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "加强铁板": 15.0
                            },
                            "sourceList": {
                                "铁板": 90.0,
                                "螺丝": 250.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "15.0*加强铁板 = 90.0*铁板 + 250.0*螺丝"
                        },
                        {
                            "time": 60,
                            "recipe_name": "加强铁板",
                            "isMultiRecipe": 0,
                            "material": "加强铁板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "加强铁板": 5.0
                            },
                            "sourceList": {
                                "铁板": 30.0,
                                "螺丝": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "5.0*加强铁板 = 30.0*铁板 + 60.0*螺丝"
                        }
                    ]
                },
                "计算机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：钦计算机",
                            "isMultiRecipe": 1,
                            "material": "计算机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "计算机": 3.75
                            },
                            "sourceList": {
                                "电路板": 26.25,
                                "快速线": 105.0,
                                "橡胶": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.75*计算机 = 26.25*电路板 + 105.0*快速线 + 45.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：晶体计算机",
                            "isMultiRecipe": 1,
                            "material": "计算机",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "计算机": 2.8125
                            },
                            "sourceList": {
                                "电路板": 7.5,
                                "晶体振荡器": 2.8125
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "2.8125*计算机 = 7.5*电路板 + 2.8125*晶体振荡器"
                        },
                        {
                            "time": 60,
                            "recipe_name": "计算机",
                            "isMultiRecipe": 0,
                            "material": "计算机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "计算机": 2.5
                            },
                            "sourceList": {
                                "电路板": 25.0,
                                "电缆": 22.5,
                                "塑料": 45.0,
                                "螺丝": 130.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "2.5*计算机 = 25.0*电路板 + 22.5*电缆 + 45.0*塑料 + 130.0*螺丝"
                        }
                    ]
                },
                "混凝土": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：细末混凝土",
                            "isMultiRecipe": 1,
                            "material": "混凝土",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "混凝土": 25.0
                            },
                            "sourceList": {
                                "石灰石": 30.0,
                                "石英砂": 7.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "25.0*混凝土 = 30.0*石灰石 + 7.5*石英砂"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：橡胶混凝土",
                            "isMultiRecipe": 1,
                            "material": "混凝土",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "混凝土": 45.0
                            },
                            "sourceList": {
                                "石灰石": 50.0,
                                "橡胶": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "45.0*混凝土 = 50.0*石灰石 + 10.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：湿法混凝土",
                            "isMultiRecipe": 1,
                            "material": "混凝土",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "混凝土": 80.0
                            },
                            "sourceList": {
                                "石灰石": 120.0,
                                "水": 100.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "80.0*混凝土 = 120.0*石灰石 + 100.0*水"
                        },
                        {
                            "time": 60,
                            "recipe_name": "混凝土",
                            "isMultiRecipe": 0,
                            "material": "混凝土",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "混凝土": 15.0
                            },
                            "sourceList": {
                                "石灰石": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "15.0*混凝土 = 45.0*石灰石"
                        }
                    ]
                },
                "核子团": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "核子团",
                            "isMultiRecipe": 0,
                            "material": "核子团",
                            "equType": "粒子加速器",
                            "equIndex": 0,
                            "productList": {
                                "核子团": 0.5
                            },
                            "sourceList": {
                                "压力转换立方体": 0.5,
                                "铜粉": 100.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "0.5*核子团 = 0.5*压力转换立方体 + 100.0*铜粉"
                        }
                    ]
                },
                "高速连接器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：硅基高速连接器",
                            "isMultiRecipe": 1,
                            "material": "高速连接器",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "高速连接器": 3.0
                            },
                            "sourceList": {
                                "电路板": 3.0,
                                "快速线": 90.0,
                                "石英砂": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.0*高速连接器 = 3.0*电路板 + 90.0*快速线 + 37.5*石英砂"
                        },
                        {
                            "time": 60,
                            "recipe_name": "高速连接器",
                            "isMultiRecipe": 0,
                            "material": "高速连接器",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "高速连接器": 3.75
                            },
                            "sourceList": {
                                "电路板": 3.75,
                                "快速线": 210.0,
                                "电缆": 37.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "3.75*高速连接器 = 3.75*电路板 + 210.0*快速线 + 37.5*电缆"
                        }
                    ]
                },
                "钢梁": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "钢梁",
                            "isMultiRecipe": 0,
                            "material": "钢梁",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "钢梁": 15.0
                            },
                            "sourceList": {
                                "钢锭": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "15.0*钢梁 = 60.0*钢锭"
                        }
                    ]
                },
                "钢筋混凝土梁": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：钢筋混凝土梁",
                            "isMultiRecipe": 1,
                            "material": "钢筋混凝土梁",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "钢筋混凝土梁": 4.0
                            },
                            "sourceList": {
                                "钢管": 28.0,
                                "混凝土": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "4.0*钢筋混凝土梁 = 28.0*钢管 + 20.0*混凝土"
                        },
                        {
                            "time": 60,
                            "recipe_name": "钢筋混凝土梁",
                            "isMultiRecipe": 0,
                            "material": "钢筋混凝土梁",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "钢筋混凝土梁": 6.0
                            },
                            "sourceList": {
                                "钢梁": 24.0,
                                "混凝土": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "6.0*钢筋混凝土梁 = 24.0*钢梁 + 30.0*混凝土"
                        }
                    ]
                },
                "钢管": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "钢管",
                            "isMultiRecipe": 0,
                            "material": "钢管",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "钢管": 20.0
                            },
                            "sourceList": {
                                "钢锭": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "20.0*钢管 = 30.0*钢锭"
                        }
                    ]
                },
                "钢锭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：致密钢锭",
                            "isMultiRecipe": 1,
                            "material": "钢锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "钢锭": 37.5
                            },
                            "sourceList": {
                                "铁矿": 22.5,
                                "压缩煤": 11.25
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "37.5*钢锭 = 22.5*铁矿 + 11.25*压缩煤"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：坚固钢锭",
                            "isMultiRecipe": 1,
                            "material": "钢锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "钢锭": 60.0
                            },
                            "sourceList": {
                                "铁锭": 40.0,
                                "煤": 40.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "60.0*钢锭 = 40.0*铁锭 + 40.0*煤"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：高碳钢锭",
                            "isMultiRecipe": 1,
                            "material": "钢锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "钢锭": 100.0
                            },
                            "sourceList": {
                                "铁矿": 75.0,
                                "油焦": 75.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "100.0*钢锭 = 75.0*铁矿 + 75.0*油焦"
                        },
                        {
                            "time": 60,
                            "recipe_name": "钢锭",
                            "isMultiRecipe": 0,
                            "material": "钢锭",
                            "equType": "铸造器",
                            "equIndex": 0,
                            "productList": {
                                "钢锭": 45.0
                            },
                            "sourceList": {
                                "铁矿": 45.0,
                                "煤": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "45.0*钢锭 = 45.0*铁矿 + 45.0*煤"
                        }
                    ]
                },
                "多功能框架": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "多功能框架",
                            "isMultiRecipe": 0,
                            "material": "多功能框架",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "多功能框架": 5.0
                            },
                            "sourceList": {
                                "模块化框架": 2.5,
                                "钢梁": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "5.0*多功能框架 = 2.5*模块化框架 + 30.0*钢梁"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：灵活型框架",
                            "isMultiRecipe": 1,
                            "material": "多功能框架",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "多功能框架": 7.5
                            },
                            "sourceList": {
                                "橡胶": 30.0,
                                "模块化框架": 3.75,
                                "钢梁": 22.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "7.5*多功能框架 = 30.0*橡胶 + 3.75*模块化框架 + 22.5*钢梁"
                        }
                    ]
                },
                "镀铝板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "镀铝板",
                            "isMultiRecipe": 0,
                            "material": "镀铝板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "镀铝板": 30.0
                            },
                            "sourceList": {
                                "铝锭": 30.0,
                                "铜锭": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*镀铝板 = 30.0*铝锭 + 10.0*铜锭"
                        }
                    ]
                },
                "定子": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "定子",
                            "isMultiRecipe": 0,
                            "material": "定子",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "定子": 5.0
                            },
                            "sourceList": {
                                "钢管": 15.0,
                                "电线": 40.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "5.0*定子 = 15.0*钢管 + 40.0*电线"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：快速线定子",
                            "isMultiRecipe": 1,
                            "material": "定子",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "定子": 8.0
                            },
                            "sourceList": {
                                "钢管": 16.0,
                                "快速线": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "8.0*定子 = 16.0*钢管 + 60.0*快速线"
                        }
                    ]
                },
                "电线": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "电线",
                            "isMultiRecipe": 0,
                            "material": "电线",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "电线": 30.0
                            },
                            "sourceList": {
                                "铜锭": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*电线 = 15.0*铜锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：铁质电线",
                            "isMultiRecipe": 1,
                            "material": "电线",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "电线": 22.5
                            },
                            "sourceList": {
                                "铁锭": 12.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "22.5*电线 = 12.5*铁锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：熔合电线",
                            "isMultiRecipe": 1,
                            "material": "电线",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电线": 90.0
                            },
                            "sourceList": {
                                "铜锭": 12.0,
                                "钦锭": 3.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "90.0*电线 = 12.0*铜锭 + 3.0*钦锭"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：钦质电线",
                            "isMultiRecipe": 1,
                            "material": "电线",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "电线": 120.0
                            },
                            "sourceList": {
                                "钦锭": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "120.0*电线 = 15.0*钦锭"
                        }
                    ]
                },
                "电路板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "电路板",
                            "isMultiRecipe": 0,
                            "material": "电路板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电路板": 7.5
                            },
                            "sourceList": {
                                "铜板": 15.0,
                                "塑料": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "7.5*电路板 = 15.0*铜板 + 30.0*塑料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：钦电路板",
                            "isMultiRecipe": 1,
                            "material": "电路板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电路板": 8.75
                            },
                            "sourceList": {
                                "快速线": 37.5,
                                "塑料": 12.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "8.75*电路板 = 37.5*快速线 + 12.5*塑料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：硅基电路板",
                            "isMultiRecipe": 1,
                            "material": "电路板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电路板": 12.5
                            },
                            "sourceList": {
                                "铜板": 27.5,
                                "石英砂": 27.5
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "12.5*电路板 = 27.5*铜板 + 27.5*石英砂"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：电极电路板",
                            "isMultiRecipe": 1,
                            "material": "电路板",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电路板": 5.0
                            },
                            "sourceList": {
                                "橡胶": 30.0,
                                "油焦": 45.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "5.0*电路板 = 30.0*橡胶 + 45.0*油焦"
                        }
                    ]
                },
                "电缆": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "电缆",
                            "isMultiRecipe": 0,
                            "material": "电缆",
                            "equType": "构造器",
                            "equIndex": 0,
                            "productList": {
                                "电缆": 30.0
                            },
                            "sourceList": {
                                "电线": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*电缆 = 60.0*电线"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：快速线电缆",
                            "isMultiRecipe": 1,
                            "material": "电缆",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电缆": 27.5
                            },
                            "sourceList": {
                                "快速线": 7.5,
                                "橡胶": 5.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "27.5*电缆 = 7.5*快速线 + 5.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：绝缘电缆",
                            "isMultiRecipe": 1,
                            "material": "电缆",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电缆": 100.0
                            },
                            "sourceList": {
                                "电线": 45.0,
                                "橡胶": 30.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "100.0*电缆 = 45.0*电线 + 30.0*橡胶"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：镀层电缆",
                            "isMultiRecipe": 1,
                            "material": "电缆",
                            "equType": "精炼厂",
                            "equIndex": 0,
                            "productList": {
                                "电缆": 67.5
                            },
                            "sourceList": {
                                "电线": 37.5,
                                "重渣油": 15.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "67.5*电缆 = 37.5*电线 + 15.0*重渣油"
                        }
                    ]
                },
                "电机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "电机",
                            "isMultiRecipe": 0,
                            "material": "电机",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电机": 5.0
                            },
                            "sourceList": {
                                "转子": 10.0,
                                "定子": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "5.0*电机 = 10.0*转子 + 10.0*定子"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：精密电机",
                            "isMultiRecipe": 1,
                            "material": "电机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "电机": 7.5
                            },
                            "sourceList": {
                                "转子": 3.75,
                                "定子": 3.75,
                                "晶体振荡器": 1.25
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "7.5*电机 = 3.75*转子 + 3.75*定子 + 1.25*晶体振荡器"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：电磁电机",
                            "isMultiRecipe": 1,
                            "material": "电机",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电机": 7.5
                            },
                            "sourceList": {
                                "转子": 7.5,
                                "电磁控制杆": 3.75
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "7.5*电机 = 7.5*转子 + 3.75*电磁控制杆"
                        }
                    ]
                },
                "电磁控制杆": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "电磁控制杆",
                            "isMultiRecipe": 0,
                            "material": "电磁控制杆",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电磁控制杆": 4.0
                            },
                            "sourceList": {
                                "定子": 6.0,
                                "Ai限制器": 4.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "4.0*电磁控制杆 = 6.0*定子 + 4.0*Ai限制器"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：电磁连接杆",
                            "isMultiRecipe": 1,
                            "material": "电磁控制杆",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "电磁控制杆": 8.0
                            },
                            "sourceList": {
                                "定子": 8.0,
                                "高速连接器": 4.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "8.0*电磁控制杆 = 8.0*定子 + 4.0*高速连接器"
                        }
                    ]
                },
                "电池": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "电池",
                            "isMultiRecipe": 0,
                            "material": "电池",
                            "equType": "搅拌机",
                            "equIndex": 0,
                            "productList": {
                                "电池": 20.0,
                                "水": 30.0
                            },
                            "sourceList": {
                                "氧化铝溶液": 40.0,
                                "硫酸": 50.0,
                                "铝制外壳": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "20.0*电池 + 30.0*水 = 40.0*氧化铝溶液 + 50.0*硫酸 + 20.0*铝制外壳"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：传统电池",
                            "isMultiRecipe": 1,
                            "material": "电池",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "电池": 30.0
                            },
                            "sourceList": {
                                "硫": 45.0,
                                "镀铝板": 52.5,
                                "电线": 90.0,
                                "塑料": 60.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "30.0*电池 = 45.0*硫 + 52.5*镀铝板 + 90.0*电线 + 60.0*塑料"
                        }
                    ]
                },
                "磁场发生器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "磁场发生器",
                            "isMultiRecipe": 0,
                            "material": "磁场发生器",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "磁场发生器": 1.0
                            },
                            "sourceList": {
                                "多功能框架": 2.5,
                                "电磁控制杆": 1.0,
                                "电池": 5.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.0*磁场发生器 = 2.5*多功能框架 + 1.0*电磁控制杆 + 5.0*电池"
                        }
                    ]
                },
                "超级计算机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "超级计算机",
                            "isMultiRecipe": 0,
                            "material": "超级计算机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "超级计算机": 1.875
                            },
                            "sourceList": {
                                "计算机": 3.75,
                                "Ai限制器": 3.75,
                                "高速连接器": 5.625,
                                "塑料": 52.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "1.875*超级计算机 = 3.75*计算机 + 3.75*Ai限制器 + 5.625*高速连接器 + 52.5*塑料"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：超频状态计算机",
                            "isMultiRecipe": 1,
                            "material": "超级计算机",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "超级计算机": 2.4
                            },
                            "sourceList": {
                                "计算机": 3.6,
                                "电磁控制杆": 2.4,
                                "电线": 54.0,
                                "电池": 24.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "2.4*超级计算机 = 3.6*计算机 + 2.4*电磁控制杆 + 54.0*电线 + 24.0*电池"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：超频超级计算机",
                            "isMultiRecipe": 1,
                            "material": "超级计算机",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "超级计算机": 3.0
                            },
                            "sourceList": {
                                "无线电控制单元": 9.0,
                                "冷却系统": 9.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "3.0*超级计算机 = 9.0*无线电控制单元 + 9.0*冷却系统"
                        }
                    ]
                },
                "钚丸": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "钚丸",
                            "isMultiRecipe": 0,
                            "material": "钚丸",
                            "equType": "粒子加速器",
                            "equIndex": 0,
                            "productList": {
                                "钚丸": 30.0
                            },
                            "sourceList": {
                                "贫铀": 100.0,
                                "铀废料": 25.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "30.0*钚丸 = 100.0*贫铀 + 25.0*铀废料"
                        }
                    ]
                },
                "钚燃料棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "钚燃料棒",
                            "isMultiRecipe": 0,
                            "material": "钚燃料棒",
                            "equType": "制造器",
                            "equIndex": 0,
                            "productList": {
                                "钚燃料棒": 0.25
                            },
                            "sourceList": {
                                "钢梁": 4.5,
                                "散热器": 2.5,
                                "钚核心": 7.5,
                                "电磁控制杆": 1.5
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "0.25*钚燃料棒 = 4.5*钢梁 + 2.5*散热器 + 7.5*钚核心 + 1.5*电磁控制杆"
                        },
                        {
                            "time": 60,
                            "recipe_name": "替代：钚燃料单元",
                            "isMultiRecipe": 1,
                            "material": "钚燃料棒",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "钚燃料棒": 0.5
                            },
                            "sourceList": {
                                "压力转换立方体": 0.5,
                                "钚核心": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "0.5*钚燃料棒 = 0.5*压力转换立方体 + 10.0*钚核心"
                        }
                    ]
                },
                "钚核心": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "替代：速成型钚核心",
                            "isMultiRecipe": 1,
                            "material": "钚核心",
                            "equType": "粒子加速器",
                            "equIndex": 0,
                            "productList": {
                                "钚核心": 10.0
                            },
                            "sourceList": {
                                "贫铀": 75.0,
                                "铝制外壳": 10.0
                            },
                            "isCanUse": true,
                            "isSelect": true,
                            "step": "10.0*钚核心 = 75.0*贫铀 + 10.0*铝制外壳"
                        },
                        {
                            "time": 60,
                            "recipe_name": "封装的钚核心",
                            "isMultiRecipe": 0,
                            "material": "钚核心",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "钚核心": 5.0
                            },
                            "sourceList": {
                                "钚丸": 10.0,
                                "混凝土": 20.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "5.0*钚核心 = 10.0*钚丸 + 20.0*混凝土"
                        }
                    ]
                },
                "Ai限制器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 60,
                            "recipe_name": "Ai限制器",
                            "isMultiRecipe": 0,
                            "material": "Ai限制器",
                            "equType": "组装器",
                            "equIndex": 0,
                            "productList": {
                                "Ai限制器": 5.0
                            },
                            "sourceList": {
                                "铜板": 25.0,
                                "快速线": 100.0
                            },
                            "isCanUse": true,
                            "isSelect": false,
                            "step": "5.0*Ai限制器 = 25.0*铜板 + 100.0*快速线"
                        }
                    ]
                }
            },
            "equipment": {
                "冶炼器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "冶炼器",
                            "energy": 4,
                            "rate": 1
                        }
                    ]
                },
                "铸造器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "铸造器",
                            "energy": 16,
                            "rate": 1
                        }
                    ]
                },
                "构造器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "构造器",
                            "energy": 4,
                            "rate": 1
                        }
                    ]
                },
                "组装器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "组装器",
                            "energy": 15,
                            "rate": 1
                        }
                    ]
                },
                "制造器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "制造器",
                            "energy": 55,
                            "rate": 1
                        }
                    ]
                },
                "精炼厂": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "精炼厂",
                            "energy": 30,
                            "rate": 1
                        }
                    ]
                },
                "灌装机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "灌装机",
                            "energy": 10,
                            "rate": 1
                        }
                    ]
                },

                "搅拌器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "搅拌器",
                            "energy": 75,
                            "rate": 1
                        }
                    ]
                }
            }
        }

        saveDataToLocalStorage();
    }
} catch (err) {
    console.error(err);
}