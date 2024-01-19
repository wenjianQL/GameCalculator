// 游戏数据
curGameName = "game_dsp";
try {
    const data = localStorage.getItem(curGameName);
    if (data) {
        console.log("success");
        game_data = JSON.parse(data);
    } else {
        console.log("fail");
        game_data = {
            "game_name": "game_dsp",
            "version": "0.10.28.20759",
            "equipment": {
                "轻型工业机甲": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "伊卡洛斯",
                            "energy": 0.08,
                            "rate": 1,
                            "占地": 0
                        }
                    ]
                },
                "采矿设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "采矿机",
                            "energy": 0.42,
                            "rate": 0.5,
                            "占地": 15
                        },
                        {
                            "name": "大型采矿机",
                            "energy": 2.94,
                            "rate": 1,
                            "占地": 25
                        }
                    ]
                },
                "抽水设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "抽水机",
                            "energy": 0.3,
                            "rate": 1,
                            "占地": 12
                        }
                    ]
                },
                "抽油设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "原油萃取站",
                            "energy": 0.3,
                            "rate": 1,
                            "占地": 50
                        }
                    ]
                },
                "巨星采集": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "轨道采集器",
                            "energy": 30,
                            "rate": 8,
                            "占地": 0
                        }
                    ]
                },
                "射线接收站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "射线接收站",
                            "energy": 0,
                            "rate": 1,
                            "占地": 54.82
                        }
                    ]
                },
                "冶炼设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "电弧熔炉",
                            "energy": 0.36,
                            "rate": 1,
                            "占地": 5.76
                        },
                        {
                            "name": "位面熔炉",
                            "energy": 1.44,
                            "rate": 2,
                            "占地": 5.76
                        },
                        {
                            "name": "负熵熔炉",
                            "energy": 2.88,
                            "rate": 3,
                            "占地": 5.76
                        }
                    ]
                },
                "制造台": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "制造台MK.Ⅰ",
                            "energy": 0.27,
                            "rate": 0.75,
                            "占地": 10.24
                        },
                        {
                            "name": "制造台MK.Ⅱ",
                            "energy": 0.54,
                            "rate": 1,
                            "占地": 10.24
                        },
                        {
                            "name": "制造台MK.Ⅲ",
                            "energy": 1.08,
                            "rate": 1.5,
                            "占地": 10.24
                        },
                        {
                            "name": "重组式制造台",
                            "energy": 2.7,
                            "rate": 3,
                            "占地": 10.24
                        }
                    ]
                },
                "精炼设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "原油精炼厂",
                            "energy": 0.96,
                            "rate": 1,
                            "占地": 18
                        }
                    ]
                },
                "化工设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "化工厂",
                            "energy": 0.72,
                            "rate": 1,
                            "占地": 23.76
                        },
                        {
                            "name": "量子化工厂",
                            "energy": 2.16,
                            "rate": 2,
                            "占地": 23.76
                        }
                    ]
                },
                "分馏设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "分馏塔",
                            "energy": 0.72,
                            "rate": 1,
                            "占地": 12.96
                        }
                    ]
                },
                "粒子对撞机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "微型粒子对撞机",
                            "energy": 12,
                            "rate": 1,
                            "占地": 45.12
                        }
                    ]
                },
                "科研设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "研究站",
                            "energy": 0.48,
                            "rate": 1,
                            "占地": 20.25
                        },
                        {
                            "name": "自演化研究站",
                            "energy": 1.92,
                            "rate": 3,
                            "占地": 20.25
                        }
                    ]
                },
                "充电设备": {
                    "useIndex": 0,
                    "data": [
                        {
                            "name": "能量枢纽",
                            "energy": 45,
                            "rate": 50,
                            "占地": 64
                        },
                        {
                            "name": "蓄电器",
                            "energy": 0.9,
                            "rate": 1,
                            "占地": 4
                        }
                    ]
                }
            },
            "buff": {
                "增产剂": {
                    "data": [
                        {
                            "id": 1,
                            "名字": "增产剂MK.Ⅰ",
                            "喷涂次数": 12,
                            "额外产出": 1.125,
                            "加速生成": 1.25,
                            "电力消耗": 1.3,
                            "制造于": "制造台",
                        },
                        {
                            "id": 2,
                            "名字": "增产剂MK.Ⅱ",
                            "喷涂次数": 24,
                            "额外产出": 1.2,
                            "加速生成": 1.5,
                            "电力消耗": 1.7,
                            "制造于": "制造台",
                        },
                        {
                            "id": 3,
                            "名字": "增产剂MK.Ⅲ",
                            "喷涂次数": 60,
                            "额外产出": 1.25,
                            "加速生成": 2,
                            "电力消耗": 2.5,
                            "制造于": "制造台",
                        }
                    ]
                }
            },
            "recipe_data": {
                "木材": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "木材",
                            "material": "木材",
                            "equIndex": 0,
                            "equType": "轻型工业机甲",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "木材": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*木材"
                        }
                    ]
                },
                "植物燃料": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "植物燃料",
                            "material": "植物燃料",
                            "equIndex": 0,
                            "equType": "轻型工业机甲",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "植物燃料": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*植物燃料"
                        }
                    ]
                },
                "铁矿": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "铁矿",
                            "material": "铁矿",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "铁矿": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*铁矿"
                        }
                    ]
                },
                "铜矿": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "铜矿",
                            "material": "铜矿",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "铜矿": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*铜矿"
                        }
                    ]
                },
                "石矿": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "石矿",
                            "material": "石矿",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "石矿": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*石矿"
                        }
                    ]
                },
                "煤矿": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "煤矿",
                            "material": "煤矿",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "煤矿": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*煤矿"
                        }
                    ]
                },
                "硅石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "硅石",
                            "material": "硅石",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "硅石": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*硅石"
                        },
                        {
                            "time": 10,
                            "recipe_name": "硅石",
                            "material": "硅石",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "硅石": 1
                            },
                            "sourceList": {
                                "石矿": 10
                            },
                            "isCanUse": true,
                            "step": "1*硅石 = 10*石矿"
                        }
                    ]
                },
                "钛石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "钛石",
                            "material": "钛石",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钛石": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*钛石"
                        }
                    ]
                },
                "水": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1.2,
                            "recipe_name": "水",
                            "material": "水",
                            "equIndex": 0,
                            "equType": "抽水设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "水": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*水"
                        }
                    ]
                },
                "原油": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "原油",
                            "material": "原油",
                            "equIndex": 0,
                            "equType": "抽油设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "原油": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*原油"
                        }
                    ]
                },
                "氢": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "氢",
                            "material": "氢",
                            "equIndex": 0,
                            "equType": "巨星采集",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "氢": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*氢"
                        },
                        {
                            "time": 4,
                            "recipe_name": "氢",
                            "material": "氢",
                            "equIndex": 0,
                            "equType": "精炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "氢": 1,
                                "精炼油": 2
                            },
                            "sourceList": {
                                "原油": 2
                            },
                            "isCanUse": true
                        },
                        {
                            "time": 2,
                            "recipe_name": "氢",
                            "material": "氢",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "氢": 1,
                                "石墨烯": 2
                            },
                            "sourceList": {
                                "可燃冰": 2
                            },
                            "isCanUse": true
                        },
                        {
                            "time": 4,
                            "recipe_name": "氢",
                            "material": "氢",
                            "equIndex": 0,
                            "equType": "精炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "氢": 3,
                                "高能石墨": 1
                            },
                            "sourceList": {
                                "氢": 2,
                                "精炼油": 1
                            },
                            "isCanUse": true
                        },
                        {
                            "time": 2,
                            "recipe_name": "氢",
                            "material": "氢",
                            "equIndex": 0,
                            "equType": "射线接收站",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "氢": 2,
                                "反物质": 2
                            },
                            "sourceList": {
                                "临界光子": 2
                            },
                            "isCanUse": true
                        }
                    ]
                },
                "重氢": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "重氢",
                            "material": "重氢",
                            "equIndex": 0,
                            "equType": "巨星采集",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "重氢": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*重氢"
                        },
                        {
                            "time": 2.5,
                            "recipe_name": "重氢",
                            "material": "重氢",
                            "equIndex": 0,
                            "equType": "粒子对撞机",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "重氢": 5
                            },
                            "sourceList": {
                                "氢": 10
                            },
                            "isCanUse": true,
                            "step": "5*重氢 = 10*氢"
                        },
                        {
                            "time": 100,
                            "recipe_name": "重氢",
                            "material": "重氢",
                            "equIndex": 0,
                            "equType": "分馏设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "notBuff": true,
                            "productList": {
                                "重氢": 1
                            },
                            "sourceList": {
                                "氢": 1
                            },
                            "isCanUse": true,
                            "step": "1*重氢 = 1*氢"
                        }
                    ]
                },
                "反物质": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "反物质",
                            "material": "反物质",
                            "equIndex": 0,
                            "equType": "粒子对撞机",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "反物质": 2,
                                "氢": 2
                            },
                            "sourceList": {
                                "临界光子": 2
                            },
                            "isCanUse": true,
                            "step": "2*反物质 + 2*氢 = 2*临界光子"
                        }
                    ]
                },
                "可燃冰": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "可燃冰",
                            "material": "可燃冰",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "可燃冰": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*可燃冰"
                        },
                        {
                            "time": 1,
                            "recipe_name": "可燃冰",
                            "material": "可燃冰",
                            "equIndex": 0,
                            "equType": "巨星采集",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "可燃冰": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*可燃冰"
                        }
                    ]
                },
                "金伯利矿石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "金伯利矿石",
                            "material": "金伯利矿石",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "金伯利矿石": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*金伯利矿石"
                        }
                    ]
                },
                "分形硅石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "分形硅石",
                            "material": "分形硅石",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "分形硅石": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*分形硅石"
                        }
                    ]
                },
                "光栅石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "光栅石",
                            "material": "光栅石",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "光栅石": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*光栅石"
                        }
                    ]
                },
                "有机晶体": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "有机晶体",
                            "material": "有机晶体",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "有机晶体": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*有机晶体"
                        },
                        {
                            "time": 6,
                            "recipe_name": "有机晶体",
                            "material": "有机晶体",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "有机晶体": 1
                            },
                            "sourceList": {
                                "塑料": 2,
                                "精炼油": 1,
                                "水": 1
                            },
                            "isCanUse": true,
                            "step": "1*有机晶体 = 2*塑料 + 1*精炼油 + 1*水"
                        },
                        {
                            "time": 6,
                            "recipe_name": "有机晶体",
                            "material": "有机晶体",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "有机晶体": 1
                            },
                            "sourceList": {
                                "木材": 20,
                                "植物燃料": 20,
                                "水": 10
                            },
                            "isCanUse": true,
                            "step": "1*有机晶体 = 20*木材 + 20*植物燃料 + 10*水"
                        }
                    ]
                },
                "刺笋结晶": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "刺笋结晶",
                            "material": "刺笋结晶",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "刺笋结晶": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*刺笋结晶"
                        }
                    ]
                },
                "单极磁石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "单极磁石",
                            "material": "单极磁石",
                            "equIndex": 0,
                            "equType": "采矿设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "单极磁石": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*单极磁石"
                        }
                    ]
                },
                "临界光子": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "临界光子",
                            "material": "临界光子",
                            "equIndex": 0,
                            "equType": "射线接收站",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "临界光子": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*临界光子"
                        },
                        {
                            "time": 5,
                            "recipe_name": "临界光子",
                            "material": "临界光子",
                            "equIndex": 0,
                            "equType": "射线接收站",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "临界光子": 1
                            },
                            "sourceList": {
                                "引力透镜": 0.008333
                            },
                            "isCanUse": true,
                            "step": "1*临界光子 = 0.008333*引力透镜"
                        }
                    ]
                },
                "硫酸": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1.2,
                            "recipe_name": "硫酸",
                            "material": "硫酸",
                            "equIndex": 0,
                            "equType": "抽水设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "硫酸": 1
                            },
                            "sourceList": {},
                            "isCanUse": true,
                            "step": "1*硫酸"
                        },
                        {
                            "time": 6,
                            "recipe_name": "硫酸",
                            "material": "硫酸",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "硫酸": 4
                            },
                            "sourceList": {
                                "精炼油": 6,
                                "石矿": 8,
                                "水": 4
                            },
                            "isCanUse": true,
                            "step": "4*硫酸 = 6*精炼油 + 8*石矿 + 4*水"
                        }
                    ]
                },
                "铁块": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "铁块",
                            "material": "铁块",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "铁块": 1
                            },
                            "sourceList": {
                                "铁矿": 1
                            },
                            "isCanUse": true,
                            "step": "1*铁块 = 1*铁矿"
                        }
                    ]
                },
                "铜块": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "铜块",
                            "material": "铜块",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "铜块": 1
                            },
                            "sourceList": {
                                "铜矿": 1
                            },
                            "isCanUse": true,
                            "step": "1*铜块 = 1*铜矿"
                        }
                    ]
                },
                "高纯硅块": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "高纯硅块",
                            "material": "高纯硅块",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "高纯硅块": 1
                            },
                            "sourceList": {
                                "硅石": 2
                            },
                            "isCanUse": true,
                            "step": "1*高纯硅块 = 2*硅石"
                        }
                    ]
                },
                "钛块": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "钛块",
                            "material": "钛块",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钛块": 1
                            },
                            "sourceList": {
                                "钛石": 2
                            },
                            "isCanUse": true,
                            "step": "1*钛块 = 2*钛石"
                        }
                    ]
                },
                "石材": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "石材",
                            "material": "石材",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "石材": 1
                            },
                            "sourceList": {
                                "石矿": 1
                            },
                            "isCanUse": true,
                            "step": "1*石材 = 1*石矿"
                        }
                    ]
                },
                "高能石墨": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "高能石墨",
                            "material": "高能石墨",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "高能石墨": 1
                            },
                            "sourceList": {
                                "煤矿": 2
                            },
                            "isCanUse": true,
                            "step": "1*高能石墨 = 2*煤矿"
                        },
                        {
                            "time": 4,
                            "recipe_name": "高能石墨",
                            "material": "高能石墨",
                            "equIndex": 0,
                            "equType": "精炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "高能石墨": 1,
                                "氢": 3
                            },
                            "sourceList": {
                                "精炼油": 1,
                                "氢": 2
                            },
                            "isCanUse": true,
                            "step": "1*高能石墨 + 3*氢 = 1*精炼油 + 2*氢"
                        }
                    ]
                },
                "玻璃": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "玻璃",
                            "material": "玻璃",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "玻璃": 1
                            },
                            "sourceList": {
                                "石矿": 2
                            },
                            "isCanUse": true,
                            "step": "1*玻璃 = 2*石矿"
                        }
                    ]
                },
                "磁铁": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1.5,
                            "recipe_name": "磁铁",
                            "material": "磁铁",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "磁铁": 1
                            },
                            "sourceList": {
                                "铁矿": 1
                            },
                            "isCanUse": true,
                            "step": "1*磁铁 = 1*铁矿"
                        }
                    ]
                },
                "金刚石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1.5,
                            "recipe_name": "金刚石",
                            "material": "金刚石",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "金刚石": 2
                            },
                            "sourceList": {
                                "金伯利矿石": 1
                            },
                            "isCanUse": true,
                            "step": "2*金刚石 = 1*金伯利矿石"
                        },
                        {
                            "time": 2,
                            "recipe_name": "金刚石",
                            "material": "金刚石",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "金刚石": 1
                            },
                            "sourceList": {
                                "高能石墨": 1
                            },
                            "isCanUse": true,
                            "step": "1*金刚石 = 1*高能石墨"
                        }
                    ]
                },
                "晶格硅": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1.5,
                            "recipe_name": "晶格硅",
                            "material": "晶格硅",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "晶格硅": 2
                            },
                            "sourceList": {
                                "分形硅石": 1
                            },
                            "isCanUse": true,
                            "step": "2*晶格硅 = 1*分形硅石"
                        },
                        {
                            "time": 2,
                            "recipe_name": "晶格硅",
                            "material": "晶格硅",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "晶格硅": 1
                            },
                            "sourceList": {
                                "高纯硅块": 1
                            },
                            "isCanUse": true,
                            "step": "1*晶格硅 = 1*高纯硅块"
                        }
                    ]
                },
                "钢材": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "钢材",
                            "material": "钢材",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钢材": 1
                            },
                            "sourceList": {
                                "铁块": 3
                            },
                            "isCanUse": true,
                            "step": "1*钢材 = 3*铁块"
                        }
                    ]
                },
                "钛合金": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 12,
                            "recipe_name": "钛合金",
                            "material": "钛合金",
                            "equIndex": 0,
                            "equType": "冶炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钛合金": 4
                            },
                            "sourceList": {
                                "硫酸": 8,
                                "钛块": 4,
                                "钢材": 4
                            },
                            "isCanUse": true,
                            "step": "4*钛合金 = 8*硫酸 + 4*钛块 + 4*钢材"
                        }
                    ]
                },
                "精炼油": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "精炼油",
                            "material": "精炼油",
                            "equIndex": 0,
                            "equType": "精炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "精炼油": 2,
                                "氢": 1
                            },
                            "sourceList": {
                                "原油": 2
                            },
                            "isCanUse": true,
                            "step": "2*精炼油 + 1*氢 = 2*原油"
                        },
                        {
                            "time": 4,
                            "recipe_name": "精炼油",
                            "material": "精炼油",
                            "equIndex": 0,
                            "equType": "精炼设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "精炼油": 3
                            },
                            "sourceList": {
                                "精炼油": 2,
                                "氢": 1,
                                "煤矿": 1
                            },
                            "isCanUse": true,
                            "step": "3*精炼油 = 2*精炼油 + 1*氢 + 1*煤矿"
                        }
                    ]
                },
                "塑料": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "塑料",
                            "material": "塑料",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "塑料": 1
                            },
                            "sourceList": {
                                "精炼油": 2,
                                "高能石墨": 1
                            },
                            "isCanUse": true,
                            "step": "1*塑料 = 2*精炼油 + 1*高能石墨"
                        }
                    ]
                },
                "石墨烯": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "石墨烯",
                            "material": "石墨烯",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "石墨烯": 2
                            },
                            "sourceList": {
                                "硫酸": 1,
                                "高能石墨": 3
                            },
                            "isCanUse": true,
                            "step": "2*石墨烯 = 1*硫酸 + 3*高能石墨"
                        },
                        {
                            "time": 2,
                            "recipe_name": "石墨烯",
                            "material": "石墨烯",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "石墨烯": 2,
                                "氢": 1
                            },
                            "sourceList": {
                                "可燃冰": 2
                            },
                            "isCanUse": true,
                            "step": "2*石墨烯 + 1*氢 = 2*可燃冰"
                        }
                    ]
                },
                "碳纳米管": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "碳纳米管",
                            "material": "碳纳米管",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "碳纳米管": 2
                            },
                            "sourceList": {
                                "钛块": 1,
                                "石墨烯": 3
                            },
                            "isCanUse": true,
                            "step": "2*碳纳米管 = 1*钛块 + 3*石墨烯"
                        },
                        {
                            "time": 4,
                            "recipe_name": "碳纳米管",
                            "material": "碳纳米管",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "碳纳米管": 2
                            },
                            "sourceList": {
                                "刺笋结晶": 6
                            },
                            "isCanUse": true,
                            "step": "2*碳纳米管 = 6*刺笋结晶"
                        }
                    ]
                },
                "齿轮": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "齿轮",
                            "material": "齿轮",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "齿轮": 1
                            },
                            "sourceList": {
                                "铁块": 1
                            },
                            "isCanUse": true,
                            "step": "1*齿轮 = 1*铁块"
                        }
                    ]
                },
                "棱镜": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "棱镜",
                            "material": "棱镜",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "棱镜": 2
                            },
                            "sourceList": {
                                "玻璃": 3
                            },
                            "isCanUse": true,
                            "step": "2*棱镜 = 3*玻璃"
                        }
                    ]
                },
                "电路板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "电路板",
                            "material": "电路板",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电路板": 2
                            },
                            "sourceList": {
                                "铁块": 2,
                                "铜块": 1
                            },
                            "isCanUse": true,
                            "step": "2*电路板 = 2*铁块 + 1*铜块"
                        }
                    ]
                },
                "磁线圈": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "磁线圈",
                            "material": "磁线圈",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "磁线圈": 2
                            },
                            "sourceList": {
                                "磁铁": 2,
                                "铜块": 1
                            },
                            "isCanUse": true,
                            "step": "2*磁线圈 = 2*磁铁 + 1*铜块"
                        }
                    ]
                },
                "微晶元件": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "微晶元件",
                            "material": "微晶元件",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "微晶元件": 1
                            },
                            "sourceList": {
                                "高纯硅块": 2,
                                "铜块": 1
                            },
                            "isCanUse": true,
                            "step": "1*微晶元件 = 2*高纯硅块 + 1*铜块"
                        }
                    ]
                },
                "钛晶石": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "钛晶石",
                            "material": "钛晶石",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钛晶石": 1
                            },
                            "sourceList": {
                                "钛块": 3,
                                "有机晶体": 1
                            },
                            "isCanUse": true,
                            "step": "1*钛晶石 = 3*钛块 + 1*有机晶体"
                        }
                    ]
                },
                "电浆激发器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "电浆激发器",
                            "material": "电浆激发器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电浆激发器": 1
                            },
                            "sourceList": {
                                "磁线圈": 4,
                                "棱镜": 2
                            },
                            "isCanUse": true,
                            "step": "1*电浆激发器 = 4*磁线圈 + 2*棱镜"
                        }
                    ]
                },
                "电动机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "电动机",
                            "material": "电动机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电动机": 1
                            },
                            "sourceList": {
                                "磁线圈": 1,
                                "铁块": 2,
                                "齿轮": 1
                            },
                            "isCanUse": true,
                            "step": "1*电动机 = 1*磁线圈 + 2*铁块 + 1*齿轮"
                        }
                    ]
                },
                "电磁涡轮": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "电磁涡轮",
                            "material": "电磁涡轮",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电磁涡轮": 1
                            },
                            "sourceList": {
                                "磁线圈": 2,
                                "电动机": 2
                            },
                            "isCanUse": true,
                            "step": "1*电磁涡轮 = 2*磁线圈 + 2*电动机"
                        }
                    ]
                },
                "处理器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "处理器",
                            "material": "处理器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "处理器": 1
                            },
                            "sourceList": {
                                "电路板": 2,
                                "微晶元件": 2
                            },
                            "isCanUse": true,
                            "step": "1*处理器 = 2*电路板 + 2*微晶元件"
                        }
                    ]
                },
                "粒子宽带": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "粒子宽带",
                            "material": "粒子宽带",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "粒子宽带": 1
                            },
                            "sourceList": {
                                "碳纳米管": 2,
                                "晶格硅": 2,
                                "塑料": 1
                            },
                            "isCanUse": true,
                            "step": "1*粒子宽带 = 2*碳纳米管 + 2*晶格硅 + 1*塑料"
                        }
                    ]
                },
                "框架材料": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "框架材料",
                            "material": "框架材料",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "框架材料": 1
                            },
                            "sourceList": {
                                "碳纳米管": 4,
                                "高纯硅块": 1,
                                "钛合金": 1
                            },
                            "isCanUse": true,
                            "step": "1*框架材料 = 4*碳纳米管 + 1*高纯硅块 + 1*钛合金"
                        }
                    ]
                },
                "光子合并器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "光子合并器",
                            "material": "光子合并器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "光子合并器": 1
                            },
                            "sourceList": {
                                "电路板": 1,
                                "棱镜": 2
                            },
                            "isCanUse": true,
                            "step": "1*光子合并器 = 1*电路板 + 2*棱镜"
                        },
                        {
                            "time": 3,
                            "recipe_name": "光子合并器",
                            "material": "光子合并器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "光子合并器": 1
                            },
                            "sourceList": {
                                "电路板": 1,
                                "光栅石": 1
                            },
                            "isCanUse": true,
                            "step": "1*光子合并器 = 1*电路板 + 1*光栅石"
                        }
                    ]
                },
                "粒子容器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "粒子容器",
                            "material": "粒子容器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "粒子容器": 1
                            },
                            "sourceList": {
                                "电磁涡轮": 2,
                                "铜块": 2,
                                "石墨烯": 2
                            },
                            "isCanUse": true,
                            "step": "1*粒子容器 = 2*电磁涡轮 + 2*铜块 + 2*石墨烯"
                        },
                        {
                            "time": 4,
                            "recipe_name": "粒子容器",
                            "material": "粒子容器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "粒子容器": 1
                            },
                            "sourceList": {
                                "单极磁石": 10,
                                "铜块": 2
                            },
                            "isCanUse": true,
                            "step": "1*粒子容器 = 10*单极磁石 + 2*铜块"
                        }
                    ]
                },
                "超级磁场环": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "超级磁场环",
                            "material": "超级磁场环",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "超级磁场环": 1
                            },
                            "sourceList": {
                                "电磁涡轮": 2,
                                "磁铁": 3,
                                "高能石墨": 1
                            },
                            "isCanUse": true,
                            "step": "1*超级磁场环 = 2*电磁涡轮 + 3*磁铁 + 1*高能石墨"
                        }
                    ]
                },
                "引力透镜": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "引力透镜",
                            "material": "引力透镜",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "引力透镜": 1
                            },
                            "sourceList": {
                                "金刚石": 4,
                                "奇异物质": 1
                            },
                            "isCanUse": true,
                            "step": "1*引力透镜 = 4*金刚石 + 1*奇异物质"
                        }
                    ]
                },
                "钛化玻璃": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "钛化玻璃",
                            "material": "钛化玻璃",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钛化玻璃": 2
                            },
                            "sourceList": {
                                "玻璃": 2,
                                "钛块": 2,
                                "水": 2
                            },
                            "isCanUse": true,
                            "step": "2*钛化玻璃 = 2*玻璃 + 2*钛块 + 2*水"
                        }
                    ]
                },
                "卡西米尔晶体": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "卡西米尔晶体",
                            "material": "卡西米尔晶体",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "卡西米尔晶体": 1
                            },
                            "sourceList": {
                                "钛晶石": 1,
                                "石墨烯": 2,
                                "氢": 12
                            },
                            "isCanUse": true,
                            "step": "1*卡西米尔晶体 = 1*钛晶石 + 2*石墨烯 + 12*氢"
                        },
                        {
                            "time": 4,
                            "recipe_name": "卡西米尔晶体",
                            "material": "卡西米尔晶体",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "卡西米尔晶体": 1
                            },
                            "sourceList": {
                                "光栅石": 8,
                                "石墨烯": 2,
                                "氢": 12
                            },
                            "isCanUse": true,
                            "step": "1*卡西米尔晶体 = 8*光栅石 + 2*石墨烯 + 12*氢"
                        }
                    ]
                },
                "位面过滤器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 12,
                            "recipe_name": "位面过滤器",
                            "material": "位面过滤器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "位面过滤器": 1
                            },
                            "sourceList": {
                                "卡西米尔晶体": 1,
                                "钛化玻璃": 2
                            },
                            "isCanUse": true,
                            "step": "1*位面过滤器 = 1*卡西米尔晶体 + 2*钛化玻璃"
                        }
                    ]
                },
                "量子芯片": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "量子芯片",
                            "material": "量子芯片",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "量子芯片": 1
                            },
                            "sourceList": {
                                "处理器": 2,
                                "位面过滤器": 2
                            },
                            "isCanUse": true,
                            "step": "1*量子芯片 = 2*处理器 + 2*位面过滤器"
                        }
                    ]
                },
                "湮灭约束球": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 20,
                            "recipe_name": "湮灭约束球",
                            "material": "湮灭约束球",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "湮灭约束球": 1
                            },
                            "sourceList": {
                                "处理器": 1,
                                "粒子容器": 1
                            },
                            "isCanUse": true,
                            "step": "1*湮灭约束球 = 1*处理器 + 1*粒子容器"
                        }
                    ]
                },
                "奇异物质": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "奇异物质",
                            "material": "奇异物质",
                            "equIndex": 0,
                            "equType": "粒子对撞机",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "奇异物质": 1
                            },
                            "sourceList": {
                                "铁块": 2,
                                "粒子容器": 2,
                                "重氢": 10
                            },
                            "isCanUse": true,
                            "step": "1*奇异物质 = 2*铁块 + 2*粒子容器 + 10*重氢"
                        }
                    ]
                },
                "增产剂MK.Ⅰ": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 0.5,
                            "recipe_name": "增产剂MK.Ⅰ",
                            "material": "增产剂MK.Ⅰ",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "增产剂MK.Ⅰ": 1
                            },
                            "sourceList": {
                                "煤矿": 1
                            },
                            "isCanUse": true,
                            "step": "1*增产剂MK.Ⅰ = 1*煤矿"
                        }
                    ]
                },
                "增产剂MK.Ⅱ": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "增产剂MK.Ⅱ",
                            "material": "增产剂MK.Ⅱ",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "增产剂MK.Ⅱ": 1
                            },
                            "sourceList": {
                                "金刚石": 1,
                                "增产剂MK.Ⅰ": 2
                            },
                            "isCanUse": true,
                            "step": "1*增产剂MK.Ⅱ = 1*金刚石 + 2*增产剂MK.Ⅰ"
                        }
                    ]
                },
                "增产剂MK.Ⅲ": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "增产剂MK.Ⅲ",
                            "material": "增产剂MK.Ⅲ",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "增产剂MK.Ⅲ": 1
                            },
                            "sourceList": {
                                "碳纳米管": 1,
                                "增产剂MK.Ⅱ": 2
                            },
                            "isCanUse": true,
                            "step": "1*增产剂MK.Ⅲ = 1*碳纳米管 + 2*增产剂MK.Ⅱ"
                        }
                    ]
                },
                "液氢燃料棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "液氢燃料棒",
                            "material": "液氢燃料棒",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "液氢燃料棒": 2
                            },
                            "sourceList": {
                                "钛块": 1,
                                "氢": 10
                            },
                            "isCanUse": true,
                            "step": "2*液氢燃料棒 = 1*钛块 + 10*氢"
                        }
                    ]
                },
                "氘核燃料棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 12,
                            "recipe_name": "氘核燃料棒",
                            "material": "氘核燃料棒",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "氘核燃料棒": 2
                            },
                            "sourceList": {
                                "钛合金": 1,
                                "重氢": 20,
                                "超级磁场环": 1
                            },
                            "isCanUse": true,
                            "step": "2*氘核燃料棒 = 1*钛合金 + 20*重氢 + 1*超级磁场环"
                        }
                    ]
                },
                "反物质燃料棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 24,
                            "recipe_name": "反物质燃料棒",
                            "material": "反物质燃料棒",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "反物质燃料棒": 2
                            },
                            "sourceList": {
                                "钛合金": 1,
                                "氢": 12,
                                "反物质": 12,
                                "湮灭约束球": 1
                            },
                            "isCanUse": true,
                            "step": "2*反物质燃料棒 = 1*钛合金 + 12*氢 + 12*反物质 + 1*湮灭约束球"
                        }
                    ]
                },
                "空间翘曲器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "空间翘曲器",
                            "material": "空间翘曲器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "空间翘曲器": 1
                            },
                            "sourceList": {
                                "引力透镜": 1
                            },
                            "isCanUse": true,
                            "step": "1*空间翘曲器 = 1*引力透镜"
                        },
                        {
                            "time": 10,
                            "recipe_name": "空间翘曲器",
                            "material": "空间翘曲器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "空间翘曲器": 8
                            },
                            "sourceList": {
                                "引力矩阵": 1
                            },
                            "isCanUse": true,
                            "step": "8*空间翘曲器 = 1*引力矩阵"
                        }
                    ]
                },
                "太阳帆": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "太阳帆",
                            "material": "太阳帆",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "太阳帆": 2
                            },
                            "sourceList": {
                                "石墨烯": 1,
                                "光子合并器": 1
                            },
                            "isCanUse": true,
                            "step": "2*太阳帆 = 1*石墨烯 + 1*光子合并器"
                        }
                    ]
                },
                "戴森球组件": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "戴森球组件",
                            "material": "戴森球组件",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "戴森球组件": 1
                            },
                            "sourceList": {
                                "框架材料": 3,
                                "处理器": 3,
                                "太阳帆": 3
                            },
                            "isCanUse": true,
                            "step": "1*戴森球组件 = 3*框架材料 + 3*处理器 + 3*太阳帆"
                        }
                    ]
                },
                "小型运载火箭": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "小型运载火箭",
                            "material": "小型运载火箭",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "小型运载火箭": 1
                            },
                            "sourceList": {
                                "量子芯片": 2,
                                "氘核燃料棒": 4,
                                "戴森球组件": 2
                            },
                            "isCanUse": true,
                            "step": "1*小型运载火箭 = 2*量子芯片 + 4*氘核燃料棒 + 2*戴森球组件"
                        }
                    ]
                },
                "电磁矩阵": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "电磁矩阵",
                            "material": "电磁矩阵",
                            "equIndex": 0,
                            "equType": "科研设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电磁矩阵": 1
                            },
                            "sourceList": {
                                "磁线圈": 1,
                                "电路板": 1
                            },
                            "isCanUse": true,
                            "step": "1*电磁矩阵 = 1*磁线圈 + 1*电路板"
                        }
                    ]
                },
                "能量矩阵": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "能量矩阵",
                            "material": "能量矩阵",
                            "equIndex": 0,
                            "equType": "科研设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "能量矩阵": 1
                            },
                            "sourceList": {
                                "高能石墨": 2,
                                "氢": 2
                            },
                            "isCanUse": true,
                            "step": "1*能量矩阵 = 2*高能石墨 + 2*氢"
                        }
                    ]
                },
                "结构矩阵": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "结构矩阵",
                            "material": "结构矩阵",
                            "equIndex": 0,
                            "equType": "科研设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "结构矩阵": 1
                            },
                            "sourceList": {
                                "金刚石": 1,
                                "钛晶石": 1
                            },
                            "isCanUse": true,
                            "step": "1*结构矩阵 = 1*金刚石 + 1*钛晶石"
                        }
                    ]
                },
                "信息矩阵": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "信息矩阵",
                            "material": "信息矩阵",
                            "equIndex": 0,
                            "equType": "科研设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "信息矩阵": 1
                            },
                            "sourceList": {
                                "处理器": 2,
                                "粒子宽带": 1
                            },
                            "isCanUse": true,
                            "step": "1*信息矩阵 = 2*处理器 + 1*粒子宽带"
                        }
                    ]
                },
                "引力矩阵": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 24,
                            "recipe_name": "引力矩阵",
                            "material": "引力矩阵",
                            "equIndex": 0,
                            "equType": "科研设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "引力矩阵": 2
                            },
                            "sourceList": {
                                "引力透镜": 1,
                                "量子芯片": 1
                            },
                            "isCanUse": true,
                            "step": "2*引力矩阵 = 1*引力透镜 + 1*量子芯片"
                        }
                    ]
                },
                "宇宙矩阵": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 15,
                            "recipe_name": "宇宙矩阵",
                            "material": "宇宙矩阵",
                            "equIndex": 0,
                            "equType": "科研设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "宇宙矩阵": 1
                            },
                            "sourceList": {
                                "电磁矩阵": 1,
                                "能量矩阵": 1,
                                "结构矩阵": 1,
                                "信息矩阵": 1,
                                "引力矩阵": 1,
                                "反物质": 1
                            },
                            "isCanUse": true,
                            "step": "1*宇宙矩阵 = 1*电磁矩阵 + 1*能量矩阵 + 1*结构矩阵 + 1*信息矩阵 + 1*引力矩阵 + 1*反物质"
                        }
                    ]
                },
                "推进器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "推进器",
                            "material": "推进器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "推进器": 1
                            },
                            "sourceList": {
                                "钢材": 2,
                                "铜块": 3
                            },
                            "isCanUse": true,
                            "step": "1*推进器 = 2*钢材 + 3*铜块"
                        }
                    ]
                },
                "加力推进器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "加力推进器",
                            "material": "加力推进器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "加力推进器": 1
                            },
                            "sourceList": {
                                "钛合金": 5,
                                "电磁涡轮": 5
                            },
                            "isCanUse": true,
                            "step": "1*加力推进器 = 5*钛合金 + 5*电磁涡轮"
                        }
                    ]
                },
                "物流运输机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "物流运输机",
                            "material": "物流运输机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "物流运输机": 1
                            },
                            "sourceList": {
                                "铁块": 5,
                                "处理器": 2,
                                "推进器": 2
                            },
                            "isCanUse": true,
                            "step": "1*物流运输机 = 5*铁块 + 2*处理器 + 2*推进器"
                        }
                    ]
                },
                "星际物流运输船": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "星际物流运输船",
                            "material": "星际物流运输船",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "星际物流运输船": 1
                            },
                            "sourceList": {
                                "钛合金": 10,
                                "处理器": 10,
                                "加力推进器": 2
                            },
                            "isCanUse": true,
                            "step": "1*星际物流运输船 = 10*钛合金 + 10*处理器 + 2*加力推进器"
                        }
                    ]
                },
                "地基": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "地基",
                            "material": "地基",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "地基": 1
                            },
                            "sourceList": {
                                "钢材": 1,
                                "石材": 3
                            },
                            "isCanUse": true,
                            "step": "1*地基 = 1*钢材 + 3*石材"
                        }
                    ]
                },
                "电力感应塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "电力感应塔",
                            "material": "电力感应塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电力感应塔": 1
                            },
                            "sourceList": {
                                "铁块": 2,
                                "磁线圈": 1
                            },
                            "isCanUse": true,
                            "step": "1*电力感应塔 = 2*铁块 + 1*磁线圈"
                        }
                    ]
                },
                "无线输电塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "无线输电塔",
                            "material": "无线输电塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "无线输电塔": 1
                            },
                            "sourceList": {
                                "电力感应塔": 1,
                                "电浆激发器": 3
                            },
                            "isCanUse": true,
                            "step": "1*无线输电塔 = 1*电力感应塔 + 3*电浆激发器"
                        }
                    ]
                },
                "卫星配电站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "卫星配电站",
                            "material": "卫星配电站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "卫星配电站": 1
                            },
                            "sourceList": {
                                "无线输电塔": 1,
                                "超级磁场环": 10,
                                "框架材料": 2
                            },
                            "isCanUse": true,
                            "step": "1*卫星配电站 = 1*无线输电塔 + 10*超级磁场环 + 2*框架材料"
                        }
                    ]
                },
                "风力涡轮机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "风力涡轮机",
                            "material": "风力涡轮机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "风力涡轮机": 1
                            },
                            "sourceList": {
                                "铁块": 6,
                                "齿轮": 1,
                                "磁线圈": 3
                            },
                            "isCanUse": true,
                            "step": "1*风力涡轮机 = 6*铁块 + 1*齿轮 + 3*磁线圈"
                        }
                    ]
                },
                "火力发电机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "火力发电机",
                            "material": "火力发电机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "火力发电机": 1
                            },
                            "sourceList": {
                                "铁块": 10,
                                "石材": 4,
                                "齿轮": 4,
                                "磁线圈": 4
                            },
                            "isCanUse": true,
                            "step": "1*火力发电机 = 10*铁块 + 4*石材 + 4*齿轮 + 4*磁线圈"
                        }
                    ]
                },
                "太阳能板": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "太阳能板",
                            "material": "太阳能板",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "太阳能板": 1
                            },
                            "sourceList": {
                                "高纯硅块": 10,
                                "铜块": 10,
                                "电路板": 5
                            },
                            "isCanUse": true,
                            "step": "1*太阳能板 = 10*高纯硅块 + 10*铜块 + 5*电路板"
                        }
                    ]
                },
                "蓄电器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "蓄电器",
                            "material": "蓄电器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "蓄电器": 1
                            },
                            "sourceList": {
                                "铁块": 6,
                                "超级磁场环": 1,
                                "晶格硅": 3
                            },
                            "isCanUse": true,
                            "step": "1*蓄电器 = 6*铁块 + 1*超级磁场环 + 6*晶格硅"
                        }
                    ]
                },
                "蓄电器（满）": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 300,
                            "recipe_name": "蓄电器（满）",
                            "material": "蓄电器（满）",
                            "equIndex": 0,
                            "equType": "充电设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "蓄电器（满）": 1
                            },
                            "sourceList": {
                                "蓄电器": 1
                            },
                            "isCanUse": true,
                            "step": "1*蓄电器（满） = 1*蓄电器"
                        }
                    ]
                },
                "地热发电站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "地热发电站",
                            "material": "地热发电站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "地热发电站": 1
                            },
                            "sourceList": {
                                "钢材": 15,
                                "超级磁场环": 1,
                                "铜块": 20,
                                "光子合并器": 4
                            },
                            "isCanUse": true,
                            "step": "1*地热发电站 = 15*钢材 + 1*超级磁场环 + 20*铜块 + 4*光子合并器"
                        }
                    ]
                },
                "微型聚变发电站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "微型聚变发电站",
                            "material": "微型聚变发电站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "微型聚变发电站": 1
                            },
                            "sourceList": {
                                "钛合金": 12,
                                "超级磁场环": 10,
                                "碳纳米管": 8,
                                "处理器": 4
                            },
                            "isCanUse": true,
                            "step": "1*微型聚变发电站 = 12*钛合金 + 10*超级磁场环 + 8*碳纳米管 + 4*处理器"
                        }
                    ]
                },
                "能量枢纽": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 15,
                            "recipe_name": "能量枢纽",
                            "material": "能量枢纽",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "能量枢纽": 1
                            },
                            "sourceList": {
                                "钢材": 40,
                                "钛合金": 40,
                                "处理器": 40,
                                "粒子容器": 8
                            },
                            "isCanUse": true,
                            "step": "1*能量枢纽 = 40*钢材 + 40*钛合金 + 40*处理器 + 8*粒子容器"
                        }
                    ]
                },
                "射线接收站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "射线接收站",
                            "material": "射线接收站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "射线接收站": 1
                            },
                            "sourceList": {
                                "钢材": 20,
                                "高纯硅块": 20,
                                "处理器": 5,
                                "光子合并器": 10,
                                "超级磁场环": 20
                            },
                            "isCanUse": true,
                            "step": "1*射线接收站 = 20*钢材 + 20*高纯硅块 + 5*处理器 + 10*光子合并器 + 20*超级磁场环"
                        }
                    ]
                },
                "人造恒星": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 30,
                            "recipe_name": "人造恒星",
                            "material": "人造恒星",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "人造恒星": 1
                            },
                            "sourceList": {
                                "钛合金": 20,
                                "框架材料": 20,
                                "湮灭约束球": 10,
                                "量子芯片": 10
                            },
                            "isCanUse": true,
                            "step": "1*人造恒星 = 20*钛合金 + 20*框架材料 + 10*湮灭约束球 + 10*量子芯片"
                        }
                    ]
                },
                "传送带": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "传送带",
                            "material": "传送带",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "传送带": 3
                            },
                            "sourceList": {
                                "铁块": 2,
                                "齿轮": 1
                            },
                            "isCanUse": true,
                            "step": "3*传送带 = 2*铁块 + 1*齿轮"
                        }
                    ]
                },
                "高速传送带": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "高速传送带",
                            "material": "高速传送带",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "高速传送带": 3
                            },
                            "sourceList": {
                                "传送带": 3,
                                "电磁涡轮": 1
                            },
                            "isCanUse": true,
                            "step": "3*高速传送带 = 3*传送带 + 1*电磁涡轮"
                        }
                    ]
                },
                "极速传送带": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "极速传送带",
                            "material": "极速传送带",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "极速传送带": 3
                            },
                            "sourceList": {
                                "高速传送带": 3,
                                "超级磁场环": 1,
                                "石墨烯": 1
                            },
                            "isCanUse": true,
                            "step": "3*极速传送带 = 3*高速传送带 + 1*超级磁场环 + 1*石墨烯"
                        }
                    ]
                },
                "四向分流器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "四向分流器",
                            "material": "四向分流器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "四向分流器": 1
                            },
                            "sourceList": {
                                "铁块": 3,
                                "齿轮": 2,
                                "电路板": 1
                            },
                            "isCanUse": true,
                            "step": "1*四向分流器 = 3*铁块 + 2*齿轮 + 1*电路板"
                        }
                    ]
                },
                "自动集装机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "自动集装机",
                            "material": "自动集装机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "自动集装机": 1
                            },
                            "sourceList": {
                                "钢材": 3,
                                "超级磁场环": 1,
                                "齿轮": 4,
                                "处理器": 2
                            },
                            "isCanUse": true,
                            "step": "1*自动集装机 = 3*钢材 + 1*超级磁场环 + 4*齿轮 + 2*处理器"
                        }
                    ]
                },
                "流速监测器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "流速监测器",
                            "material": "流速监测器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "流速监测器": 1
                            },
                            "sourceList": {
                                "铁块": 3,
                                "电路板": 2,
                                "齿轮": 2,
                                "玻璃": 1
                            },
                            "isCanUse": true,
                            "step": "1*流速监测器 = 3*铁块 + 2*电路板 + 2*齿轮 + 1*玻璃"
                        }
                    ]
                },
                "小型储物仓": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "小型储物仓",
                            "material": "小型储物仓",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "小型储物仓": 1
                            },
                            "sourceList": {
                                "铁块": 4,
                                "石材": 4
                            },
                            "isCanUse": true,
                            "step": "1*小型储物仓 = 4*铁块 + 4*石材"
                        }
                    ]
                },
                "大型储物仓": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "大型储物仓",
                            "material": "大型储物仓",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "大型储物仓": 1
                            },
                            "sourceList": {
                                "钢材": 8,
                                "石材": 8
                            },
                            "isCanUse": true,
                            "step": "1*大型储物仓 = 8*钢材 + 8*石材"
                        }
                    ]
                },
                "储液罐": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "储液罐",
                            "material": "储液罐",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "储液罐": 1
                            },
                            "sourceList": {
                                "铁块": 8,
                                "石材": 4,
                                "玻璃": 4
                            },
                            "isCanUse": true,
                            "step": "1*储液罐 = 8*铁块 + 4*石材 + 4*玻璃"
                        }
                    ]
                },
                "行星内物流运输站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 20,
                            "recipe_name": "行星内物流运输站",
                            "material": "行星内物流运输站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "行星内物流运输站": 1
                            },
                            "sourceList": {
                                "钛块": 40,
                                "钢材": 40,
                                "处理器": 40,
                                "粒子容器": 20
                            },
                            "isCanUse": true,
                            "step": "1*行星内物流运输站 = 40*钛块 + 40*钢材 + 40*处理器 + 20*粒子容器"
                        }
                    ]
                },
                "星际物流运输站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 30,
                            "recipe_name": "星际物流运输站",
                            "material": "星际物流运输站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "星际物流运输站": 1
                            },
                            "sourceList": {
                                "钛合金": 40,
                                "粒子容器": 20,
                                "行星内物流运输站": 1
                            },
                            "isCanUse": true,
                            "step": "1*星际物流运输站 = 40*钛合金 + 20*粒子容器 + 1*行星内物流运输站"
                        }
                    ]
                },
                "轨道采集器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 30,
                            "recipe_name": "轨道采集器",
                            "material": "轨道采集器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "轨道采集器": 1
                            },
                            "sourceList": {
                                "超级磁场环": 50,
                                "加力推进器": 20,
                                "蓄电器（满）": 20,
                                "星际物流运输站": 1
                            },
                            "isCanUse": true,
                            "step": "1*轨道采集器 = 50*超级磁场环 + 20*加力推进器 + 20*蓄电器（满） + 1*星际物流运输站"
                        }
                    ]
                },
                "分拣器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "分拣器",
                            "material": "分拣器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "分拣器": 1
                            },
                            "sourceList": {
                                "铁块": 1,
                                "电路板": 1
                            },
                            "isCanUse": true,
                            "step": "1*分拣器 = 1*铁块 + 1*电路板"
                        }
                    ]
                },
                "高速分拣器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "高速分拣器",
                            "material": "高速分拣器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "高速分拣器": 2
                            },
                            "sourceList": {
                                "分拣器": 2,
                                "电动机": 1
                            },
                            "isCanUse": true,
                            "step": "2*高速分拣器 = 2*分拣器 + 1*电动机"
                        }
                    ]
                },
                "极速分拣器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "极速分拣器",
                            "material": "极速分拣器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "极速分拣器": 2
                            },
                            "sourceList": {
                                "高速分拣器": 2,
                                "电磁涡轮": 1
                            },
                            "isCanUse": true,
                            "step": "2*极速分拣器 = 2*高速分拣器 + 1*电磁涡轮"
                        }
                    ]
                },
                "采矿机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "采矿机",
                            "material": "采矿机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "采矿机": 1
                            },
                            "sourceList": {
                                "铁块": 4,
                                "电路板": 2,
                                "磁线圈": 2,
                                "齿轮": 2
                            },
                            "isCanUse": true,
                            "step": "1*采矿机 = 4*铁块 + 2*电路板 + 2*磁线圈 + 2*齿轮"
                        }
                    ]
                },
                "大型采矿机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 20,
                            "recipe_name": "大型采矿机",
                            "material": "大型采矿机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "大型采矿机": 1
                            },
                            "sourceList": {
                                "钛合金": 20,
                                "框架材料": 10,
                                "超级磁场环": 10,
                                "量子芯片": 2,
                                "光栅石": 40
                            },
                            "isCanUse": true,
                            "step": "1*大型采矿机 = 20*钛合金 + 10*框架材料 + 10*超级磁场环 + 2*量子芯片 + 40*光栅石"
                        }
                    ]
                },
                "抽水机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "抽水机",
                            "material": "抽水机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "抽水机": 1
                            },
                            "sourceList": {
                                "铁块": 8,
                                "电路板": 2,
                                "电动机": 4,
                                "石材": 4
                            },
                            "isCanUse": true,
                            "step": "1*抽水机 = 8*铁块 + 2*电路板 + 4*电动机 + 4*石材"
                        }
                    ]
                },
                "原油萃取站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "原油萃取站",
                            "material": "原油萃取站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "原油萃取站": 1
                            },
                            "sourceList": {
                                "钢材": 12,
                                "电路板": 6,
                                "石材": 12,
                                "电浆激发器": 4
                            },
                            "isCanUse": true,
                            "step": "1*原油萃取站 = 12*钢材 + 6*电路板 + 12*石材 + 4*电浆激发器"
                        }
                    ]
                },
                "原油精炼厂": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "原油精炼厂",
                            "material": "原油精炼厂",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "原油精炼厂": 1
                            },
                            "sourceList": {
                                "钢材": 10,
                                "电路板": 6,
                                "石材": 10,
                                "电浆激发器": 6
                            },
                            "isCanUse": true,
                            "step": "1*原油精炼厂 = 10*钢材 + 6*电路板 + 10*石材 + 6*电浆激发器"
                        }
                    ]
                },
                "分馏塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "分馏塔",
                            "material": "分馏塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "分馏塔": 1
                            },
                            "sourceList": {
                                "钢材": 8,
                                "处理器": 1,
                                "石材": 4,
                                "玻璃": 4
                            },
                            "isCanUse": true,
                            "step": "1*分馏塔 = 8*钢材 + 1*处理器 + 4*石材 + 4*玻璃"
                        }
                    ]
                },
                "微型粒子对撞机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 15,
                            "recipe_name": "微型粒子对撞机",
                            "material": "微型粒子对撞机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "微型粒子对撞机": 1
                            },
                            "sourceList": {
                                "钛合金": 20,
                                "处理器": 8,
                                "框架材料": 20,
                                "超级磁场环": 50,
                                "石墨烯": 10
                            },
                            "isCanUse": true,
                            "step": "1*微型粒子对撞机 = 20*钛合金 + 8*处理器 + 20*框架材料 + 50*超级磁场环 + 10*石墨烯"
                        }
                    ]
                },
                "电磁轨道弹射器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "电磁轨道弹射器",
                            "material": "电磁轨道弹射器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电磁轨道弹射器": 1
                            },
                            "sourceList": {
                                "钢材": 20,
                                "处理器": 5,
                                "齿轮": 20,
                                "超级磁场环": 10
                            },
                            "isCanUse": true,
                            "step": "1*电磁轨道弹射器 = 20*钢材 + 5*处理器 + 20*齿轮 + 10*超级磁场环"
                        }
                    ]
                },
                "垂直发射井": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 30,
                            "recipe_name": "垂直发射井",
                            "material": "垂直发射井",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "垂直发射井": 1
                            },
                            "sourceList": {
                                "钛合金": 80,
                                "框架材料": 30,
                                "引力透镜": 20,
                                "量子芯片": 10
                            },
                            "isCanUse": true,
                            "step": "1*垂直发射井 = 80*钛合金 + 30*框架材料 + 20*引力透镜 + 10*量子芯片"
                        }
                    ]
                },
                "制造台MK.Ⅰ": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 0.5,
                            "recipe_name": "制造台MK.Ⅰ",
                            "material": "制造台MK.Ⅰ",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "制造台MK.Ⅰ": 1
                            },
                            "sourceList": {
                                "铁块": 4,
                                "齿轮": 8,
                                "电路板": 4
                            },
                            "isCanUse": true,
                            "step": "1*制造台MK.Ⅰ = 4*铁块 + 8*齿轮 + 4*电路板"
                        }
                    ]
                },
                "制造台MK.Ⅱ": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "制造台MK.Ⅱ",
                            "material": "制造台MK.Ⅱ",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "制造台MK.Ⅱ": 1
                            },
                            "sourceList": {
                                "处理器": 4,
                                "石墨烯": 8,
                                "制造台MK.Ⅰ": 1
                            },
                            "isCanUse": true,
                            "step": "1*制造台MK.Ⅱ = 4*处理器 + 8*石墨烯 + 1*制造台MK.Ⅰ"
                        }
                    ]
                },
                "制造台MK.Ⅲ": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "制造台MK.Ⅲ",
                            "material": "制造台MK.Ⅲ",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "制造台MK.Ⅲ": 1
                            },
                            "sourceList": {
                                "量子芯片": 2,
                                "粒子宽带": 8,
                                "制造台MK.Ⅱ": 1
                            },
                            "isCanUse": true,
                            "step": "1*制造台MK.Ⅲ = 2*量子芯片 + 8*粒子宽带 + 1*制造台MK.Ⅱ"
                        }
                    ]
                },
                "电弧熔炉": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "电弧熔炉",
                            "material": "电弧熔炉",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "电弧熔炉": 1
                            },
                            "sourceList": {
                                "铁块": 4,
                                "电路板": 4,
                                "磁线圈": 2,
                                "石材": 2
                            },
                            "isCanUse": true,
                            "step": "1*电弧熔炉 = 4*铁块 + 4*电路板 + 2*磁线圈 + 2*石材"
                        }
                    ]
                },
                "位面熔炉": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "位面熔炉",
                            "material": "位面熔炉",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "位面熔炉": 1
                            },
                            "sourceList": {
                                "电弧熔炉": 1,
                                "框架材料": 5,
                                "位面过滤器": 4,
                                "单极磁石": 15
                            },
                            "isCanUse": true,
                            "step": "1*位面熔炉 = 1*电弧熔炉 + 5*框架材料 + 4*位面过滤器 + 15*单极磁石"
                        }
                    ]
                },
                "喷涂机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "喷涂机",
                            "material": "喷涂机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "喷涂机": 1
                            },
                            "sourceList": {
                                "钢材": 4,
                                "电浆激发器": 2,
                                "电路板": 2,
                                "微晶元件": 2
                            },
                            "isCanUse": true,
                            "step": "1*喷涂机 = 4*钢材 + 2*电浆激发器 + 2*电路板 + 2*微晶元件"
                        }
                    ]
                },
                "化工厂": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "化工厂",
                            "material": "化工厂",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "化工厂": 1
                            },
                            "sourceList": {
                                "钢材": 8,
                                "石材": 8,
                                "电路板": 2,
                                "玻璃": 8
                            },
                            "isCanUse": true,
                            "step": "1*化工厂 = 8*钢材 + 8*石材 + 2*电路板 + 8*玻璃"
                        }
                    ]
                },
                "研究站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "研究站",
                            "material": "研究站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "研究站": 1
                            },
                            "sourceList": {
                                "铁块": 8,
                                "玻璃": 4,
                                "电路板": 4,
                                "磁线圈": 4
                            },
                            "isCanUse": true,
                            "step": "1*研究站 = 8*铁块 + 4*玻璃 + 4*电路板 + 4*磁线圈"
                        }
                    ]
                },
                "配送运输机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "配送运输机",
                            "material": "配送运输机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "配送运输机": 1
                            },
                            "sourceList": {
                                "铁块": 2,
                                "处理器": 1,
                                "动力引擎": 1
                            },
                            "isCanUse": true,
                            "step": "1*配送运输机 = 2*铁块 + 1*处理器 + 1*动力引擎"
                        }
                    ]
                },
                "物流配送器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 8,
                            "recipe_name": "物流配送器",
                            "material": "物流配送器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "物流配送器": 1
                            },
                            "sourceList": {
                                "铁块": 8,
                                "处理器": 4,
                                "电浆激发器": 4
                            },
                            "isCanUse": true,
                            "step": "1*物流配送器 = 8*铁块 + 4*处理器 + 4*电浆激发器"
                        }
                    ]
                },
                "量子化工厂": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "量子化工厂",
                            "material": "量子化工厂",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "量子化工厂": 1
                            },
                            "sourceList": {
                                "化工厂": 1,
                                "钛化玻璃": 10,
                                "奇异物质": 3,
                                "量子芯片": 3
                            },
                            "isCanUse": true,
                            "step": "1*量子化工厂 = 1*化工厂 + 10*钛化玻璃 + 3*奇异物质 + 3*量子芯片"
                        }
                    ]
                },
                "燃烧单元": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "燃烧单元",
                            "material": "燃烧单元",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "燃烧单元": 1
                            },
                            "sourceList": {
                                "煤矿": 3
                            },
                            "isCanUse": true,
                            "step": "1*燃烧单元 = 3*煤矿"
                        }
                    ]
                },
                "爆破单元": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "爆破单元",
                            "material": "爆破单元",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "爆破单元": 2
                            },
                            "sourceList": {
                                "燃烧单元": 2,
                                "塑料": 2,
                                "硫酸": 1
                            },
                            "isCanUse": true,
                            "step": "2*爆破单元 = 2*燃烧单元 + 2*塑料 + 1*硫酸"
                        }
                    ]
                },
                "晶石爆破单元": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 24,
                            "recipe_name": "晶石爆破单元",
                            "material": "晶石爆破单元",
                            "equIndex": 0,
                            "equType": "化工设备",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "晶石爆破单元": 8
                            },
                            "sourceList": {
                                "爆破单元": 8,
                                "卡西米尔晶体": 1,
                                "晶格硅": 8
                            },
                            "isCanUse": true,
                            "step": "8*晶石爆破单元 = 8*爆破单元 + 1*卡西米尔晶体 + 8*晶格硅"
                        }
                    ]
                },
                "机枪弹箱": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1,
                            "recipe_name": "机枪弹箱",
                            "material": "机枪弹箱",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "机枪弹箱": 1
                            },
                            "sourceList": {
                                "铜块": 4
                            },
                            "isCanUse": true,
                            "step": "1*机枪弹箱 = 4*铜块"
                        }
                    ]
                },
                "钛化弹箱": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "钛化弹箱",
                            "material": "钛化弹箱",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "钛化弹箱": 1
                            },
                            "sourceList": {
                                "机枪弹箱": 1,
                                "钛块": 2
                            },
                            "isCanUse": true,
                            "step": "1*钛化弹箱 = 1*机枪弹箱 + 2*钛块"
                        }
                    ]
                },
                "超合金弹箱": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "超合金弹箱",
                            "material": "超合金弹箱",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "超合金弹箱": 1
                            },
                            "sourceList": {
                                "钛化弹箱": 1,
                                "钛合金": 2
                            },
                            "isCanUse": true,
                            "step": "1*超合金弹箱 = 1*钛化弹箱 + 2*钛合金"
                        }
                    ]
                },
                "导弹组": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "导弹组",
                            "material": "导弹组",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "导弹组": 1
                            },
                            "sourceList": {
                                "铜块": 6,
                                "电路板": 3,
                                "燃烧单元": 2,
                                "动力引擎": 1
                            },
                            "isCanUse": true,
                            "step": "1*导弹组 = 6*铜块 + 3*电路板 + 2*燃烧单元 + 1*动力引擎"
                        }
                    ]
                },
                "超音速导弹组": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "超音速导弹组",
                            "material": "超音速导弹组",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "超音速导弹组": 2
                            },
                            "sourceList": {
                                "导弹组": 2,
                                "处理器": 4,
                                "爆破单元": 4,
                                "推进器": 2
                            },
                            "isCanUse": true,
                            "step": "1*超音速导弹组 = 2*导弹组 + 4*处理器 + 4*爆破单元 + 2*推进器"
                        }
                    ]
                },
                "引力导弹组": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "引力导弹组",
                            "material": "引力导弹组",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "引力导弹组": 3
                            },
                            "sourceList": {
                                "超音速导弹组": 3,
                                "晶石爆破单元": 6,
                                "奇异物质": 3
                            },
                            "isCanUse": true,
                            "step": "3*引力导弹组 = 3*超音速导弹组 + 6*晶石爆破单元 + 3*奇异物质"
                        }
                    ]
                },
                "等离子胶囊": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "等离子胶囊",
                            "material": "等离子胶囊",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "等离子胶囊": 1
                            },
                            "sourceList": {
                                "石墨烯": 1,
                                "磁铁": 2,
                                "重氢": 10
                            },
                            "isCanUse": true,
                            "step": "1*等离子胶囊 = 1*石墨烯 + 2*磁铁 + 10*重氢"
                        }
                    ]
                },
                "反物质胶囊": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "反物质胶囊",
                            "material": "反物质胶囊",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "反物质胶囊": 1
                            },
                            "sourceList": {
                                "等离子胶囊": 1,
                                "粒子容器": 1,
                                "氢": 10,
                                "反物质": 10
                            },
                            "isCanUse": true,
                            "step": "1*反物质胶囊 = 1*等离子胶囊 + 1*粒子容器 + 10*氢 + 10*反物质"
                        }
                    ]
                },
                "炮弹组": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 1.5,
                            "recipe_name": "炮弹组",
                            "material": "炮弹组",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "炮弹组": 1
                            },
                            "sourceList": {
                                "铜块": 9,
                                "燃烧单元": 2
                            },
                            "isCanUse": true,
                            "step": "1*炮弹组 = 1*铜块 + 1*燃烧单元"
                        }
                    ]
                },
                "高爆炮弹组": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "高爆炮弹组",
                            "material": "高爆炮弹组",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "高爆炮弹组": 1
                            },
                            "sourceList": {
                                "炮弹组": 1,
                                "钛块": 6,
                                "爆破单元": 2
                            },
                            "isCanUse": true,
                            "step": "1*高爆炮弹组 = 1*炮弹组 + 6*钛块 + 2*爆破单元"
                        }
                    ]
                },
                "晶石炮弹组": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "晶石炮弹组",
                            "material": "晶石炮弹组",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "晶石炮弹组": 1
                            },
                            "sourceList": {
                                "高爆炮弹组": 1,
                                "钛合金": 3,
                                "晶石爆破单元": 2
                            },
                            "isCanUse": true,
                            "step": "1*晶石炮弹组 = 1*高爆炮弹组 + 3*钛合金 + 2*晶石爆破单元"
                        }
                    ]
                },
                "原型机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 2,
                            "recipe_name": "原型机",
                            "material": "原型机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "原型机": 1
                            },
                            "sourceList": {
                                "铁块": 8,
                                "动力引擎": 2,
                                "电路板": 4,
                                "电浆激发器": 2
                            },
                            "isCanUse": true,
                            "step": "1*原型机 = 8*铁块 + 2*动力引擎 + 4*电路板 + 2*电浆激发器"
                        }
                    ]
                },
                "精准无人机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "精准无人机",
                            "material": "精准无人机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "精准无人机": 1
                            },
                            "sourceList": {
                                "原型机": 1,
                                "电磁涡轮": 2,
                                "电路板": 4,
                                "光子合并器": 2
                            },
                            "isCanUse": true,
                            "step": "1*精准无人机 = 1*原型机 + 2*电磁涡轮 + 4*电路板 + 2*光子合并器"
                        }
                    ]
                },
                "攻击无人机": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "攻击无人机",
                            "material": "攻击无人机",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "攻击无人机": 1
                            },
                            "sourceList": {
                                "精准无人机": 1,
                                "电磁涡轮": 2,
                                "处理器": 1,
                                "粒子容器": 2
                            },
                            "isCanUse": true,
                            "step": "1*攻击无人机 = 1*精准无人机 + 2*电磁涡轮 + 1*处理器 + 2*粒子容器"
                        }
                    ]
                },
                "护卫舰": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "护卫舰",
                            "material": "护卫舰",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "护卫舰": 1
                            },
                            "sourceList": {
                                "钛合金": 5,
                                "加力推进器": 1,
                                "处理器": 2,
                                "卡西米尔晶体": 1
                            },
                            "isCanUse": true,
                            "step": "1*护卫舰 = 5*钛合金 + 1*加力推进器 + 2*处理器 + 1*卡西米尔晶体"
                        }
                    ]
                },
                "驱逐舰": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 15,
                            "recipe_name": "驱逐舰",
                            "material": "驱逐舰",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "驱逐舰": 1
                            },
                            "sourceList": {
                                "框架材料": 20,
                                "加力推进器": 5,
                                "处理器": 5,
                                "奇异物质": 2
                            },
                            "isCanUse": true,
                            "step": "1*驱逐舰 = 20*框架材料 + 5*加力推进器 + 5*处理器 + 2*奇异物质"
                        }
                    ]
                },
                "奇异湮灭燃料棒": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 32,
                            "recipe_name": "奇异湮灭燃料棒",
                            "material": "奇异湮灭燃料棒",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "奇异湮灭燃料棒": 1
                            },
                            "sourceList": {
                                "反物质燃料棒": 8,
                                "核心素": 1,
                                "奇异物质": 2,
                                "框架材料": 1
                            },
                            "isCanUse": true,
                            "step": "1*奇异湮灭燃料棒 = 8*反物质燃料棒 + 1*核心素 + 2*奇异物质 + 1*框架材料"
                        }
                    ]
                },
                "动力引擎": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 3,
                            "recipe_name": "动力引擎",
                            "material": "动力引擎",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "动力引擎": 1
                            },
                            "sourceList": {
                                "磁线圈": 1,
                                "铜块": 2
                            },
                            "isCanUse": true,
                            "step": "1*动力引擎 = 1*磁线圈 + 2*铜块"
                        }
                    ]
                },
                "重组式制造台": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "重组式制造台",
                            "material": "重组式制造台",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "重组式制造台": 1
                            },
                            "sourceList": {
                                "制造台MK.Ⅲ": 1,
                                "物质重组器": 10,
                                "能量碎片": 30,
                                "量子芯片": 4
                            },
                            "isCanUse": true,
                            "step": "1*重组式制造台 = 1*制造台MK.Ⅲ + 10*物质重组器 + 30*能量碎片 + 4*量子芯片"
                        }
                    ]
                },
                "负熵熔炉": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "负熵熔炉",
                            "material": "负熵熔炉",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "负熵熔炉": 1
                            },
                            "sourceList": {
                                "位面熔炉": 1,
                                "物质重组器": 10,
                                "能量碎片": 30,
                                "量子芯片": 4
                            },
                            "isCanUse": true,
                            "step": "1*负熵熔炉 = 1*位面熔炉 + 10*物质重组器 + 30*能量碎片 + 4*量子芯片"
                        }
                    ]
                },
                "高斯机枪塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "高斯机枪塔",
                            "material": "高斯机枪塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "高斯机枪塔": 1
                            },
                            "sourceList": {
                                "铁块": 8,
                                "齿轮": 8,
                                "电路板": 2,
                                "磁线圈": 4
                            },
                            "isCanUse": true,
                            "step": "1*高斯机枪塔 = 8*铁块 + 8*齿轮 + 2*电路板 + 4*磁线圈"
                        }
                    ]
                },
                "导弹防御塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "导弹防御塔",
                            "material": "导弹防御塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "导弹防御塔": 1
                            },
                            "sourceList": {
                                "钢材": 8,
                                "电动机": 6,
                                "电路板": 12,
                                "动力引擎": 6
                            },
                            "isCanUse": true,
                            "step": "1*导弹防御塔 = 8*钢材 + 6*电动机 + 12*电路板 + 6*动力引擎"
                        }
                    ]
                },
                "聚爆加农炮": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 5,
                            "recipe_name": "聚爆加农炮",
                            "material": "聚爆加农炮",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "聚爆加农炮": 1
                            },
                            "sourceList": {
                                "钢材": 10,
                                "电动机": 8,
                                "电路板": 10,
                                "超级磁场环": 2
                            },
                            "isCanUse": true,
                            "step": "1*聚爆加农炮 = 10*钢材 + 8*电动机 + 10*电路板 + 2*超级磁场环"
                        }
                    ]
                },
                "高频激光塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "高频激光塔",
                            "material": "高频激光塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "高频激光塔": 1
                            },
                            "sourceList": {
                                "钢材": 6,
                                "电浆激发器": 6,
                                "电路板": 6,
                                "光子合并器": 6
                            },
                            "isCanUse": true,
                            "step": "1*高频激光塔 = 6*钢材 + 6*电浆激发器 + 6*电路板 + 6*光子合并器"
                        }
                    ]
                },
                "磁化电浆炮": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "磁化电浆炮",
                            "material": "磁化电浆炮",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "磁化电浆炮": 1
                            },
                            "sourceList": {
                                "钛合金": 20,
                                "钛化玻璃": 10,
                                "超级磁场环": 10,
                                "电浆激发器": 5,
                                "处理器": 5
                            },
                            "isCanUse": true,
                            "step": "1*磁化电浆炮 = 20*钛合金 + 10*钛化玻璃 + 10*超级磁场环 + 5*电浆激发器 + 5*处理器"
                        }
                    ]
                },
                "战场分析基站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "战场分析基站",
                            "material": "战场分析基站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "战场分析基站": 1
                            },
                            "sourceList": {
                                "钢材": 12,
                                "电路板": 18,
                                "微晶元件": 6,
                                "动力引擎": 12
                            },
                            "isCanUse": true,
                            "step": "1*战场分析基站 = 12*钢材 + 18*电路板 + 6*微晶元件 + 12*动力引擎"
                        }
                    ]
                },
                "信号塔": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 6,
                            "recipe_name": "信号塔",
                            "material": "信号塔",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "信号塔": 1
                            },
                            "sourceList": {
                                "无线输电塔": 1,
                                "钢材": 12,
                                "晶格硅": 4
                            },
                            "isCanUse": true,
                            "step": "1*信号塔 = 1*无线输电塔 + 12*钢材 + 4*晶格硅"
                        }
                    ]
                },
                "行星护盾发生器": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 10,
                            "recipe_name": "行星护盾发生器",
                            "material": "行星护盾发生器",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "productList": {
                                "行星护盾发生器": 1
                            },
                            "sourceList": {
                                "钢材": 20,
                                "电磁涡轮": 20,
                                "超级磁场环": 5,
                                "粒子容器": 5
                            },
                            "isCanUse": true,
                            "step": "1*行星护盾发生器 = 20*钢材 + 20*电磁涡轮 + 5*超级磁场环 + 5*粒子容器"
                        }
                    ]
                },
                "自演化研究站": {
                    "useIndex": 0,
                    "data": [
                        {
                            "time": 4,
                            "recipe_name": "自演化研究站",
                            "material": "自演化研究站",
                            "equIndex": 0,
                            "equType": "制造台",
                            "增产剂": 0,
                            "增产剂效果": "无",
                            "onlySpeed": true,
                            "productList": {
                                "自演化研究站": 1
                            },
                            "sourceList": {
                                "研究站": 1,
                                "硅基神经元": 10,
                                "黑雾矩阵": 20,
                                "量子芯片": 4
                            },
                            "isCanUse": true,
                            "step": "1*自演化研究站 = 1*研究站 + 10*硅基神经元 + 20*黑雾矩阵 + 4*量子芯片"
                        }
                    ]
                }
            }
        };

        saveDataToLocalStorage();
    }
} catch (err) {
    console.error(err);
}

// 2024年1月18日添加增产剂的限制
const SP_BUFF_LIMIT = "buff_limit";
const buffLimit = localStorage.getItem(SP_BUFF_LIMIT);
if (!buffLimit) {
    console.log("buffLimit fun start");
    // 只能加速的物品
    let onlySpeedBuff = [
        "高能石墨", "精炼油", "反物质燃料棒", "奇异湮灭燃料棒", "反物质", "无线输电塔", "卫星配电站",
        "高速传送带", "极速传送带", "星际物流运输站", "轨道采集器", "高速分拣器", "极速分拣器", "量子化工厂", "位面熔炉",
        "负熵熔炉", "制造台MK.Ⅱ", "制造台MK.Ⅲ", "重组式制造台", "自演化研究站"
    ]

    for (let i = 0; i < onlySpeedBuff.length; i++) {
        const name = onlySpeedBuff[i];

        let recipeData = game_data["recipe_data"];
        for (let recipeDataKey in recipeData) {
            let dataList = recipeData[recipeDataKey]["data"];
            for (let dataListIndex in dataList) {
                let recipeItem = dataList[dataListIndex];
                let productList = recipeItem["productList"];
                if (productList.hasOwnProperty(name)) {
                    console.log("limit " + name);
                    recipeItem["onlySpeed"] = true;
                }

                // 重氢的情况处理
                if (recipeDataKey === "重氢") {
                    if (recipeItem["equType"] === "粒子对撞机") {
                        console.log("limit equType 粒子对撞机");
                        recipeItem["onlySpeed"] = true;
                    } else if (recipeItem["equType"] === "分馏设备") {
                        console.log("limit equType 分馏设备");
                        recipeItem["notBuff"] = true;
                    }
                }
            }
        }
    }

    saveDataToLocalStorage();
    localStorage.setItem(SP_BUFF_LIMIT, "true");
}