/**
 * 设备数据
 */
const deviceData = {
    "冶炼器": [
        {
            "name": "冶炼器",
            "energy": 4,
            "rate": 1
        }
    ],
    "铸造器": [
        {
            "name": "铸造器",
            "energy": 16,
            "rate": 1
        }
    ],
    "构造器": [
        {
            "name": "构造器",
            "energy": 4,
            "rate": 1
        }
    ],
    "组装器": [
        {
            "name": "组装器",
            "energy": 15,
            "rate": 1
        }
    ],
    "制造器": [
        {
            "name": "制造器",
            "energy": 55,
            "rate": 1
        }
    ],
    "精炼厂": [
        {
            "name": "精炼厂",
            "energy": 30,
            "rate": 1
        }
    ],
    "灌装机": [
        {
            "name": "灌装机",
            "energy": 10,
            "rate": 1
        }
    ],
    "搅拌器": [
        {
            "name": "搅拌器",
            "energy": 75,
            "rate": 1
        }
    ],
    "采矿机": [
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
    ],
    "抽水设备": [
        {
            "name": "抽水站",
            "energy": 20,
            "rate": 1
        }, {
            "name": "油井",
            "energy": 40,
            "rate": 1
        }
    ],
    "粒子加速器": [
        {
            "name": "粒子加速器",
            "energy": 1500,
            "rate": 1
        }
    ],
    "矿井增压器": [
        {
            "name": "矿井增压器",
            "energy": 150,
            "rate": 1
        }
    ],
    "量子编码器": [
        {
            "name": "量子编码器",
            "energy": 0,
            "rate": 1
        }
    ],
    "转换器": [
        {
            "name": "转换器",
            "energy": 300,
            "rate": 1
        }
    ]
}

/**
 * 配方数据
 */
const recipeData = {
    "铁矿石": [
        {
            "equType": "采矿机",
            "productList": {
                // "铁矿石": "30"
            },
            "sourceList": {}
        }
    ],
    "石灰石": [
        {
            "equType": "采矿机",
            "productList": {
                "石灰石": "30"
            },
            "sourceList": {}
        }
    ],
    "水": [
        {
            "equType": "抽水设备",
            "productList": {
                "水": "30"
            },
            "sourceList": {}
        }
    ],
    "铁锭": [
        {
            "equType": "冶炼器",
            "productList": {
                "铁锭": "30",
                "铁屑": "10"
            },
            "sourceList": {
                "铁矿石": "30"
            }
        },
        {
            "equType": "铸造器",
            "productList": {
                "铁锭": "50"
            },
            "sourceList": {
                "铁矿石": "25",
                "石灰石": "40"
            }
        },
        {
            "equType": "精炼厂",
            "productList": {
                "铁锭": "65",
            },
            "sourceList": {
                "铁矿石": "35",
                "水": "20"
            }
        },
    ],
    "铁板": [
        {
            "equType": "构造器",
            "productList": {
                "铁板": "20"
            },
            "sourceList": {
                "铁锭": "30"
            }
        }
    ],
}