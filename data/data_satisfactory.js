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
        "Ficsite Ingot": "Ficsite Ingot",
        "Dissolved Silica": "Dissolved Silica",
    },
    "select_dialog_data": {
        "金属锭": ["铁锭", "铜锭", "钦锭", "钢锭", "铝锭", "Ficsite Ingot"],
        "矿物": ["混凝土", "石英晶体", "石英砂", "铜粉", "聚合树脂", "油焦", "铝块"],
        "液体": ["重渣油", "燃料", "液态生物燃料", "涡轮燃料", "氧化铝溶液", "硫酸", "硝酸", "Dissolved Silica"],
        "标准零件": ["铁棒", "螺丝", "铁板", "加强铁板", "铜板", "镀铝板", "铝制外壳", "钢管", "钢梁", "钢筋混凝土梁", "模块化框架", "重型模块化框架", "熔合模块化框架", "Ficsite Trigon", "布料", "塑料", "橡胶"],
        "工业零件": ["转子", "定子", "电池", "电机", "散热器", "冷却系统", "涡轮电机"],
        "电子产品": ["电线", "电缆", "快速线", "电路板", "AI限制器", "高速连接器", "Reanimated SAM", "SAM Fluctuator"],
        "通讯": ["计算机", "超级计算机", "量子计算机", "无线电控制单元", "晶体振荡器", "叠加振荡器"],
        "Quantum Technology": ["Diamonds", "Time Crystal", "Dark Matter Crystal", "Dark Matter Residue", "Singularity Cell", "Excited Photonic Matter", "Neural-Quantum Processor"],
        "容器": ["空罐", "空瓶", "压力转换立方体"],
        "燃料": ["Packaged Rocket Fuel","Packaged Ionized Fuel","铀燃料棒", "钚燃料棒"],
        "核工业品": ["电磁控制杆", "铀核芯", "Non-Fissile Uranium", "贫铀", "钚丸"],
        "特殊": ["智能护板", "多功能框架", "自动线路", "模块化引擎", "自适应控制单元", "组装编导系统", "磁场发生器", "热推进火箭", "核子团", "Biochemical Sculptor", "Ballistic Warp Drive", "AI Expansion Server"],
    },
    "recipe_data": {
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
                        "铜矿石": "10",
                        "铁矿石": "40"
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
                        "铜锭": "30"
                    },
                    "sourceList": {
                        "铜矿石": "30"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铜锭": "100"
                    },
                    "sourceList": {
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": "22.5"
                    },
                    "sourceList": {
                        "油焦": "15",
                        "钦矿石": "45"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "钦锭": "12"
                    },
                    "sourceList": {
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "45"
                    },
                    "sourceList": {
                        "煤": "45"
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "60"
                    },
                    "sourceList": {
                        "煤": "40"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢锭": "100"
                    },
                    "sourceList": {
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铝锭": "60"
                    },
                    "sourceList": {
                        "石英砂": "75",
                        "铝块": "90"
                    }
                },
                {
                    "time": 60,
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
        "Ficsite Ingot": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Ficsite Ingot": "30"
                    },
                    "sourceList": {
                        "Reanimated SAM": "60",
                        "铝锭": "120"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Ficsite Ingot": "15"
                    },
                    "sourceList": {
                        "Reanimated SAM": "45",
                        "钦锭": "60"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Ficsite Ingot": "10"
                    },
                    "sourceList": {
                        "Reanimated SAM": "40",
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "混凝土": "90"
                    },
                    "sourceList": {
                        "橡胶": "20",
                        "石灰石": "100"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "54"
                    },
                    "sourceList": {
                        "煤": "36",
                        "原石英": "75"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "75",
                        "Dissolved Silica": "60"
                    },
                    "sourceList": {
                        "原石英": "120",
                        "硝酸": "10"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": "50",
                        "氧化铝溶液": "120"
                    },
                    "sourceList": {
                        "铝土矿": "120",
                        "水": "180"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "石英砂": "270",
                        "水": "80"
                    },
                    "sourceList": {
                        "石灰石": "50",
                        "Dissolved Silica": "120",
                        "水": "100"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": "30",
                        "燃料": "40"
                    },
                    "sourceList": {
                        "原油": "60"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": "20",
                        "重渣油": "40"
                    },
                    "sourceList": {
                        "原油": "30"
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
                        "油焦": "120"
                    },
                    "sourceList": {
                        "重渣油": "40"
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
                        "铝块": "360",
                        "水": "120"
                    },
                    "sourceList": {
                        "煤": "120",
                        "氧化铝溶液": "240"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "300",
                        "水": "105"
                    },
                    "sourceList": {
                        "油焦": "60",
                        "氧化铝溶液": "180"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铝块": "300",
                        "水": "50"
                    },
                    "sourceList": {
                        "煤": "100",
                        "铝土矿": "150",
                        "硫酸": "50",
                        "水": "60"
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
                        "塑料": "20",
                        "重渣油": "10"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": "20"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "聚合树脂": "20",
                        "重渣油": "40"
                    },
                    "sourceList": {
                        "原油": "30"
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
                        "聚合树脂": "30",
                        "燃料": "40"
                    },
                    "sourceList": {
                        "原油": "60"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "燃料": "100"
                    },
                    "sourceList": {
                        "重渣油": "50",
                        "水": "100"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "燃料": "40"
                    },
                    "sourceList": {
                        "重渣油": "60"
                    }
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": "18.75"
                    },
                    "sourceList": {
                        "压缩煤": "15",
                        "燃料": "22.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": "45"
                    },
                    "sourceList": {
                        "燃料": "15",
                        "重渣油": "30",
                        "油焦": "22.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "涡轮燃料": "30"
                    },
                    "sourceList": {
                        "压缩煤": "30",
                        "重渣油": "37.5"
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
                        "石英砂": "50",
                        "氧化铝溶液": "120"
                    },
                    "sourceList": {
                        "铝土矿": "120",
                        "水": "180"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "氧化铝溶液": "240"
                    },
                    "sourceList": {
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "硫酸": "50"
                    },
                    "sourceList": {
                        "水": "50"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "铀核芯": "25",
                        "硫酸": "10"
                    },
                    "sourceList": {
                        "混凝土": "15",
                        "铀": "50",
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
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "硝酸": "30"
                    },
                    "sourceList": {
                        "铁板": "10",
                        "氮气": "120",
                        "水": "30"
                    }
                }
            ]
        },
        "Dissolved Silica": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "石英晶体": "75",
                        "Dissolved Silica": "60"
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
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "120"
                    },
                    "sourceList": {
                        "Reanimated SAM": "10",
                        "铝土矿": "100"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "120"
                    },
                    "sourceList": {
                        "Reanimated SAM": "10",
                        "钦矿石": "120"
                    }
                },
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "60",
                        "氮气": "240"
                    },
                    "sourceList": {
                        "瓶装氮气": "60"
                    }
                },
                {
                    "time": 60,
                    "equType": "矿井采集器",
                    "equIndex": 0,
                    "productList": {
                        "氮气": "0"
                    },
                    "sourceList": {
                        "氮气": "0"
                    }
                }
            ]
        },
        "Rocket Fuel": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "10",
                        "Rocket Fuel": "100"
                    },
                    "sourceList": {
                        "涡轮燃料": "60",
                        "硝酸": "10"
                    }
                },
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "60",
                        "Rocket Fuel": "120"
                    },
                    "sourceList": {
                        "Packaged Rocket Fuel": "60"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "25",
                        "Rocket Fuel": "150"
                    },
                    "sourceList": {
                        "煤": "50",
                        "燃料": "100",
                        "氮气": "75"
                    }
                }
            ]
        },
        "Ionized Fuel": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "5",
                        "Ionized Fuel": "40"
                    },
                    "sourceList": {
                        "Rocket Fuel": "40",
                        "能量碎片": "2.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "40",
                        "Ionized Fuel": "80"
                    },
                    "sourceList": {
                        "Packaged Ionized Fuel": "40"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "40",
                        "Ionized Fuel": "200"
                    },
                    "sourceList": {
                        "Dark Matter Crystal": "80",
                        "Packaged Rocket Fuel": "240"
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
                        "铁板": "20"
                    },
                    "sourceList": {
                        "铁锭": "30"
                    }
                },
                {
                    "time": 60,
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "铁板": "45"
                    },
                    "sourceList": {
                        "钢锭": "15"
                    }
                },
                {
                    "time": 60,
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
        "铁棒": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
        "加强铁板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "铜板": "22.5"
                    },
                    "sourceList": {
                        "水": "22.5"
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
                        "镀铝板": "30"
                    },
                    "sourceList": {
                        "铜锭": "10",
                        "铝锭": "30"
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
                        "铝制外壳": "60"
                    },
                    "sourceList": {
                        "铝锭": "90"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "铝制外壳": "112.5"
                    },
                    "sourceList": {
                        "铜锭": "75",
                        "铝锭": "150"
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
                        "钢管": "20"
                    },
                    "sourceList": {
                        "钢锭": "30"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢管": "50"
                    },
                    "sourceList": {
                        "混凝土": "30",
                        "钢锭": "50"
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
                        "钢梁": "15"
                    },
                    "sourceList": {
                        "钢锭": "60"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "铸造器",
                    "equIndex": 0,
                    "productList": {
                        "钢梁": "45"
                    },
                    "sourceList": {
                        "混凝土": "80",
                        "钢锭": "120"
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
                        "钢筋混凝土梁": "6"
                    },
                    "sourceList": {
                        "钢梁": "18",
                        "混凝土": "36"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "钢筋混凝土梁": "4"
                    },
                    "sourceList": {
                        "混凝土": "20",
                        "钢管": "24"
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
                        "模块化框架": "2"
                    },
                    "sourceList": {
                        "加强铁板": "3",
                        "铁棒": "12"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "模块化框架": "5"
                    },
                    "sourceList": {
                        "螺丝": "140",
                        "加强铁板": "7.5"
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
                        "重型模块化框架": "2"
                    },
                    "sourceList": {
                        "钢筋混凝土梁": "10",
                        "钢管": "40",
                        "螺丝": "240"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "重型模块化框架": "3.75"
                    },
                    "sourceList": {
                        "橡胶": "75",
                        "螺丝": "390",
                        "模块化框架": "18.75",
                        "钢筋混凝土梁": "11.25"
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
                        "熔合模块化框架": "1.5"
                    },
                    "sourceList": {
                        "铝制外壳": "75",
                        "重型模块化框架": "1.5",
                        "氮气": "37.5"
                    }
                },
                {
                    "time": 60,
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
        "Ficsite Trigon": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "Ficsite Trigon": "30"
                    },
                    "sourceList": {
                        "Ficsite Ingot": "10"
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
                        "布料": "15"
                    },
                    "sourceList": {
                        "菌丝体": "15",
                        "生物质": "75"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "布料": "30"
                    },
                    "sourceList": {
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "塑料": "60"
                    },
                    "sourceList": {
                        "燃料": "30"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "重渣油": "20"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": "60"
                    },
                    "sourceList": {
                        "燃料": "30"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "橡胶": "20"
                    },
                    "sourceList": {
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "转子": "11.25"
                    },
                    "sourceList": {
                        "螺丝": "195",
                        "铜板": "22.5"
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
                        "定子": "5"
                    },
                    "sourceList": {
                        "钢管": "15",
                        "电线": "40"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "电池": "20",
                        "水": "30"
                    },
                    "sourceList": {
                        "铝制外壳": "20",
                        "硫酸": "50",
                        "氧化铝溶液": "40"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "电池": "30"
                    },
                    "sourceList": {
                        "硫": "45",
                        "塑料": "60",
                        "电线": "90",
                        "镀铝板": "52.5"
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
                        "电机": "5"
                    },
                    "sourceList": {
                        "定子": "10"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "电机": "7.5"
                    },
                    "sourceList": {
                        "定子": "3.75",
                        "晶体振荡器": "1.25"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "散热器": "10"
                    },
                    "sourceList": {
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
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "冷却系统": "6"
                    },
                    "sourceList": {
                        "橡胶": "12",
                        "水": "30",
                        "氮气": "150"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": "1.88"
                    },
                    "sourceList": {
                        "橡胶": "45",
                        "电机": "7.5",
                        "无线电控制单元": "3.75"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": "3.75"
                    },
                    "sourceList": {
                        "定子": "15",
                        "瓶装氮气": "45",
                        "电机": "7.5",
                        "压力转换立方体": "1.88"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "涡轮电机": "2.81"
                    },
                    "sourceList": {
                        "转子": "6.56",
                        "无线电控制单元": "8.44",
                        "电磁控制杆": "4.69"
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
                        "电线": "30"
                    },
                    "sourceList": {
                        "铜锭": "15"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电线": "90"
                    },
                    "sourceList": {
                        "钦锭": "3",
                        "铜锭": "12"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": "27.5"
                    },
                    "sourceList": {
                        "橡胶": "5",
                        "快速线": "7.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电缆": "100"
                    },
                    "sourceList": {
                        "橡胶": "30",
                        "电线": "45"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电路板": "12.5"
                    },
                    "sourceList": {
                        "石英砂": "27.5"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "AI限制器": "8"
                    },
                    "sourceList": {
                        "塑料": "28",
                        "快速线": "120"
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
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "高速连接器": "3"
                    },
                    "sourceList": {
                        "电路板": "3",
                        "快速线": "90",
                        "石英砂": "37.5"
                    }
                }
            ]
        },
        "Reanimated SAM": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "构造器",
                    "equIndex": 0,
                    "productList": {
                        "Reanimated SAM": "30"
                    },
                    "sourceList": {
                        "SAM": "120"
                    }
                }
            ]
        },
        "SAM Fluctuator": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "SAM Fluctuator": "10"
                    },
                    "sourceList": {
                        "钢管": "30",
                        "电线": "50",
                        "Reanimated SAM": "60"
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
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": "2.4"
                    },
                    "sourceList": {
                        "电池": "24",
                        "电线": "60",
                        "计算机": "7.2",
                        "电磁控制杆": "2.4"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "超级计算机": "3"
                    },
                    "sourceList": {
                        "冷却系统": "6"
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
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": "4.5"
                    },
                    "sourceList": {
                        "电路板": "15",
                        "橡胶": "45",
                        "铝制外壳": "90",
                        "晶体振荡器": "1.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "无线电控制单元": "3.75"
                    },
                    "sourceList": {
                        "散热器": "15",
                        "石英晶体": "45",
                        "高速连接器": "7.5"
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
                        "晶体振荡器": "1"
                    },
                    "sourceList": {
                        "电缆": "14",
                        "石英晶体": "18",
                        "加强铁板": "2.5"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "叠加振荡器": "5",
                        "Dark Matter Residue": "125000"
                    },
                    "sourceList": {
                        "晶体振荡器": "5",
                        "Dark Matter Crystal": "30",
                        "镀铝板": "45",
                        "Excited Photonic Matter": "125000"
                    }
                }
            ]
        },
        "Diamonds": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Diamonds": "30"
                    },
                    "sourceList": {
                        "煤": "600"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Diamonds": "20"
                    },
                    "sourceList": {
                        "煤": "240",
                        "石灰石": "480"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Diamonds": "40"
                    },
                    "sourceList": {
                        "原油": "200"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Diamonds": "30"
                    },
                    "sourceList": {
                        "油焦": "720"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Diamonds": "15"
                    },
                    "sourceList": {
                        "石英晶体": "45",
                        "煤": "120"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Diamonds": "60"
                    },
                    "sourceList": {
                        "桶装涡轮燃料": "40",
                        "煤": "600"
                    }
                }
            ]
        },
        "Time Crystal": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Time Crystal": "6"
                    },
                    "sourceList": {
                        "Diamonds": "12"
                    }
                }
            ]
        },
        "Dark Matter Crystal": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Dark Matter Crystal": "30"
                    },
                    "sourceList": {
                        "Diamonds": "30",
                        "Dark Matter Residue": "150000"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Dark Matter Crystal": "20"
                    },
                    "sourceList": {
                        "Dark Matter Residue": "200000"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Dark Matter Crystal": "60"
                    },
                    "sourceList": {
                        "Time Crystal": "30",
                        "Dark Matter Residue": "150000"
                    }
                }
            ]
        },
        "Dark Matter Residue": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "AI Expansion Server": "4",
                        "Dark Matter Residue": "100000"
                    },
                    "sourceList": {
                        "叠加振荡器": "4",
                        "Excited Photonic Matter": "100000"
                    }
                },
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "Dark Matter Residue": "60000"
                    },
                    "sourceList": {
                        "SAM Fluctuator": "12.5",
                        "叠加振荡器": "7.5",
                        "Excited Photonic Matter": "60000"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Dark Matter Residue": "100000"
                    },
                    "sourceList": {
                        "Reanimated SAM": "50"
                    }
                },
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "Ficsonium Fuel Rod": "2.5",
                        "Dark Matter Residue": "50000"
                    },
                    "sourceList": {
                        "电磁控制杆": "5",
                        "Ficsite Trigon": "100",
                        "Excited Photonic Matter": "50000"
                    }
                },
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "Neural-Quantum Processor": "3",
                        "Dark Matter Residue": "75000"
                    },
                    "sourceList": {
                        "超级计算机": "3",
                        "Time Crystal": "15",
                        "Ficsite Trigon": "45",
                        "Excited Photonic Matter": "75000"
                    }
                },
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "5",
                        "Dark Matter Residue": "60000"
                    },
                    "sourceList": {
                        "Dark Matter Crystal": "10",
                        "石英晶体": "60",
                        "Excited Photonic Matter": "60000"
                    }
                },
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "叠加振荡器": "5",
                        "Dark Matter Residue": "125000"
                    },
                    "sourceList": {
                        "晶体振荡器": "5",
                        "Dark Matter Crystal": "30",
                        "镀铝板": "45",
                        "Excited Photonic Matter": "125000"
                    }
                }
            ]
        },
        "Singularity Cell": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "Singularity Cell": "10"
                    },
                    "sourceList": {
                        "核子团": "1",
                        "Dark Matter Crystal": "20",
                        "铁板": "100",
                        "混凝土": "200"
                    }
                }
            ]
        },
        "Excited Photonic Matter": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "Excited Photonic Matter": "200000"
                    },
                    "sourceList": {}
                }
            ]
        },
        "Neural-Quantum Processor": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "Neural-Quantum Processor": "3",
                        "Dark Matter Residue": "75000"
                    },
                    "sourceList": {
                        "超级计算机": "3",
                        "Time Crystal": "15",
                        "Ficsite Trigon": "45",
                        "Excited Photonic Matter": "75000"
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
                        "空罐": "60"
                    },
                    "sourceList": {
                        "塑料": "30"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "空罐": "60"
                    },
                    "sourceList": {
                        "铜板": "15",
                        "铁板": "30"
                    }
                }
            ]
        },
        "空瓶": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "40",
                        "Ionized Fuel": "80"
                    },
                    "sourceList": {
                        "Packaged Ionized Fuel": "40"
                    }
                },
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "60",
                        "Rocket Fuel": "120"
                    },
                    "sourceList": {
                        "Packaged Rocket Fuel": "60"
                    }
                },
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "空瓶": "60",
                        "氮气": "240"
                    },
                    "sourceList": {
                        "瓶装氮气": "60"
                    }
                },
                {
                    "time": 60,
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
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装水": "60"
                    },
                    "sourceList": {
                        "水": "60"
                    }
                }
            ]
        },
        "桶装氧化铝溶液": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装氧化铝溶液": "120"
                    },
                    "sourceList": {
                        "氧化铝溶液": "120"
                    }
                }
            ]
        },
        "桶装硫酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装硫酸": "40"
                    },
                    "sourceList": {
                        "硫酸": "40"
                    }
                }
            ]
        },
        "桶装硝酸": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装硝酸": "30"
                    },
                    "sourceList": {
                        "硝酸": "30"
                    }
                }
            ]
        },
        "瓶装氮气": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "瓶装氮气": "60"
                    },
                    "sourceList": {
                        "空瓶": "60",
                        "氮气": "240"
                    }
                }
            ]
        },
        "桶装石油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装石油": "30"
                    },
                    "sourceList": {
                        "原油": "30"
                    }
                }
            ]
        },
        "桶装重渣油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装重渣油": "30"
                    },
                    "sourceList": {
                        "重渣油": "30"
                    }
                }
            ]
        },
        "固体生物燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
        "桶装燃油": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装燃油": "40"
                    },
                    "sourceList": {
                        "燃料": "40"
                    }
                },
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "桶装燃油": "60"
                    },
                    "sourceList": {
                        "桶装水": "60",
                        "重渣油": "30"
                    }
                }
            ]
        },
        "桶装液态生物燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装液态生物燃料": "40"
                    },
                    "sourceList": {
                        "液态生物燃料": "40"
                    }
                }
            ]
        },
        "桶装涡轮燃料": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "桶装涡轮燃料": "20"
                    },
                    "sourceList": {
                        "涡轮燃料": "20"
                    }
                }
            ]
        },
        "Packaged Rocket Fuel": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "Packaged Rocket Fuel": "60"
                    },
                    "sourceList": {
                        "空瓶": "60",
                        "Rocket Fuel": "120"
                    }
                }
            ]
        },
        "Packaged Ionized Fuel": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "灌装机",
                    "equIndex": 0,
                    "productList": {
                        "Packaged Ionized Fuel": "40"
                    },
                    "sourceList": {
                        "空瓶": "40",
                        "Ionized Fuel": "80"
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
                        "铀燃料棒": "0.4"
                    },
                    "sourceList": {
                        "电磁控制杆": "2",
                        "铀核芯": "20",
                        "钢筋混凝土梁": "1.2"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "铀燃料棒": "0.6"
                    },
                    "sourceList": {
                        "转子": "2",
                        "铀核芯": "20",
                        "晶体振荡器": "0.6"
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
        "电磁控制杆": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电磁控制杆": "4"
                    },
                    "sourceList": {
                        "AI限制器": "4",
                        "定子": "6"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "电磁控制杆": "8"
                    },
                    "sourceList": {
                        "高速连接器": "4",
                        "定子": "8"
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
                        "铀核芯": "25",
                        "硫酸": "10"
                    },
                    "sourceList": {
                        "混凝土": "15",
                        "铀": "50",
                        "硫酸": "40"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "铀核芯": "20"
                    },
                    "sourceList": {
                        "石英砂": "15",
                        "硫": "25",
                        "快速线": "75"
                    }
                }
            ]
        },
        "Non-Fissile Uranium": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "Non-Fissile Uranium": "50",
                        "水": "15"
                    },
                    "sourceList": {
                        "石英砂": "25",
                        "铀废料": "37.5",
                        "硫酸": "15"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "Non-Fissile Uranium": "100",
                        "水": "40"
                    },
                    "sourceList": {
                        "硫酸": "25",
                        "硝酸": "15"
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
                        "钚丸": "30"
                    },
                    "sourceList": {
                        "铀废料": "25",
                        "Non-Fissile Uranium": "100"
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
                        "钚核芯": "5"
                    },
                    "sourceList": {
                        "钚丸": "10",
                        "混凝土": "20"
                    }
                },
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "钚核芯": "10"
                    },
                    "sourceList": {
                        "铝制外壳": "10",
                        "Non-Fissile Uranium": "75"
                    }
                }
            ]
        },
        "Ficsonium": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "粒子加速器",
                    "equIndex": 0,
                    "productList": {
                        "Ficsonium": "10"
                    },
                    "sourceList": {
                        "Singularity Cell": "10",
                        "Dark Matter Residue": "200000"
                    }
                }
            ]
        },
        "Ficsonium Fuel Rod": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "Ficsonium Fuel Rod": "2.5",
                        "Dark Matter Residue": "50000"
                    },
                    "sourceList": {
                        "电磁控制杆": "5",
                        "Ficsite Trigon": "100",
                        "Excited Photonic Matter": "50000"
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
        "压缩煤": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "精炼厂",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "5",
                        "Ionized Fuel": "40"
                    },
                    "sourceList": {
                        "Rocket Fuel": "40",
                        "能量碎片": "2.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "10",
                        "Rocket Fuel": "100"
                    },
                    "sourceList": {
                        "涡轮燃料": "60",
                        "硝酸": "10"
                    }
                },
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "25"
                    },
                    "sourceList": {
                        "硫": "25"
                    }
                },
                {
                    "time": 60,
                    "equType": "1级采矿机",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "40",
                        "Ionized Fuel": "200"
                    },
                    "sourceList": {
                        "Dark Matter Crystal": "80",
                        "Packaged Rocket Fuel": "240"
                    }
                },
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "压缩煤": "25",
                        "Rocket Fuel": "150"
                    },
                    "sourceList": {
                        "煤": "50",
                        "燃料": "100",
                        "氮气": "75"
                    }
                }
            ]
        },
        "能量碎片": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "能量碎片": "5",
                        "Dark Matter Residue": "60000"
                    },
                    "sourceList": {
                        "Dark Matter Crystal": "10",
                        "石英晶体": "60",
                        "Excited Photonic Matter": "60000"
                    }
                },
                {
                    "time": 60,
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
        "智能护板": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "智能护板": "2"
                    },
                    "sourceList": {
                        "转子": "2",
                        "加强铁板": "2"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "智能护板": "5"
                    },
                    "sourceList": {
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "多功能框架": "5"
                    },
                    "sourceList": {
                        "钢梁": "30",
                        "模块化框架": "2.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "多功能框架": "7.5"
                    },
                    "sourceList": {
                        "橡胶": "30",
                        "模块化框架": "3.75",
                        "钢梁": "22.5"
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
                        "自动线路": "2.5"
                    },
                    "sourceList": {
                        "电缆": "50",
                        "定子": "2.5"
                    }
                },
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "自动线路": "7.5"
                    },
                    "sourceList": {
                        "电线": "75",
                        "定子": "3.75",
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
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "模块化引擎": "1"
                    },
                    "sourceList": {
                        "智能护板": "2",
                        "橡胶": "15"
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
                        "自适应控制单元": "1"
                    },
                    "sourceList": {
                        "重型模块化框架": "1",
                        "计算机": "2",
                        "电路板": "5"
                    }
                }
            ]
        },
        "组装编导系统": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
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
                    "equType": "组装器",
                    "equIndex": 0,
                    "productList": {
                        "磁场发生器": "1"
                    },
                    "sourceList": {
                        "电磁控制杆": "1",
                        "多功能框架": "2.5"
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
                        "热推进火箭": "1"
                    },
                    "sourceList": {
                        "熔合模块化框架": "1",
                        "冷却系统": "3",
                        "模块化引擎": "2.5"
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
                        "核子团": "0.5"
                    },
                    "sourceList": {
                        "铜粉": "100",
                        "压力转换立方体": "0.5"
                    }
                }
            ]
        },
        "Biochemical Sculptor": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "搅拌器",
                    "equIndex": 0,
                    "productList": {
                        "Biochemical Sculptor": "2"
                    },
                    "sourceList": {
                        "Ficsite Trigon": "40",
                        "组装编导系统": "0.5",
                        "水": "10"
                    }
                }
            ]
        },
        "Ballistic Warp Drive": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "制造器",
                    "equIndex": 0,
                    "productList": {
                        "Ballistic Warp Drive": "1"
                    },
                    "sourceList": {
                        "热推进火箭": "1",
                        "叠加振荡器": "2",
                        "Singularity Cell": "5",
                        "Dark Matter Crystal": "40"
                    }
                }
            ]
        },
        "AI Expansion Server": {
            "useIndex": 0,
            "data": [
                {
                    "time": 60,
                    "equType": "Quantum Encoder",
                    "equIndex": 0,
                    "productList": {
                        "AI Expansion Server": "4",
                        "Dark Matter Residue": "100000"
                    },
                    "sourceList": {
                        "叠加振荡器": "4",
                        "Excited Photonic Matter": "100000"
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
        "Quantum Encoder": {
            "useIndex": 0,
            "data": [
                {
                    "name": "Quantum Encoder",
                    "energy": 0,
                    "rate": 1
                }
            ]
        }

    }
}