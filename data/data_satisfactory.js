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
        "精炼厂": "Oil Refinery",
        "F金锭": "F金锭",
        "二氧化硅溶解液": "二氧化硅溶解液",
        "量子编码器": "Quantum Encoder",
    },
    "select_dialog_data": {
        "金属锭": ["铁锭", "铜锭", "钦锭", "钢锭", "铝锭", "F金锭"],
        "矿物": ["混凝土", "石英晶体", "石英砂", "铜粉", "聚合树脂", "油焦", "铝块"],
        "液体": ["重渣油", "燃料", "液态生物燃料", "涡轮燃料", "氧化铝溶液", "硫酸", "硝酸", "二氧化硅溶解液"],
        "标准零件": ["铁棒", "螺丝", "铁板", "加强铁板", "铜板", "镀铝板", "铝制外壳", "钢管", "钢梁", "钢筋混凝土梁", "模块化框架", "重型模块化框架", "熔合模块化框架", "F金三角", "布料", "塑料", "橡胶"],
        "工业零件": ["转子", "定子", "电池", "电机", "散热器", "冷却系统", "涡轮电机"],
        "电子产品": ["电线", "电缆", "快速线", "电路板", "AI限制器", "高速连接器", "活性SAM物质", "SAM物质波波动器"],
        "通讯": ["计算机", "超级计算机", "量子计算机", "无线电控制单元", "晶体振荡器", "叠加振荡器"],
        "量子科技": ["钻石", "时间水晶", "暗物质晶体", "暗物质残渣", "奇点电池", "激发态光子物质", "神经量子处理器", "外星能量矩阵"],
        "容器": ["空罐", "空瓶", "压力转换立方体"],
        "燃料": ["桶装火箭燃料", "桶装电离燃油", "铀燃料棒", "钚燃料棒"],
        "核工业品": ["电磁控制杆", "封装铀棒", "非裂变贫铀", "钚丸", "封装钚棒", "镄", "镄燃料棒"],
        "特殊": ["智能护板", "多功能框架", "自动线路", "模块化引擎", "自适应控制单元", "组装编导系统", "磁场发生器", "热推进火箭", "核子团", "生化塑造器", "弹道跃迁引擎", "AI拓展伺服器"],
    },
    "buff": {
        "增产剂": {
            "data": [
                {
                    "id": 1,
                    "名字": "增产剂-Mk.I",
                    "喷涂次数": 12,
                    "额外产出": 1.125,
                    "加速生成": 1.5,
                    "电力消耗": 1.3,
                    "制造于": "制造台",
                },
                {
                    "id": 2,
                    "名字": "增产剂-Mk.II",
                    "喷涂次数": 24,
                    "额外产出": 1.2,
                    "加速生成": 2,
                    "电力消耗": 1.7,
                    "制造于": "制造台",
                },
                {
                    "id": 3,
                    "名字": "增产剂-Mk.III",
                    "喷涂次数": 60,
                    "额外产出": 1.25,
                    "加速生成": 2.5,
                    "电力消耗": 2.5,
                    "制造于": "制造台",
                }
            ]
        }
    },
    "recipe_data": {
        "外星能量矩阵": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "量子编码站",
                "equIndex": 0,
                "productList": {"外星能量矩阵": "2.5", "暗物质残渣": "60"},
                "sourceList": {
                    "SAM物质波波动器": "12.5",
                    "能量碎片": "7.5",
                    "叠加振荡器": "7.5",
                    "激发态光子物质": "60"
                }
            }]
        },
        "封装钚棒": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "装配站",
                "equIndex": 0,
                "productList": {"封装钚棒": "5"},
                "sourceList": {"钚丸": "10", "混凝土": "20"}
            }, {
                "time": 60,
                "equType": "粒子加速器",
                "equIndex": 0,
                "productList": {"封装钚棒": "10"},
                "sourceList": {"非裂变贫铀": "75", "铝制外壳": "10"}
            }]
        },
        "镄": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "粒子加速器",
                "equIndex": 0,
                "productList": {"镄": "10"},
                "sourceList": {"钚废料": "10", "奇点电池": "10", "暗物质残渣": "200"}
            }]
        },
        "镄燃料棒": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "量子编码器",
                "equIndex": 0,
                "productList": {"镄燃料棒": "2.5", "暗物质残渣": "50"},
                "sourceList": {"镄": "5", "电磁控制杆": "5", "F金三角": "100", "激发态光子物质": "50"}
            }]
        },
        "弹道跃迁引擎": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "制造器",
                "equIndex": 0,
                "productList": {"弹道跃迁引擎": "1"},
                "sourceList": {
                    "热能推进火箭": "1",
                    "奇点电池": "5",
                    "叠加振荡器": "2",
                    "暗物质晶体": "40",
                }
            }]
        },
        "油焦": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "精炼厂",
                "equIndex": 0,
                "productList": {"油焦": "120"},
                "sourceList": {"重渣油": "40"}
            }]
        },
        "石灰石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "石灰石": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "石灰石": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "硫": "20"
                    }
                }
            ]
        },
        "铁矿石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铁矿石": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "铁矿石": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "石灰石": "240"
                    }
                }
            ]
        },
        "铜矿石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铜矿石": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "铜矿石": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "原石英": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "铜矿石": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "硫": "120"
                    }
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
                        "钦矿石": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "钦矿石": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "铜矿石": "150"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "钦矿石": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "原石英": "120"
                    }
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
                        " 煤": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "煤": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "铁矿石": "180"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "煤": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "石灰石": "360"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "煤": "150"
                    },
                    "sourceList": {
                        "木材": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "煤": "45"
                    },
                    "sourceList": {
                        "生物质": "37.5"
                    }
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
                        "原石英": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "原石英": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "铝土矿": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "原石英": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "煤": "240"
                    }
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
                        "硫": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "硫": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "煤": "200"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "硫": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "铁矿石": "300"
                    }
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
                        "铝土矿": "30"
                    },
                    "sourceList": {}
                }, {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "铝土矿": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "钦矿石": "150"
                    }
                },
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "铝土矿": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "铜矿石": "180"
                    }
                }
            ]
        },
        "SAM": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "SAM": "30"
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
                    "name": "配方",
                    "equType": "采矿机",
                    "equIndex": 0,
                    "productList": {
                        "铀": "30"
                    },
                    "sourceList": {}
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
                        "铁锭": "30"
                    },
                    "sourceList": {
                        "铁矿石": "30"
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": "50"
                    },
                    "sourceList": {
                        "铁矿石": "25",
                        "石灰石": "40"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": "100"
                    },
                    "sourceList": {
                        "铁矿石": "50",
                        "硫酸": "10"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": "65"
                    },
                    "sourceList": {
                        "铁矿石": "35",
                        "水": "20"
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铁锭": "75"
                    },
                    "sourceList": {
                        "铁矿石": "40",
                        "铜矿石": "10"
                    }
                }
            ]
        },
        "铜锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": "30"
                    },
                    "sourceList": {
                        "铜矿石": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": "110"
                    },
                    "sourceList": {
                        "铜矿石": "45",
                        "硫酸": "25"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": "60"
                    },
                    "sourceList": {
                        "铜矿石": "25",
                        "油焦": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": "37.5"
                    },
                    "sourceList": {
                        "铜矿石": "15",
                        "水": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": "100"
                    },
                    "sourceList": {
                        "铜矿石": "50",
                        "铁矿石": "50"
                    }
                }
            ]
        },
        "钦锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": "15"
                    },
                    "sourceList": {
                        "钦矿石": "45"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": "36"
                    },
                    "sourceList": {
                        "钦矿石": "54",
                        "硫酸": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": "22.5"
                    },
                    "sourceList": {
                        "钦矿石": "45",
                        "油焦": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": "12"
                    },
                    "sourceList": {
                        "钦矿石": "24",
                        "水": "24"
                    }
                }
            ]
        },
        "钢锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "45"
                    },
                    "sourceList": {
                        "铁矿石": "45",
                        "煤": "45"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "60"
                    },
                    "sourceList": {
                        "铁锭": "40",
                        "煤": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "10"
                    },
                    "sourceList": {
                        "铁矿石": "5",
                        "压缩煤": "2.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "100"
                    },
                    "sourceList": {
                        "铁矿石": "75",
                        "油焦": "75"
                    }
                }
            ]
        },
        "铝锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铝锭": "60"
                    },
                    "sourceList": {
                        "铝块": "90",
                        "石英砂": "75"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "冶炼器",
                    "equIndex": 0,
                    "productList": {
                        "铝锭": "30"
                    },
                    "sourceList": {
                        "铝块": "60"
                    }
                }
            ]
        },
        "F金锭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "F金锭": "30"
                    },
                    "sourceList": {
                        "活性SAM物质": "60",
                        "铝锭": "120"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "F金锭": "15"
                    },
                    "sourceList": {
                        "活性SAM物质": "45",
                        "钦锭": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "F金锭": "10"
                    },
                    "sourceList": {
                        "活性SAM物质": "40",
                        "铁锭": "240"
                    }
                }
            ]
        },
        "混凝土": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": "15"
                    },
                    "sourceList": {
                        "石灰石": "45"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": "80"
                    },
                    "sourceList": {
                        "石灰石": "120",
                        "水": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": "90"
                    },
                    "sourceList": {
                        "石灰石": "100",
                        "橡胶": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": "50"
                    },
                    "sourceList": {
                        "石英砂": "15",
                        "石灰石": "60"
                    }
                }
            ]
        },
        "石英晶体": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "22.5"
                    },
                    "sourceList": {
                        "原石英": "37.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "54"
                    },
                    "sourceList": {
                        "原石英": "75",
                        "煤": "36"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "75",
                        "二氧化硅溶解液": "60"
                    },
                    "sourceList": {
                        "原石英": "120",
                        "硝酸": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "52.5"
                    },
                    "sourceList": {
                        "原石英": "67.5",
                        "水": "37.5"
                    }
                }
            ]
        },
        "石英砂": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": "37.5"
                    },
                    "sourceList": {
                        "原石英": "22.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "氧化铝溶液": "120",
                        "石英砂": "50"
                    },
                    "sourceList": {
                        "铝土矿": "120",
                        "水": "180"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": "270",
                        "水": "80"
                    },
                    "sourceList": {
                        "二氧化硅溶解液": "120",
                        "石灰石": "50",
                        "水": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": "52.5"
                    },
                    "sourceList": {
                        "原石英": "22.5",
                        "石灰石": "37.5"
                    }
                }
            ]
        },
        "铜粉": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铜粉": "50"
                    },
                    "sourceList": {
                        "铜锭": "300"
                    }
                }
            ]
        },
        "聚合树脂": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "燃料": "40",
                        "聚合树脂": "30"
                    },
                    "sourceList": {
                        "原油": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": "130",
                        "重渣油": "20"
                    },
                    "sourceList": {
                        "原油": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": "40",
                        "聚合树脂": "20"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                }
            ]
        },
        "铝块": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "360",
                        "水": "120"
                    },
                    "sourceList": {
                        "氧化铝溶液": "240",
                        "煤": "120"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "300",
                        "水": "105"
                    },
                    "sourceList": {
                        "氧化铝溶液": "180",
                        "油焦": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "300",
                        "水": "50"
                    },
                    "sourceList": {
                        "铝土矿": "150",
                        "煤": "100",
                        "硫酸": "50",
                        "水": "60"
                    }
                }
            ]
        },
        "外星蛋白质": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "外星蛋白质": "20"
                    },
                    "sourceList": {
                        "刺蛛残骸": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "外星蛋白质": "20"
                    },
                    "sourceList": {
                        "Spitter Remains": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "外星蛋白质": "20"
                    },
                    "sourceList": {
                        "孵化巢残骸": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "外星蛋白质": "20"
                    },
                    "sourceList": {
                        "野猪残骸": "20"
                    }
                }
            ]
        },
        "水": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "抽水设备",
                    "equIndex": 0,
                    "productList": {
                        "水": "60"
                    },
                    "sourceList": {}
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "非裂变贫铀": "50",
                        "水": "15"
                    },
                    "sourceList": {
                        "铀废料": "37.5",
                        "石英砂": "25",
                        "硝酸": "15",
                        "硫酸": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "电池": "20",
                        "水": "30"
                    },
                    "sourceList": {
                        "硫酸": "50",
                        "氧化铝溶液": "40",
                        "铝制外壳": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "360",
                        "水": "120"
                    },
                    "sourceList": {
                        "氧化铝溶液": "240",
                        "煤": "120"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": "270",
                        "水": "80"
                    },
                    "sourceList": {
                        "二氧化硅溶解液": "120",
                        "石灰石": "50",
                        "水": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "非裂变贫铀": "100",
                        "水": "40"
                    },
                    "sourceList": {
                        "铀": "25",
                        "铀废料": "25",
                        "硝酸": "15",
                        "硫酸": "25"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "300",
                        "水": "105"
                    },
                    "sourceList": {
                        "氧化铝溶液": "180",
                        "油焦": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "300",
                        "水": "50"
                    },
                    "sourceList": {
                        "铝土矿": "150",
                        "煤": "100",
                        "硫酸": "50",
                        "水": "60"
                    }
                }
            ]
        },
        "原油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "抽水设备",
                    "equIndex": 0,
                    "productList": {
                        "原油": "60"
                    },
                    "sourceList": {}
                }
            ]
        },
        "重渣油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": "20",
                        "重渣油": "10"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": "20",
                        "重渣油": "20"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": "130",
                        "重渣油": "20"
                    },
                    "sourceList": {
                        "原油": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": "40",
                        "聚合树脂": "20"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                }
            ]
        },
        "液态生物燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "液态生物燃料": "60"
                    },
                    "sourceList": {
                        "固体生物燃料": "90",
                        "水": "45"
                    }
                }
            ]
        },
        "涡轮燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": "18.75"
                    },
                    "sourceList": {
                        "燃料": "22.5",
                        "压缩煤": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": "45"
                    },
                    "sourceList": {
                        "燃料": "15",
                        "重渣油": "30",
                        "硫": "22.5",
                        "油焦": "22.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": "30"
                    },
                    "sourceList": {
                        "重渣油": "37.5",
                        "压缩煤": "30"
                    }
                }
            ]
        },
        "氧化铝溶液": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "氧化铝溶液": "120",
                        "石英砂": "50"
                    },
                    "sourceList": {
                        "铝土矿": "120",
                        "水": "180"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "氧化铝溶液": "240"
                    },
                    "sourceList": {
                        "铝土矿": "200",
                        "水": "200"
                    }
                }
            ]
        },
        "硫酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "硫酸": "50"
                    },
                    "sourceList": {
                        "硫": "50",
                        "水": "50"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "封装铀棒": "25",
                        "硫酸": "10"
                    },
                    "sourceList": {
                        "铀": "50",
                        "混凝土": "15",
                        "硫酸": "40"
                    }
                }
            ]
        },
        "硝酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "硝酸": "30"
                    },
                    "sourceList": {
                        "氮气": "120",
                        "水": "30",
                        "铁板": "10"
                    }
                }
            ]
        },
        "二氧化硅溶解液": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "替代配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "75",
                        "二氧化硅溶解液": "60"
                    },
                    "sourceList": {
                        "原石英": "120",
                        "硝酸": "10"
                    }
                }
            ]
        },
        "氮气": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "矿井采集器",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "60"
                    },
                    "sourceList": {}
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "铝土矿": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "120"
                    },
                    "sourceList": {
                        "活性SAM物质": "10",
                        "钦矿石": "120"
                    }
                }
            ]
        },
        "火箭燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "火箭燃料": "100",
                        "压缩煤": "10"
                    },
                    "sourceList": {
                        "涡轮燃料": "60",
                        "硝酸": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "火箭燃料": "150",
                        "压缩煤": "25"
                    },
                    "sourceList": {
                        "燃料": "100",
                        "氮气": "75",
                        "硫": "100",
                        "煤": "50"
                    }
                }
            ]
        },
        "Ionized Fuel": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "Ionized Fuel": "40",
                        "压缩煤": "5"
                    },
                    "sourceList": {
                        "火箭燃料": "40",
                        "能量碎片": "2.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "Ionized Fuel": "80",
                        "空瓶": "40"
                    },
                    "sourceList": {
                        "桶装电离燃油": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "Ionized Fuel": "200",
                        "压缩煤": "40"
                    },
                    "sourceList": {
                        "桶装火箭燃料": "240",
                        "暗物质晶体": "80"
                    }
                }
            ]
        },
        "暗物质残渣": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "AI拓展伺服器": "4",
                        "暗物质残渣": "100"
                    },
                    "sourceList": {
                        "磁场发生器": "4",
                        "神经量子处理器": "4",
                        "叠加振荡器": "4",
                        "激发态光子物质": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "暗物质残渣": "60"
                    },
                    "sourceList": {
                        "SAM物质波波动器": "12.5",
                        "能量碎片": "7.5",
                        "叠加振荡器": "7.5",
                        "激发态光子物质": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "暗物质残渣": "100"
                    },
                    "sourceList": {
                        "活性SAM物质": "50"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "Ficsonium Fuel Rod": "2.5",
                        "暗物质残渣": "50"
                    },
                    "sourceList": {
                        "Ficsonium": "5",
                        "电磁控制杆": "5",
                        "F金三角": "100",
                        "激发态光子物质": "50"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "神经量子处理器": "3",
                        "暗物质残渣": "75"
                    },
                    "sourceList": {
                        "时间水晶": "15",
                        "超级计算机": "3",
                        "F金三角": "45",
                        "激发态光子物质": "75"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "5",
                        "暗物质残渣": "60"
                    },
                    "sourceList": {
                        "时间水晶": "10",
                        "暗物质晶体": "10",
                        "石英晶体": "60",
                        "激发态光子物质": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "叠加振荡器": "5",
                        "暗物质残渣": "125"
                    },
                    "sourceList": {
                        "暗物质晶体": "30",
                        "晶体振荡器": "5",
                        "镀铝板": "45",
                        "激发态光子物质": "125"
                    }
                }
            ]
        },
        "激发态光子物质": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "激发态光子物质": "200"
                    },
                    "sourceList": {}
                }
            ]
        },
        "铁棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁棒": "15"
                    },
                    "sourceList": {
                        "铁锭": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁棒": "52.5"
                    },
                    "sourceList": {
                        "铝锭": "7.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁棒": "48"
                    },
                    "sourceList": {
                        "钢锭": "12"
                    }
                }
            ]
        },
        "螺丝": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "螺丝": "40"
                    },
                    "sourceList": {
                        "铁棒": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "螺丝": "260"
                    },
                    "sourceList": {
                        "钢梁": "5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "螺丝": "50"
                    },
                    "sourceList": {
                        "铁锭": "12.5"
                    }
                }
            ]
        },
        "铁板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": "20"
                    },
                    "sourceList": {
                        "铁锭": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": "45"
                    },
                    "sourceList": {
                        "铁锭": "15",
                        "钢锭": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": "75"
                    },
                    "sourceList": {
                        "铁锭": "37.5",
                        "塑料": "7.5"
                    }
                }
            ]
        },
        "加强铁板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": "5"
                    },
                    "sourceList": {
                        "铁板": "30",
                        "螺丝": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": "5.63"
                    },
                    "sourceList": {
                        "铁板": "18.75",
                        "电线": "37.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": "3.75"
                    },
                    "sourceList": {
                        "铁板": "11.25",
                        "橡胶": "3.75"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "加强铁板": "15"
                    },
                    "sourceList": {
                        "铁板": "90",
                        "螺丝": "250"
                    }
                }
            ]
        },
        "铜板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铜板": "10"
                    },
                    "sourceList": {
                        "铜锭": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铜板": "22.5"
                    },
                    "sourceList": {
                        "铜锭": "22.5",
                        "水": "22.5"
                    }
                }
            ]
        },
        "铝制外壳": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "铝制外壳": "60"
                    },
                    "sourceList": {
                        "铝锭": "90"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "铝制外壳": "112.5"
                    },
                    "sourceList": {
                        "铝锭": "150",
                        "铜锭": "75"
                    }
                }
            ]
        },
        "钢管": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢管": "20"
                    },
                    "sourceList": {
                        "钢锭": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢管": "25"
                    },
                    "sourceList": {
                        "铁锭": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢管": "50"
                    },
                    "sourceList": {
                        "钢锭": "50",
                        "混凝土": "30"
                    }
                }
            ]
        },
        "钢梁": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢梁": "15"
                    },
                    "sourceList": {
                        "钢锭": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢梁": "22.5"
                    },
                    "sourceList": {
                        "铝锭": "22.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢梁": "45"
                    },
                    "sourceList": {
                        "钢锭": "120",
                        "混凝土": "80"
                    }
                }
            ]
        },
        "钢筋混凝土梁": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钢筋混凝土梁": "6"
                    },
                    "sourceList": {
                        "钢梁": "18",
                        "混凝土": "36"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钢筋混凝土梁": "4"
                    },
                    "sourceList": {
                        "钢管": "24",
                        "混凝土": "20"
                    }
                }
            ]
        },
        "模块化框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": "2"
                    },
                    "sourceList": {
                        "加强铁板": "3",
                        "铁棒": "12"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": "3"
                    },
                    "sourceList": {
                        "加强铁板": "2",
                        "钢管": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": "5"
                    },
                    "sourceList": {
                        "加强铁板": "7.5",
                        "螺丝": "140"
                    }
                }
            ]
        },
        "重型模块化框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "重型模块化框架": "2"
                    },
                    "sourceList": {
                        "模块化框架": "10",
                        "钢管": "40",
                        "钢筋混凝土梁": "10",
                        "螺丝": "240"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "重型模块化框架": "2.81"
                    },
                    "sourceList": {
                        "模块化框架": "7.5",
                        "钢筋混凝土梁": "9.38",
                        "钢管": "33.75",
                        "混凝土": "20.63"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "重型模块化框架": "3.75"
                    },
                    "sourceList": {
                        "模块化框架": "18.75",
                        "钢筋混凝土梁": "11.25",
                        "橡胶": "75",
                        "螺丝": "390"
                    }
                }
            ]
        },
        "熔合模块化框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "熔合模块化框架": "1.5"
                    },
                    "sourceList": {
                        "重型模块化框架": "1.5",
                        "铝制外壳": "75",
                        "氮气": "37.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "熔合模块化框架": "3"
                    },
                    "sourceList": {
                        "重型模块化框架": "3",
                        "铝锭": "150",
                        "硝酸": "24",
                        "燃料": "30"
                    }
                }
            ]
        },
        "F金三角": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "F金三角": "30"
                    },
                    "sourceList": {
                        "F金锭": "10"
                    }
                }
            ]
        },
        "布料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "布料": "15"
                    },
                    "sourceList": {
                        "菌丝体": "15",
                        "生物质": "75"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "布料": "30"
                    },
                    "sourceList": {
                        "聚合树脂": "30",
                        "水": "30"
                    }
                }
            ]
        },
        "塑料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": "20",
                        "重渣油": "10"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": "60"
                    },
                    "sourceList": {
                        "橡胶": "30",
                        "燃料": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": "20"
                    },
                    "sourceList": {
                        "聚合树脂": "60",
                        "水": "20"
                    }
                }
            ]
        },
        "橡胶": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": "20",
                        "重渣油": "20"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": "60"
                    },
                    "sourceList": {
                        "塑料": "30",
                        "燃料": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": "20"
                    },
                    "sourceList": {
                        "聚合树脂": "40",
                        "水": "40"
                    }
                }
            ]
        },
        "转子": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": "4"
                    },
                    "sourceList": {
                        "铁棒": "20",
                        "螺丝": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": "5"
                    },
                    "sourceList": {
                        "钢管": "10",
                        "电线": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": "11.25"
                    },
                    "sourceList": {
                        "铜板": "22.5",
                        "螺丝": "195"
                    }
                }
            ]
        },
        "定子": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "定子": "5"
                    },
                    "sourceList": {
                        "钢管": "15",
                        "电线": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "定子": "8"
                    },
                    "sourceList": {
                        "钢管": "16",
                        "快速线": "60"
                    }
                }
            ]
        },
        "电池": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "电池": "20",
                        "水": "30"
                    },
                    "sourceList": {
                        "硫酸": "50",
                        "氧化铝溶液": "40",
                        "铝制外壳": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "电池": "30"
                    },
                    "sourceList": {
                        "硫": "45",
                        "镀铝板": "52.5",
                        "塑料": "60",
                        "电线": "90"
                    }
                }
            ]
        },
        "电机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电机": "5"
                    },
                    "sourceList": {
                        "转子": "10",
                        "定子": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "电机": "7.5"
                    },
                    "sourceList": {
                        "转子": "3.75",
                        "定子": "3.75",
                        "晶体振荡器": "1.25"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电机": "7.5"
                    },
                    "sourceList": {
                        "电磁控制杆": "3.75",
                        "转子": "7.5"
                    }
                }
            ]
        },
        "散热器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "散热器": "7.5"
                    },
                    "sourceList": {
                        "镀铝板": "37.5",
                        "铜板": "22.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "散热器": "10"
                    },
                    "sourceList": {
                        "铝制外壳": "30",
                        "橡胶": "30"
                    }
                }
            ]
        },
        "冷却系统": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "冷却系统": "6"
                    },
                    "sourceList": {
                        "散热器": "12",
                        "橡胶": "12",
                        "水": "30",
                        "氮气": "150"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "冷却系统": "5"
                    },
                    "sourceList": {
                        "散热器": "10",
                        "电机": "2.5",
                        "氮气": "60"
                    }
                }
            ]
        },
        "涡轮电机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": "1.88"
                    },
                    "sourceList": {
                        "冷却系统": "7.5",
                        "无线电控制单元": "3.75",
                        "电机": "7.5",
                        "橡胶": "45"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": "3.75"
                    },
                    "sourceList": {
                        "电机": "7.5",
                        "压力转换立方体": "1.88",
                        "瓶装氮气": "45",
                        "定子": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": "2.81"
                    },
                    "sourceList": {
                        "电机": "6.56",
                        "无线电控制单元": "8.44",
                        "电磁控制杆": "4.69",
                        "转子": "6.56"
                    }
                }
            ]
        },
        "电线": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电线": "30"
                    },
                    "sourceList": {
                        "铜锭": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电线": "90"
                    },
                    "sourceList": {
                        "铜锭": "12",
                        "钦锭": "3"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电线": "120"
                    },
                    "sourceList": {
                        "钦锭": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电线": "22.5"
                    },
                    "sourceList": {
                        "铁锭": "12.5"
                    }
                }
            ]
        },
        "电缆": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": "30"
                    },
                    "sourceList": {
                        "电线": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": "27.5"
                    },
                    "sourceList": {
                        "快速线": "7.5",
                        "橡胶": "5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": "100"
                    },
                    "sourceList": {
                        "电线": "45",
                        "橡胶": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "电缆": "67.5"
                    },
                    "sourceList": {
                        "电线": "37.5",
                        "重渣油": "15"
                    }
                }
            ]
        },
        "快速线": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "快速线": "60"
                    },
                    "sourceList": {
                        "钦锭": "12"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "快速线": "90"
                    },
                    "sourceList": {
                        "钦锭": "7.5",
                        "铜锭": "37.5"
                    }
                }
            ]
        },
        "电路板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": "7.5"
                    },
                    "sourceList": {
                        "铜板": "15",
                        "塑料": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": "5"
                    },
                    "sourceList": {
                        "橡胶": "20",
                        "油焦": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": "12.5"
                    },
                    "sourceList": {
                        "铜板": "27.5",
                        "石英砂": "27.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": "8.75"
                    },
                    "sourceList": {
                        "塑料": "12.5",
                        "快速线": "37.5"
                    }
                }
            ]
        },
        "AI限制器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "AI限制器": "5"
                    },
                    "sourceList": {
                        "铜板": "25",
                        "快速线": "100"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "AI限制器": "8"
                    },
                    "sourceList": {
                        "快速线": "120",
                        "塑料": "28"
                    }
                }
            ]
        },
        "高速连接器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "高速连接器": "3.75"
                    },
                    "sourceList": {
                        "快速线": "210",
                        "电缆": "37.5",
                        "电路板": "3.75"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "高速连接器": "3"
                    },
                    "sourceList": {
                        "快速线": "90",
                        "石英砂": "37.5",
                        "电路板": "3"
                    }
                }
            ]
        },
        "活性SAM物质": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "活性SAM物质": "30"
                    },
                    "sourceList": {
                        "SAM": "120"
                    }
                }
            ]
        },
        "SAM物质波波动器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "SAM物质波波动器": "10"
                    },
                    "sourceList": {
                        "活性SAM物质": "60",
                        "电线": "50",
                        "钢管": "30"
                    }
                }
            ]
        },
        "计算机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "计算机": "2.5"
                    },
                    "sourceList": {
                        "电路板": "10",
                        "电缆": "20",
                        "塑料": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "计算机": "3.33"
                    },
                    "sourceList": {
                        "电路板": "5",
                        "晶体振荡器": "1.67"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "计算机": "3.75"
                    },
                    "sourceList": {
                        "电路板": "15",
                        "快速线": "52.5",
                        "橡胶": "22.5"
                    }
                }
            ]
        },
        "超级计算机": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": "1.88"
                    },
                    "sourceList": {
                        "计算机": "7.5",
                        "AI限制器": "3.75",
                        "高速连接器": "5.63",
                        "塑料": "52.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": "2.4"
                    },
                    "sourceList": {
                        "计算机": "7.2",
                        "电磁控制杆": "2.4",
                        "电池": "24",
                        "电线": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": "3"
                    },
                    "sourceList": {
                        "无线电控制单元": "6",
                        "冷却系统": "6"
                    }
                }
            ]
        },
        "量子计算机": {
            "useIndex": 0,
            "data": []
        },
        "无线电控制单元": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": "2.5"
                    },
                    "sourceList": {
                        "铝制外壳": "40",
                        "晶体振荡器": "1.25",
                        "计算机": "2.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": "4.5"
                    },
                    "sourceList": {
                        "晶体振荡器": "1.5",
                        "电路板": "15",
                        "铝制外壳": "90",
                        "橡胶": "45"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": "3.75"
                    },
                    "sourceList": {
                        "散热器": "15",
                        "高速连接器": "7.5",
                        "石英晶体": "45"
                    }
                }
            ]
        },
        "晶体振荡器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "晶体振荡器": "1"
                    },
                    "sourceList": {
                        "石英晶体": "18",
                        "电缆": "14",
                        "加强铁板": "2.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "晶体振荡器": "1.88"
                    },
                    "sourceList": {
                        "石英晶体": "18.75",
                        "橡胶": "13.13",
                        "AI限制器": "1.88"
                    }
                }
            ]
        },
        "叠加振荡器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "叠加振荡器": "5",
                        "暗物质残渣": "125"
                    },
                    "sourceList": {
                        "暗物质晶体": "30",
                        "晶体振荡器": "5",
                        "镀铝板": "45",
                        "激发态光子物质": "125"
                    }
                }
            ]
        },
        "钻石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钻石": "30"
                    },
                    "sourceList": {
                        "煤": "600"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钻石": "20"
                    },
                    "sourceList": {
                        "煤": "240",
                        "石灰石": "480"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钻石": "40"
                    },
                    "sourceList": {
                        "原油": "200"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钻石": "30"
                    },
                    "sourceList": {
                        "油焦": "720"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "钻石": "15"
                    },
                    "sourceList": {
                        "煤": "120",
                        "石英晶体": "45"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钻石": "60"
                    },
                    "sourceList": {
                        "煤": "600",
                        "桶装涡轮燃料": "40"
                    }
                }
            ]
        },
        "时间水晶": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "时间水晶": "6"
                    },
                    "sourceList": {
                        "钻石": "12"
                    }
                }
            ]
        },
        "暗物质晶体": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "暗物质晶体": "30"
                    },
                    "sourceList": {
                        "钻石": "30",
                        "暗物质残渣": "150"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "暗物质晶体": "20"
                    },
                    "sourceList": {
                        "暗物质残渣": "200"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "暗物质晶体": "60"
                    },
                    "sourceList": {
                        "时间水晶": "30",
                        "暗物质残渣": "150"
                    }
                }
            ]
        },
        "奇点电池": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "奇点电池": "10"
                    },
                    "sourceList": {
                        "核子团": "1",
                        "暗物质晶体": "20",
                        "铁板": "100",
                        "混凝土": "200"
                    }
                }
            ]
        },
        "神经量子处理器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "神经量子处理器": "3",
                        "暗物质残渣": "75"
                    },
                    "sourceList": {
                        "时间水晶": "15",
                        "超级计算机": "3",
                        "F金三角": "45",
                        "激发态光子物质": "75"
                    }
                }
            ]
        },
        "空罐": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": "60"
                    },
                    "sourceList": {
                        "塑料": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": "40"
                    },
                    "sourceList": {
                        "钢锭": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": "60"
                    },
                    "sourceList": {
                        "铁板": "30",
                        "铜板": "15"
                    }
                }
            ]
        },
        "空瓶": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "Ionized Fuel": "80",
                        "空瓶": "40"
                    },
                    "sourceList": {
                        "桶装电离燃油": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "火箭燃料": "120",
                        "空瓶": "60"
                    },
                    "sourceList": {
                        "桶装火箭燃料": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "240",
                        "空瓶": "60"
                    },
                    "sourceList": {
                        "瓶装氮气": "60"
                    }
                }, {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "60"
                    },
                    "sourceList": {
                        "铝锭": "60"
                    }
                }
            ]
        },
        "压力转换立方体": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "压力转换立方体": "1"
                    },
                    "sourceList": {
                        "熔合模块化框架": "1",
                        "无线电控制单元": "2"
                    }
                }
            ]
        },
        "桶装水": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装水": "60"
                    },
                    "sourceList": {
                        "水": "60",
                        "空罐": "60"
                    }
                }
            ]
        },
        "桶装氧化铝溶液": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装氧化铝溶液": "120"
                    },
                    "sourceList": {
                        "氧化铝溶液": "120",
                        "空罐": "120"
                    }
                }
            ]
        },
        "桶装硫酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装硫酸": "40"
                    },
                    "sourceList": {
                        "硫酸": "40",
                        "空罐": "40"
                    }
                }
            ]
        },
        "桶装硝酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装硝酸": "30"
                    },
                    "sourceList": {
                        "硝酸": "30",
                        "空瓶": "30"
                    }
                }
            ]
        },
        "树叶": {
            "useIndex": 0,
            "data": []
        },
        "菌丝体": {
            "useIndex": 0,
            "data": []
        },
        "花瓣": {
            "useIndex": 0,
            "data": []
        },
        "木材": {
            "useIndex": 0,
            "data": []
        },
        "生物质": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "生物质": "1500"
                    },
                    "sourceList": {
                        "外星蛋白质": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "生物质": "300"
                    },
                    "sourceList": {
                        "木材": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "生物质": "60"
                    },
                    "sourceList": {
                        "树叶": "120"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "生物质": "150"
                    },
                    "sourceList": {
                        "菌丝体": "15"
                    }
                }
            ]
        },
        "压缩煤": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "25"
                    },
                    "sourceList": {
                        "煤": "25",
                        "硫": "25"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "Ionized Fuel": "40",
                        "压缩煤": "5"
                    },
                    "sourceList": {
                        "火箭燃料": "40",
                        "能量碎片": "2.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "火箭燃料": "100",
                        "压缩煤": "10"
                    },
                    "sourceList": {
                        "涡轮燃料": "60",
                        "硝酸": "10"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "转换器",
                    "equIndex": 0,
                    "productList": {
                        "Ionized Fuel": "200",
                        "压缩煤": "40"
                    },
                    "sourceList": {
                        "桶装火箭燃料": "240",
                        "暗物质晶体": "80"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "火箭燃料": "150",
                        "压缩煤": "25"
                    },
                    "sourceList": {
                        "燃料": "100",
                        "氮气": "75",
                        "硫": "100",
                        "煤": "50"
                    }
                }
            ]
        },
        "桶装石油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装石油": "30"
                    },
                    "sourceList": {
                        "原油": "30",
                        "空罐": "30"
                    }
                }
            ]
        },
        "桶装重渣油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装重渣油": "30"
                    },
                    "sourceList": {
                        "重渣油": "30",
                        "空罐": "30"
                    }
                }
            ]
        },
        "固体生物燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "固体生物燃料": "60"
                    },
                    "sourceList": {
                        "生物质": "120"
                    }
                }
            ]
        },
        "桶装涡轮燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装涡轮燃料": "20"
                    },
                    "sourceList": {
                        "涡轮燃料": "20",
                        "空罐": "20"
                    }
                }
            ]
        },
        "桶装火箭燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装火箭燃料": "60"
                    },
                    "sourceList": {
                        "火箭燃料": "120",
                        "空瓶": "60"
                    }
                }
            ]
        },
        "燃料": {
            "useIndex": 0,
            "data": [{
                "time": 60,
                "equType": "精炼厂",
                "equIndex": 0,
                "productList": {"燃料": "40", "聚合树脂": "30"},
                "sourceList": {"原油": "60"}
            }, {
                "time": 60,
                "equType": "搅拌器",
                "equIndex": 0,
                "productList": {"燃料": "100"},
                "sourceList": {"重渣油": "50", "水": "100"}
            }, {
                "time": 60,
                "equType": "精炼厂",
                "equIndex": 0,
                "productList": {"燃料": "40"},
                "sourceList": {"重渣油": "60"}
            }]
        },
        "桶装电离燃油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装电离燃油": "40"
                    },
                    "sourceList": {
                        "Ionized Fuel": "80",
                        "空瓶": "40"
                    }
                }
            ]
        },
        "铀燃料棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "铀燃料棒": "0.4"
                    },
                    "sourceList": {
                        "封装铀棒": "20",
                        "钢筋混凝土梁": "1.2",
                        "电磁控制杆": "2"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "铀燃料棒": "0.6"
                    },
                    "sourceList": {
                        "封装铀棒": "20",
                        "电磁控制杆": "2",
                        "晶体振荡器": "0.6",
                        "转子": "2"
                    }
                }
            ]
        },
        "钚燃料棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "钚燃料棒": "0.25"
                    },
                    "sourceList": {
                        "钚核芯": "7.5",
                        "钢梁": "4.5",
                        "电磁控制杆": "1.5",
                        "散热器": "2.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钚燃料棒": "0.5"
                    },
                    "sourceList": {
                        "钚核芯": "10",
                        "压力转换立方体": "0.5"
                    }
                }
            ]
        },
        "黑火药": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "黑火药": "30"
                    },
                    "sourceList": {
                        "煤": "15",
                        "硫": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "黑火药": "45"
                    },
                    "sourceList": {
                        "硫": "7.5",
                        "压缩煤": "15"
                    }
                }
            ]
        },
        "无烟火药": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "无烟火药": "20"
                    },
                    "sourceList": {
                        "黑火药": "20",
                        "重渣油": "10"
                    }
                }
            ]
        },
        "气体过滤器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "气体过滤器": "7.5"
                    },
                    "sourceList": {
                        "布料": "15",
                        "煤": "30",
                        "铁板": "15"
                    }
                }
            ]
        },
        "彩色子弹": {
            "useIndex": 0,
            "data": []
        },
        "信标": {
            "useIndex": 0,
            "data": []
        },
        "Iodine-Infused Filter": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "Iodine-Infused Filter": "3.75"
                    },
                    "sourceList": {
                        "气体过滤器": "3.75",
                        "快速线": "30",
                        "铝制外壳": "3.75"
                    }
                }
            ]
        },
        "钢筋": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "钢筋": "15"
                    },
                    "sourceList": {
                        "铁棒": "15"
                    }
                }
            ]
        },
        "电击钢筋": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电击钢筋": "10"
                    },
                    "sourceList": {
                        "钢筋": "10",
                        "快速线": "50"
                    }
                }
            ]
        },
        "霰射钢筋": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "霰射钢筋": "5"
                    },
                    "sourceList": {
                        "钢筋": "10",
                        "石英晶体": "15"
                    }
                }
            ]
        },
        "爆炸钢筋": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "爆炸钢筋": "5"
                    },
                    "sourceList": {
                        "钢筋": "10",
                        "无烟火药": "10",
                        "钢管": "10"
                    }
                }
            ]
        },
        "步枪子弹": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "步枪子弹": "75"
                    },
                    "sourceList": {
                        "铜板": "15",
                        "无烟火药": "10"
                    }
                }
            ]
        },
        "追踪子弹": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "追踪子弹": "25"
                    },
                    "sourceList": {
                        "步枪子弹": "50",
                        "高速连接器": "2.5"
                    }
                }
            ]
        },
        "涡轮子弹": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮子弹": "250"
                    },
                    "sourceList": {
                        "步枪子弹": "125",
                        "铝制外壳": "15",
                        "桶装涡轮燃料": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮子弹": "250"
                    },
                    "sourceList": {
                        "步枪子弹": "125",
                        "铝制外壳": "15",
                        "涡轮燃料": "15"
                    }
                }
            ]
        },
        "诺石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "诺石": "10"
                    },
                    "sourceList": {
                        "黑火药": "20",
                        "钢管": "20"
                    }
                }
            ]
        },
        "毒气诺石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "毒气诺石": "5"
                    },
                    "sourceList": {
                        "诺石": "5",
                        "生物质": "50"
                    }
                }
            ]
        },
        "脉冲诺石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "脉冲诺石": "5"
                    },
                    "sourceList": {
                        "诺石": "5",
                        "晶体振荡器": "1"
                    }
                }
            ]
        },
        "集束诺石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "集束诺石": "2.5"
                    },
                    "sourceList": {
                        "诺石": "7.5",
                        "无烟火药": "10"
                    }
                }
            ]
        },
        "核子诺石": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "核子诺石": "0.5"
                    },
                    "sourceList": {
                        "诺石": "2.5",
                        "封装铀棒": "10",
                        "无烟火药": "5",
                        "AI限制器": "3"
                    }
                }
            ]
        },
        "电磁控制杆": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电磁控制杆": "4"
                    },
                    "sourceList": {
                        "定子": "6",
                        "AI限制器": "4"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电磁控制杆": "8"
                    },
                    "sourceList": {
                        "定子": "8",
                        "高速连接器": "4"
                    }
                }
            ]
        },
        "封装铀棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "封装铀棒": "25",
                        "硫酸": "10"
                    },
                    "sourceList": {
                        "铀": "50",
                        "混凝土": "15",
                        "硫酸": "40"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "封装铀棒": "20"
                    },
                    "sourceList": {
                        "铀": "25",
                        "石英砂": "15",
                        "硫": "25",
                        "快速线": "75"
                    }
                }
            ]
        },
        "非裂变贫铀": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "非裂变贫铀": "50",
                        "水": "15"
                    },
                    "sourceList": {
                        "铀废料": "37.5",
                        "石英砂": "25",
                        "硝酸": "15",
                        "硫酸": "15"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "非裂变贫铀": "100",
                        "水": "40"
                    },
                    "sourceList": {
                        "铀": "25",
                        "铀废料": "25",
                        "硝酸": "15",
                        "硫酸": "25"
                    }
                }
            ]
        },
        "钚丸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钚丸": "30"
                    },
                    "sourceList": {
                        "非裂变贫铀": "100",
                        "铀废料": "25"
                    }
                }
            ]
        },
        "钚核芯": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钚核芯": "5"
                    },
                    "sourceList": {
                        "钚丸": "10",
                        "混凝土": "20"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钚核芯": "10"
                    },
                    "sourceList": {
                        "非裂变贫铀": "75",
                        "铝制外壳": "10"
                    }
                }
            ]
        },
        "Ficsonium": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Ficsonium": "10"
                    },
                    "sourceList": {
                        "钚废料": "10",
                        "奇点电池": "10",
                        "暗物质残渣": "200"
                    }
                }
            ]
        },
        "Ficsonium Fuel Rod": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "Ficsonium Fuel Rod": "2.5",
                        "暗物质残渣": "50"
                    },
                    "sourceList": {
                        "Ficsonium": "5",
                        "电磁控制杆": "5",
                        "F金三角": "100",
                        "激发态光子物质": "50"
                    }
                }
            ]
        },
        "铀废料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "核电站",
                    "equIndex": 0,
                    "productList": {
                        "铀废料": "10"
                    },
                    "sourceList": {
                        "铀燃料棒": "0.2"
                    }
                }
            ]
        },
        "钚废料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "核电站",
                    "equIndex": 0,
                    "productList": {
                        "钚废料": "1"
                    },
                    "sourceList": {
                        "钚燃料棒": "0.1"
                    }
                }
            ]
        },
        "蓝色能量蛞蝓": {
            "useIndex": 0,
            "data": []
        },
        "黄色能量蛞蝓": {
            "useIndex": 0,
            "data": []
        },
        "紫色能量蛞蝓": {
            "useIndex": 0,
            "data": []
        },
        "能量碎片": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "5",
                        "暗物质残渣": "60"
                    },
                    "sourceList": {
                        "时间水晶": "10",
                        "暗物质晶体": "10",
                        "石英晶体": "60",
                        "激发态光子物质": "60"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "7.5"
                    },
                    "sourceList": {
                        "蓝色能量蛞蝓": "7.5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "10"
                    },
                    "sourceList": {
                        "黄色能量蛞蝓": "5"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "12.5"
                    },
                    "sourceList": {
                        "紫色能量蛞蝓": "2.5"
                    }
                }
            ]
        },
        "FICSIT兑换券": {
            "useIndex": 0,
            "data": []
        },
        "智能护板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "智能护板": "2"
                    },
                    "sourceList": {
                        "加强铁板": "2",
                        "转子": "2"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "智能护板": "5"
                    },
                    "sourceList": {
                        "加强铁板": "2.5",
                        "转子": "2.5",
                        "塑料": "7.5"
                    }
                }
            ]
        },
        "多功能框架": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "多功能框架": "5"
                    },
                    "sourceList": {
                        "模块化框架": "2.5",
                        "钢梁": "30"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "多功能框架": "7.5"
                    },
                    "sourceList": {
                        "模块化框架": "3.75",
                        "钢梁": "22.5",
                        "橡胶": "30"
                    }
                }
            ]
        },
        "自动线路": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "自动线路": "2.5"
                    },
                    "sourceList": {
                        "定子": "2.5",
                        "电缆": "50"
                    }
                },
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "自动线路": "7.5"
                    },
                    "sourceList": {
                        "定子": "3.75",
                        "电线": "75",
                        "高速连接器": "1.88"
                    }
                }
            ]
        },
        "模块化引擎": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "模块化引擎": "1"
                    },
                    "sourceList": {
                        "电机": "2",
                        "橡胶": "15",
                        "智能护板": "2"
                    }
                }
            ]
        },
        "自适应控制单元": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "自适应控制单元": "1"
                    },
                    "sourceList": {
                        "自动线路": "5",
                        "电路板": "5",
                        "重型模块化框架": "1",
                        "计算机": "2"
                    }
                }
            ]
        },
        "组装编导系统": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "组装编导系统": "0.75"
                    },
                    "sourceList": {
                        "自适应控制单元": "1.5",
                        "超级计算机": "0.75"
                    }
                }
            ]
        },
        "磁场发生器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "磁场发生器": "1"
                    },
                    "sourceList": {
                        "多功能框架": "2.5",
                        "电磁控制杆": "1"
                    }
                }
            ]
        },
        "热推进火箭": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "热推进火箭": "1"
                    },
                    "sourceList": {
                        "模块化引擎": "2.5",
                        "涡轮电机": "1",
                        "冷却系统": "3",
                        "熔合模块化框架": "1"
                    }
                }
            ]
        },
        "核子团": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "核子团": "0.5"
                    },
                    "sourceList": {
                        "铜粉": "100",
                        "压力转换立方体": "0.5"
                    }
                }
            ]
        },
        "生化塑造器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "生化塑造器": "2"
                    },
                    "sourceList": {
                        "组装编导系统": "0.5",
                        "F金三角": "40",
                        "水": "10"
                    }
                }
            ]
        },
        "AI拓展伺服器": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "量子编码器",
                    "equIndex": 0,
                    "productList": {
                        "AI拓展伺服器": "4",
                        "暗物质残渣": "100"
                    },
                    "sourceList": {
                        "磁场发生器": "4",
                        "神经量子处理器": "4",
                        "叠加振荡器": "4",
                        "激发态光子物质": "100"
                    }
                }
            ]
        },
        "镀铝板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "name": "配方",
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "镀铝板": "30",
                    },
                    "sourceList": {
                        "铝锭": "30",
                        "铜锭": "10",
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
                    "energy": 15,
                    "rate": 2
                },
                {
                    "name": "3级采矿机",
                    "energy": 45,
                    "rate": 4
                },
            ]
        },
        "抽水设备": {
            "useIndex": 0,
            "data": [
                {
                    "name": "抽水站",
                    "energy": 20,
                    "rate": 1
                }, {
                    "name": "油井",
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
                    "energy": 1500,
                    "rate": 1
                }
            ]
        },
        "矿井增压器": {
            "useIndex": 0,
            "data": [
                {
                    "name": "矿井增压器",
                    "energy": 150,
                    "rate": 1
                }
            ]
        },
        "量子编码器": {
            "useIndex": 0,
            "data": [
                {
                    "name": "量子编码器",
                    "energy": 0,
                    "rate": 1
                }
            ]
        },
        "转换器": {
            "useIndex": 0,
            "data": [
                {
                    "name": "转换器",
                    "energy": 300,
                    "rate": 1
                }
            ]
        },
        "核电站": {
            "useIndex": 0,
            "data": [
                {
                    "name": "核电站",
                    "energy": -2500,
                    "rate": 1
                }
            ]
        }

    }
}