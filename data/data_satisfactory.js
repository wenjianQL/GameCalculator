// 游戏数据
let game_data = {
    "game_name": "SatisFactory",
    "translate": {
        "组装编导系统": "Assembly Director System",
        "自适应控制单元": "Adaptive Control Unit",
        "超级计算机": "Supercomputer",
        "自动线路": "Automatic Circuit",
        "电路板": "Printed Circuit Board",
        "计算机": "Computer",
        "重型模块化框架": "Heavy-duty Modular Frame",
        "定子": "Stator",
        "电缆": "Cable",
        "高速连接器": "High-speed Connector",
        "电线": "Wire",
        "转子": "Rotor",
        "铁棒": "Iron Rod",
        "螺丝": "Screw",
        "铜板": "Copper Plate",
        "钢管": "Steel Pipe",
        "重渣油": "Heavy Residue Oil",
        "聚合树脂": "Polymer Resin",
        "原油": "Crude Oil",
        "模块化框架": "Modular Frame",
        "钢筋混凝土梁": "Reinforced Concrete Beam",
        "橡胶": "Rubber",
        "混凝土": "Concrete",
        "智能护板": "Smart Guard Plate",
        "加强铁板": "Reinforced Iron Plate",
        "塑料": "Plastic",
        "铀燃料棒": "Uranium Fuel Rod",
        "铀核心": "Uranium Core",
        "电磁控制杆": "Electromagnetic Control Rod",
        "晶体振荡器": "Crystal Oscillator",
        "信标": "Beacon",
        "硫酸": "Sulfuric Acid",
        "铀": "Uranium",
        "硫": "Sulfur",
        "石英砂": "Quartz Sand",
        "快速线": "Rapid Line",
        "油焦": "Petroleum Coke",
        "氧化铝溶液": "Aluminum Oxide Solution",
        "铝土矿": "Bauxite",
        "水": "Water",
        "压力转换立方体": "Pressure Conversion Cube",
        "熔合模块化框架": "Fused Modular Frame",
        "无线电控制单元": "Radio Control Unit",
        "钢梁": "Steel Beam",
        "铁板": "Iron Plate",
        "硝酸": "Nitric Acid",
        "氮气": "Nitrogen Gas",
        "燃料": "Fuel",
        "散热器": "Radiator",
        "石英晶体": "Quartz Crystal",
        "铝制外壳": "Aluminum Housing",
        "涡轮燃料": "Turbine Fuel",
        "压缩煤": "Compressed Coal",
        "涡轮电机": "Turbine Motor",
        "电机": "Electric Motor",
        "瓶装氮气": "Bottled Nitrogen Gas",
        "冷却系统": "Cooling System",
        "铜粉": "Copper Powder",
        "铜锭": "Copper Ingot",
        "铜矿": "Copper Ore",
        "铁矿": "Iron Ore",
        "铁锭": "Iron Ingot",
        "钢锭": "Steel Ingot",
        "原石英": "Raw Quartz",
        "石灰石": "Limestone",
        "镀铝板": "Aluminum-coated Plate",
        "铝锭": "Aluminum Ingot",
        "热推进火箭": "Thermal Propulsion Rocket",
        "模块化引擎": "Modular Engine",
        "钦锭": "Tin Ingot",
        "钦矿": "Tin Ore",
        "贫铀": "Depleted Uranium",
        "铀废料": "Uranium Waste",
        "铝块": "Aluminum Block",
        "煤": "Coal",
        "空瓶": "Empty Bottle",
        "空罐": "Empty Can",
        "AI限制器": "AI Limiter",
        "核子团": "Nucleus Cluster",
        "多功能框架": "Multi-purpose Frame",
        "电池": "Battery",
        "磁场发生器": "Magnetic Field Generator",
        "钚丸": "Plutonium Pellet",
        "钚燃料棒": "Plutonium Fuel Rod",
        "钚核心": "Plutonium Core",
        "构造器": "Constructor",
        "组装器": "Assembler",
        "制造器": "Manufacturer",
        "冶炼器": "Smelter",
        "铸造器": "Foundry",
        "精炼厂": "Oil Refinery"
    },
    "select_dialog_data": {
        "金属锭": ["铁锭", "铜锭", "钦锭", "钢锭", "铝锭"],
        "矿物": ["混凝土", "石英晶体", "石英砂", "铜粉", "聚合树脂", "油焦", "铝块"],
        "液体": ["重渣油", "燃料", "液态生物燃料", "涡轮燃料", "氧化铝溶液", "硫酸", "硝酸"],
        "标准零件": ["铁棒", "螺丝", "铁板", "加强铁板", "铜板", "镀铝板", "铝制外壳", "钢管", "钢梁", "钢筋混凝土梁", "模块化框架", "重型模块化框架", "熔合模块化框架", "布料", "塑料", "橡胶"],
        "工业零件": ["转子", "定子", "电池", "电机", "散热器", "冷却系统", "涡轮电机"],
        "电子产品": ["电线", "电缆", "快速线", "电路板", "AI限制器", "高速连接器"],
        "通讯": ["计算机", "超级计算机", "无线电控制单元", "晶体振荡器"],
        "容器": ["空罐", "空瓶", "压力转换立方体"],
        "燃料": ["铀燃料棒", "钚燃料棒"],
        "核工业品": ["电磁控制杆", "贫铀", "钚丸"],
        "特殊": ["智能护板", "多功能框架", "自动线路", "模块化引擎", "自适应控制单元", "组装编导系统", "磁场发生器", "热推进火箭", "核子团"],
    },
    "recipe_data": {
        "组装编导系统": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "组装编导系统": 0.75
                    },
                    "sourceList": {
                        "自适应控制单元": 1.5,
                        "超级计算机": 0.75
                    }
                }
            ]
        },
        "自适应控制单元": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "自动线路": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "自动线路": 2.5
                    },
                    "sourceList": {
                        "定子": 2.5,
                        "电缆": 50.0
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "自动线路": 7.5
                    },
                    "sourceList": {
                        "定子": 3.75,
                        "高速连接器": 1.875,
                        "电线": 75.0
                    }
                }
            ]
        },
        "转子": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": 4.0
                    },
                    "sourceList": {
                        "铁棒": 20.0,
                        "螺丝": 100.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": 11.25
                    },
                    "sourceList": {
                        "铜板": 22.5,
                        "螺丝": 195.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": 5.0
                    },
                    "sourceList": {
                        "钢管": 10.0,
                        "电线": 30.0
                    }
                }
            ]
        },
        "重渣油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": 10.0,
                        "塑料": 20.0
                    },
                    "sourceList": {
                        "原油": 30.0
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": 20.0,
                        "橡胶": 20.0
                    },
                    "sourceList": {
                        "原油": 30.0
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": 20.0,
                        "聚合树脂": 130.0
                    },
                    "sourceList": {
                        "原油": 60.0
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": 40.0,
                        "聚合树脂": 20.0
                    },
                    "sourceList": {
                        "原油": 30.0
                    }
                }
            ]
        },
        "重型模块化框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                },
                {
                    "time": 60,
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
                    }
                },
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "智能护板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "智能护板": 2.0
                    },
                    "sourceList": {
                        "加强铁板": 2.0,
                        "转子": 2.0
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "智能护板": 5.0
                    },
                    "sourceList": {
                        "塑料": 7.5,
                        "加强铁板": 2.5,
                        "转子": 2.5
                    }
                }
            ]
        },
        "铀燃料棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "铀燃料棒": 0.4
                    },
                    "sourceList": {
                        "铀核心": 20.0,
                        "电磁控制杆": 2.0,
                        "钢筋混凝土梁": 1.2
                    }
                },
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "铀核心": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铀核心": 25.0,
                        "硫酸": 10.0
                    },
                    "sourceList": {
                        "铀": 50.0,
                        "硫酸": 40.0,
                        "混凝土": 15.0
                    }
                },
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "油焦": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "油焦": 120.0
                    },
                    "sourceList": {
                        "重渣油": 40.0
                    }
                }
            ]
        },
        "氧化铝溶液": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "氧化铝溶液": 240.0
                    },
                    "sourceList": {
                        "铝土矿": 200.0,
                        "水": 200.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "氧化铝溶液": 120.0,
                        "石英砂": 50.0
                    },
                    "sourceList": {
                        "铝土矿": 120.0,
                        "水": 180.0
                    }
                }
            ]
        },
        "压力转换立方体": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "压力转换立方体": 1.0
                    },
                    "sourceList": {
                        "熔合模块化框架": 1.0,
                        "无线电控制单元": 2.0
                    }
                }
            ]
        },
        "信标": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "信标": 10.0
                    },
                    "sourceList": {
                        "晶体振荡器": 0.5,
                        "钢管": 8.0,
                        "钢梁": 2.0
                    }
                }
            ]
        },
        "硝酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "硝酸": 30.0
                    },
                    "sourceList": {
                        "氮气": 120.0,
                        "铁板": 10.0,
                        "水": 30.0
                    }
                }
            ]
        },
        "橡胶": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": 20.0,
                        "重渣油": 20.0
                    },
                    "sourceList": {
                        "原油": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": 20.0
                    },
                    "sourceList": {
                        "聚合树脂": 40.0,
                        "水": 40.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": 60.0
                    },
                    "sourceList": {
                        "燃料": 30.0,
                        "塑料": 30.0
                    }
                }
            ]
        },
        "无线电控制单元": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": 2.5
                    },
                    "sourceList": {
                        "铝制外壳": 40.0,
                        "晶体振荡器": 1.25,
                        "计算机": 1.25
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": 3.75
                    },
                    "sourceList": {
                        "散热器": 15.0,
                        "高速连接器": 7.5,
                        "石英晶体": 45.0
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": 4.5
                    },
                    "sourceList": {
                        "晶体振荡器": 1.5,
                        "电路板": 15.0,
                        "橡胶": 45.0,
                        "铝制外壳": 90.0
                    }
                }
            ]
        },
        "涡轮燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": 18.75
                    },
                    "sourceList": {
                        "燃料": 22.5,
                        "压缩煤": 15.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": 30.0
                    },
                    "sourceList": {
                        "重渣油": 37.5,
                        "压缩煤": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": 45.0
                    },
                    "sourceList": {
                        "燃料": 15.0,
                        "重渣油": 30.0,
                        "硫": 22.5,
                        "油焦": 22.5
                    }
                }
            ]
        },
        "涡轮电机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                },{
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": 3.75
                    },
                    "sourceList": {
                        "电机": 7.5,
                        "压力转换立方体": 1.875,
                        "定子": 15.0,
                        "瓶装氮气": 45.0
                    }
                },
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "铜粉": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铜粉": 50.0
                    },
                    "sourceList": {
                        "铜锭": 300.0
                    }
                }
            ]
        },
        "铜锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": 30.0
                    },
                    "sourceList": {
                        "铜矿": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": 100.0
                    },
                    "sourceList": {
                        "铜矿": 50.0,
                        "铁矿": 25.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": 37.5
                    },
                    "sourceList": {
                        "铜矿": 15.0,
                        "水": 10.0
                    }
                }
            ]
        },
        "铜板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铜板": 10.0
                    },
                    "sourceList": {
                        "铜锭": 20.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铜板": 22.5
                    },
                    "sourceList": {
                        "铜锭": 22.5,
                        "水": 22.5
                    }
                }
            ]
        },
        "铁锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": 30.0
                    },
                    "sourceList": {
                        "铁矿": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": 50.0
                    },
                    "sourceList": {
                        "铁矿": 20.0,
                        "铜矿": 20.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": 65.0
                    },
                    "sourceList": {
                        "铁矿": 35.0,
                        "水": 20.0
                    }
                }
            ]
        },
        "铁棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁棒": 15.0
                    },
                    "sourceList": {
                        "铁锭": 15.0
                    }
                },
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁棒": 48.0
                    },
                    "sourceList": {
                        "钢锭": 12.0
                    }
                }
            ]
        },
        "铁板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": 20.0
                    },
                    "sourceList": {
                        "铁锭": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": 45.0
                    },
                    "sourceList": {
                        "钢锭": 7.5,
                        "塑料": 5.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": 75.0
                    },
                    "sourceList": {
                        "铁锭": 50.0,
                        "塑料": 10.0
                    }
                }
            ]
        },
        "塑料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": 20.0,
                        "重渣油": 10.0
                    },
                    "sourceList": {
                        "原油": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": 20.0
                    },
                    "sourceList": {
                        "聚合树脂": 60.0,
                        "水": 20.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": 60.0
                    },
                    "sourceList": {
                        "燃料": 30.0,
                        "橡胶": 30.0
                    }
                }
            ]
        },
        "石英砂": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": 37.5
                    },
                    "sourceList": {
                        "原石英": 22.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": 26.25
                    },
                    "sourceList": {
                        "原石英": 11.25,
                        "石灰石": 18.75
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": 50,
                        "氧化铝溶液": 120
                    },
                    "sourceList": {
                        "铝土矿": 120,
                        "水": 180
                    }
                }
            ]
        },
        "石英晶体": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": 22.5
                    },
                    "sourceList": {
                        "原石英": 37.5
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": 52.5
                    },
                    "sourceList": {
                        "原石英": 67.5,
                        "水": 37.5
                    }
                }
            ]
        },
        "散热器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "散热器": 7.5
                    },
                    "sourceList": {
                        "镀铝板": 37.5,
                        "铜板": 22.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "散热器": 10.0
                    },
                    "sourceList": {
                        "铝制外壳": 30.0,
                        "橡胶": 30.0
                    }
                }
            ]
        },
        "熔合模块化框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "熔合模块化框架": 1.5
                    },
                    "sourceList": {
                        "重型模块化框架": 1.5,
                        "铝制外壳": 75.0,
                        "氮气": 37.5
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "熔合模块化框架": 3.0
                    },
                    "sourceList": {
                        "重型模块化框架": 3.0,
                        "铝锭": 150.0,
                        "硝酸": 24.0,
                        "燃料": 30.0
                    }
                }
            ]
        },
        "热推进火箭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "燃料": 40.0,
                        "聚合树脂": 30.0
                    },
                    "sourceList": {
                        "原油": 60.0
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "燃料": 40.0
                    },
                    "sourceList": {
                        "重渣油": 60.0
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "燃料": 100.0
                    },
                    "sourceList": {
                        "重渣油": 50.0,
                        "水": 100.0
                    }
                }
            ]
        },
        "钦锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": 15.0
                    },
                    "sourceList": {
                        "钦矿": 45.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": 12.0
                    },
                    "sourceList": {
                        "钦矿": 24.0,
                        "水": 24.0
                    }
                }
            ]
        },
        "贫铀": {
            "useIndex": 0,
            "data": [
                ,
                {
                    "time": 60,
                    "equType": "搅拌器",
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
                    }
                }, {
                    "time": 60,
                    "equType": "搅拌器",
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
                    }
                }
            ]
        },
        "模块化引擎": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "模块化引擎": 1.0
                    },
                    "sourceList": {
                        "智能护板": 2.0,
                        "橡胶": 15.0,
                        "电机": 2.0
                    }
                }
            ]
        },
        "模块化框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": 2.0
                    },
                    "sourceList": {
                        "加强铁板": 3.0,
                        "铁棒": 12.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": 3.0
                    },
                    "sourceList": {
                        "加强铁板": 2.0,
                        "钢管": 10.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": 5.0
                    },
                    "sourceList": {
                        "加强铁板": 7.5,
                        "螺丝": 140.0
                    }
                }
            ]
        },
        "铝制外壳": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铝制外壳": 60.0
                    },
                    "sourceList": {
                        "铝锭": 90.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "铝制外壳": 112.5
                    },
                    "sourceList": {
                        "铝锭": 150.0,
                        "铜锭": 75.0
                    }
                }
            ]
        },
        "铝块": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": 360.0,
                        "水": 120.0
                    },
                    "sourceList": {
                        "氧化铝溶液": 240.0,
                        "煤": 120.0
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
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
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": 300.0,
                        "水": 105.0
                    },
                    "sourceList": {
                        "氧化铝溶液": 180.0,
                        "油焦": 60.0
                    }
                }
            ]
        },
        "铝锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "铝锭": 30.0
                    },
                    "sourceList": {
                        "铝块": 60.0
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铝锭": 60.0
                    },
                    "sourceList": {
                        "铝块": 90.0,
                        "石英砂": 75.0
                    }
                }
            ]
        },
        "螺丝": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "螺丝": 40.0
                    },
                    "sourceList": {
                        "铁棒": 10.0
                    }
                },
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "螺丝": 50.0
                    },
                    "sourceList": {
                        "铁锭": 12.5
                    }
                },
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "螺丝": 260.0
                    },
                    "sourceList": {
                        "钢梁": 5.0
                    }
                }
            ]
        },
        "硫酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "硫酸": 50.0
                    },
                    "sourceList": {
                        "硫": 50.0,
                        "水": 50.0
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "硫酸": 10.0,
                        "铀核芯": 25.0
                    },
                    "sourceList": {
                        "铀": 50.0,
                        "混凝土": 15.0,
                        "硫酸": 40.0,
                    }
                }
            ]
        },
        "冷却系统": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "冷却系统": 6.0
                    },
                    "sourceList": {
                        "散热器": 12.0,
                        "氮气": 150.0,
                        "橡胶": 12.0,
                        "水": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "冷却系统": 3.75
                    },
                    "sourceList": {
                        "散热器": 9.375,
                        "氮气": 45.0,
                        "电机": 1.875
                    }
                },
            ]
        },
        "快速线": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "快速线": 60.0
                    },
                    "sourceList": {
                        "钦锭": 12.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "快速线": 90.0
                    },
                    "sourceList": {
                        "钦锭": 7.5,
                        "铜锭": 37.5
                    }
                }
            ]
        },
        "空瓶": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": 60.0
                    },
                    "sourceList": {
                        "铝锭": 60.0
                    }
                }
            ]
        },
        "空罐": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": 60.0
                    },
                    "sourceList": {
                        "塑料": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": 40.0
                    },
                    "sourceList": {
                        "钢锭": 60.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": 60.0
                    },
                    "sourceList": {
                        "铁板": 30.0,
                        "铜板": 15.0
                    }
                }
            ]
        },
        "聚合树脂": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": 30.0,
                        "燃料": 40.0
                    },
                    "sourceList": {
                        "原油": 60.0
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": 130.0,
                        "重渣油": 20.0
                    },
                    "sourceList": {
                        "原油": 60.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": 20.0,
                        "重渣油": 40.0
                    },
                    "sourceList": {
                        "原油": 30.0
                    }
                }
            ]
        },
        "晶体振荡器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "晶体振荡器": 1.0
                    },
                    "sourceList": {
                        "石英晶体": 18.0,
                        "电缆": 14.0,
                        "加强铁板": 2.5
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "晶体振荡器": 1.875
                    },
                    "sourceList": {
                        "石英晶体": 18.75,
                        "橡胶": 13.125,
                        "AI限制器": 1.875
                    }
                }
            ]
        },
        "加强铁板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": 5.0
                    },
                    "sourceList": {
                        "铁板": 30.0,
                        "螺丝": 60.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": 15.0
                    },
                    "sourceList": {
                        "铁板": 90.0,
                        "螺丝": 250.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": 5.63
                    },
                    "sourceList": {
                        "铁板": 18.75,
                        "电线": 37.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": 3.75
                    },
                    "sourceList": {
                        "铁板": 11.25,
                        "橡胶": 3.75
                    }
                }
            ]
        },
        "计算机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "计算机": 3.75
                    },
                    "sourceList": {
                        "电路板": 26.25,
                        "快速线": 105.0,
                        "橡胶": 45.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "计算机": 2.8125
                    },
                    "sourceList": {
                        "电路板": 7.5,
                        "晶体振荡器": 2.8125
                    }
                }
            ]
        },
        "混凝土": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": 15.0
                    },
                    "sourceList": {
                        "石灰石": 45.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": 25.0
                    },
                    "sourceList": {
                        "石灰石": 30.0,
                        "石英砂": 7.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": 45.0
                    },
                    "sourceList": {
                        "石灰石": 50.0,
                        "橡胶": 10.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": 80.0
                    },
                    "sourceList": {
                        "石灰石": 120.0,
                        "水": 100.0
                    }
                }
            ]
        },
        "核子团": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "核子团": 0.5
                    },
                    "sourceList": {
                        "压力转换立方体": 0.5,
                        "铜粉": 100.0
                    }
                }
            ]
        },
        "高速连接器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "高速连接器": 3.75
                    },
                    "sourceList": {
                        "电路板": 3.75,
                        "电缆": 37.5,
                        "快速线": 210.0
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "高速连接器": 3.0
                    },
                    "sourceList": {
                        "电路板": 3.0,
                        "石英砂": 37.5,
                        "快速线": 90.0
                    }
                }
            ]
        },
        "钢梁": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢梁": 15.0
                    },
                    "sourceList": {
                        "钢锭": 60.0
                    }
                }
            ]
        },
        "钢筋混凝土梁": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钢筋混凝土梁": 6.0
                    },
                    "sourceList": {
                        "钢梁": 24.0,
                        "混凝土": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钢筋混凝土梁": 4.0
                    },
                    "sourceList": {
                        "钢管": 28.0,
                        "混凝土": 20.0
                    }
                }
            ]
        },
        "钢管": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢管": 20.0
                    },
                    "sourceList": {
                        "钢锭": 30.0
                    }
                }
            ]
        },
        "钢锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": 45.0
                    },
                    "sourceList": {
                        "铁矿": 45.0,
                        "煤": 45.0
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": 37.5
                    },
                    "sourceList": {
                        "铁矿": 22.5,
                        "压缩煤": 11.25
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": 60.0
                    },
                    "sourceList": {
                        "铁锭": 40.0,
                        "煤": 40.0
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": 100.0
                    },
                    "sourceList": {
                        "铁矿": 75.0,
                        "油焦": 75.0
                    }
                }
            ]
        },
        "多功能框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "多功能框架": 5.0
                    },
                    "sourceList": {
                        "模块化框架": 2.5,
                        "钢梁": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "多功能框架": 7.5
                    },
                    "sourceList": {
                        "模块化框架": 3.75,
                        "钢梁": 22.5,
                        "橡胶": 30.0
                    }
                }
            ]
        },
        "镀铝板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "镀铝板": 30.0
                    },
                    "sourceList": {
                        "铝锭": 30.0,
                        "铜锭": 10.0
                    }
                }
            ]
        },
        "定子": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "定子": 5.0
                    },
                    "sourceList": {
                        "钢管": 15.0,
                        "电线": 40.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "定子": 8.0
                    },
                    "sourceList": {
                        "钢管": 16.0,
                        "快速线": 60.0
                    }
                }
            ]
        },
        "电线": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电线": 30.0
                    },
                    "sourceList": {
                        "铜锭": 15.0
                    }
                },
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电线": 22.5
                    },
                    "sourceList": {
                        "铁锭": 12.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电线": 90.0
                    },
                    "sourceList": {
                        "铜锭": 12.0,
                        "钦锭": 3.0
                    }
                },
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电线": 120.0
                    },
                    "sourceList": {
                        "钦锭": 15.0
                    }
                }
            ]
        },
        "电路板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": 7.5
                    },
                    "sourceList": {
                        "铜板": 15.0,
                        "塑料": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": 8.75
                    },
                    "sourceList": {
                        "塑料": 12.5,
                        "快速线": 37.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": 12.5
                    },
                    "sourceList": {
                        "铜板": 27.5,
                        "石英砂": 27.5
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": 5.0
                    },
                    "sourceList": {
                        "橡胶": 30.0,
                        "油焦": 45.0
                    }
                }
            ]
        },
        "电缆": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": 30.0
                    },
                    "sourceList": {
                        "电线": 60.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": 27.5
                    },
                    "sourceList": {
                        "快速线": 7.5,
                        "橡胶": 5.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": 100.0
                    },
                    "sourceList": {
                        "电线": 45.0,
                        "橡胶": 30.0
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "电缆": 67.5
                    },
                    "sourceList": {
                        "电线": 37.5,
                        "重渣油": 15.0
                    }
                }
            ]
        },
        "电机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电机": 5.0
                    },
                    "sourceList": {
                        "转子": 10.0,
                        "定子": 10.0
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "电机": 7.5
                    },
                    "sourceList": {
                        "转子": 3.75,
                        "定子": 3.75,
                        "晶体振荡器": 1.25
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电机": 7.5
                    },
                    "sourceList": {
                        "转子": 7.5,
                        "电磁控制杆": 3.75
                    }
                }
            ]
        },
        "电磁控制杆": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电磁控制杆": 4.0
                    },
                    "sourceList": {
                        "定子": 6.0,
                        "AI限制器": 4.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电磁控制杆": 8.0
                    },
                    "sourceList": {
                        "定子": 8.0,
                        "高速连接器": 4.0
                    }
                }
            ]
        },
        "电池": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "电池": 20.0,
                        "水": 30.0
                    },
                    "sourceList": {
                        "氧化铝溶液": 40.0,
                        "硫酸": 50.0,
                        "铝制外壳": 20.0
                    }
                },
                {
                    "time": 60,
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
                    }
                }
            ]
        },
        "磁场发生器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "磁场发生器": 1.0
                    },
                    "sourceList": {
                        "多功能框架": 2.5,
                        "电磁控制杆": 1.0,
                        "电池": 5.0
                    }
                }
            ]
        },
        "超级计算机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": 1.875
                    },
                    "sourceList": {
                        "计算机": 3.75,
                        "AI限制器": 3.75,
                        "高速连接器": 5.625,
                        "塑料": 52.5
                    }
                },
                {
                    "time": 60,
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
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": 3.0
                    },
                    "sourceList": {
                        "无线电控制单元": 9.0,
                        "冷却系统": 9.0
                    }
                }
            ]
        },
        "钚丸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钚丸": 30.0
                    },
                    "sourceList": {
                        "贫铀": 100.0,
                        "铀废料": 25.0
                    }
                }
            ]
        },
        "钚燃料棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钚燃料棒": 0.5
                    },
                    "sourceList": {
                        "压力转换立方体": 0.5,
                        "钚核心": 10.0
                    }
                }
            ]
        },
        "钚核心": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钚核心": 10.0
                    },
                    "sourceList": {
                        "贫铀": 75.0,
                        "铝制外壳": 10.0
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钚核心": 5.0
                    },
                    "sourceList": {
                        "钚丸": 10.0,
                        "混凝土": 20.0
                    }
                }
            ]
        },
        "AI限制器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "AI限制器": 5.0
                    },
                    "sourceList": {
                        "铜板": 25.0,
                        "快速线": 100.0
                    }
                }
            ]
        },
        "铁矿": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铁矿": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "铜矿": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铜矿": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "石灰石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "石灰石": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "钦矿石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "钦矿石": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "煤": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "煤": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "原石英": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "原石英": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "硫": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "硫": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "铝土矿": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铝土矿": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "铀": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铀": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "S.A.M. 矿石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "S.A.M. 矿石": 60.0
                    },
                    "sourceList": {}
                }
            ]
        },
        "液态生物燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "液态生物燃料": 60.0
                    },
                    "sourceList": {
                        "固体生物燃料": 90,
                        "水": 45
                    }
                }
            ]
        },
        "布料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "布料": 15.0
                    },
                    "sourceList": {
                        "菌丝体": 15,
                        "生物质": 75
                    }
                }, {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "布料": 30.0
                    },
                    "sourceList": {
                        "聚合树脂": 30,
                        "水": 30
                    }
                }
            ]
        },
        "瓶装氮气": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "罐装机",
                    "equIndex": 0,
                    "productList": {
                        "布料": 60.0
                    },
                    "sourceList": {
                        "氮气": 240,
                        "空瓶": 60
                    }
                }
            ]
        },
        "铀核芯": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铀核芯": 25.0,
                        "硫酸": 10.0
                    },
                    "sourceList": {
                        "铀": 50,
                        "硫酸": 40,
                        "混凝土": 15
                    }
                }, {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铀核芯": 20.0
                    },
                    "sourceList": {
                        "铀": 25,
                        "石英砂": 15,
                        "硫": 25,
                        "快速线": 75,
                    }
                }
            ]
        },
        "钚核芯": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钚核芯": 5.0
                    },
                    "sourceList": {
                        "钚丸": 10,
                        "混凝土": 20
                    }
                }, {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钚核芯": 10.0
                    },
                    "sourceList": {
                        "贫铀": 75,
                        "铝制外壳": 10
                    }
                }
            ]
        },
        "铀废料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "核电站",
                    "equIndex": 0,
                    "productList": {
                        "铀废料": 50.0
                    },
                    "sourceList": {
                        "铀燃料棒": 1
                    }
                }
            ]
        },
        "钚废料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "核电站",
                    "equIndex": 0,
                    "productList": {
                        "钚废料": 10.0
                    },
                    "sourceList": {
                        "钚燃料棒": 1
                    }
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
        },
        "采矿机": {
            "useIndex": 0,
            "data": [
                {
                    "name": "1级采矿机",
                    "energy": 5,
                    "rate": 1
                },
                {
                    "name": "2级采矿机",
                    "energy": 12,
                    "rate": 2
                },
                {
                    "name": "3级采矿机",
                    "energy": 30,
                    "rate": 4
                },
            ]
        },
        "抽水设备": {
            "useIndex": 0,
            "data": [
                {
                    "name": "抽水站",
                    "energy": 40,
                    "rate": 1
                }
            ]
        },
        "粒子加速器": {
            "useIndex": 0,
            "data": [
                {
                    "name": "粒子加速器",
                    "energy": 500,
                    "rate": 1
                }
            ]
        }

    }
}

// 材料分类表格（暂时没有使用到）
let materialCategoryTable = [
    {
        "category": "特殊",
        "data": [
            {
                "category": "项目",
                "data": [
                    "枢纽", "太空电梯", "分子分析机", "蓝图设计器"
                ]
            },
            {
                "category": "AWESOME奖励项目",
                "data": [
                    "AWESOME商店", "AWESOME回收器"
                ]
            }
        ]
    }, {
        "category": "生产",
        "data": [
            {
                "category": "制造设备",
                "data": [
                    "构造器", "组装器", "制造器", "灌装机", "精炼厂", "搅拌器"
                ]
            },
            {
                "category": "冶炼设备",
                "data": [
                    "冶炼器", "铸造器"
                ]
            },
            {
                "category": "采矿机",
                "data": [
                    "1级采矿机", "2级采矿机"
                ]
            },
            {
                "category": "流体采集器",
                "data": [
                    "抽水站", "油井"
                ]
            },
            {
                "category": "工作站",
                "data": [
                    "制作台", "设备车间"
                ]
            }
        ]
    }, {
        "category": "电力",
        "data": [
            {
                "category": "发电机",
                "data": [
                    "生物质燃烧器", "煤炭发电机", "燃油发电机", "地热发电机", "蓄电池"
                ]
            }, {
                "category": "电线杆",
                "data": [
                    "电源线", "1级电线杆", "2级电线杆", "3级电线杆", "电源开关"
                ]
            }

        ]
    }, {
        "category": "物流",
        "data": [
            {
                "category": "传送带",
                "data": [
                    "1级传送带", "2级传送带", "3级传送带", "4级传送带"
                ]
            }, {
                "category": "垂直传送带",
                "data": [
                    "1级垂直传送带", "2级垂直传送带", "3级垂直传送带", "4级垂直传送带"
                ]
            }, {
                "category": "传送带支架",
                "data": [
                    "传送带立架", "传送带叠架", "传送带壁架", "传送带吊架"
                ]
            }, {
                "category": "管道",
                "data": [
                    "1级管道", "2级管道", "管道交叉接头", "1级管道泵", "2级管道泵", "阀门"
                ]
            }, {
                "category": "管道支架",
                "data": [
                    "管道立架", "管道叠架"
                ]
            }, {
                "category": "引导设备",
                "data": [
                    "传送合并器", "传送分离器", "智能分离器", "可编程分离器"
                ]
            }

        ]
    }, {
        "category": "组织",
        "data": [
            {
                "category": "标志牌",
                "data": [
                    "标志牌 2m", "标志牌 3m", "标志牌 4m", "展示牌", "竖向牌", "方形牌 0.5m",
                    "方形牌 1m", "方形牌 2m", "小型告示牌", "大型告示牌"
                ]
            }, {
                "category": "存储",
                "data": [
                    "个人储物盒", "存储器", "工业存储器", "液体缓冲罐", "工业液体缓冲罐"
                ]
            }, {
                "category": "塔",
                "data": [
                    "瞭望塔", "雷达塔"
                ]
            }
        ]
    }, {
        "category": "运输",
        "data": [
            {
                "category": "载具运输",
                "data": [
                    "卡车站", "拖拉机", "卡车", "探险家"
                ]
            }, {
                "category": "超级管道",
                "data": [
                    "超级管道", "超级管道入口", "超级管道立架", "超级管道叠架"
                ]
            }, {
                "category": "铁路运输",
                "data": [
                    "电力火车头", "货运车厢", "火车站", "货运站台", "液体货运站台", "空站台",
                    "带天桥空站台", "铁轨", "区间信号灯", "路径信号灯"
                ]
            }, {
                "category": "弹射板",
                "data": [
                    "弹射板", "酸性凝胶着陆垫"
                ]
            }
        ]
    }
]