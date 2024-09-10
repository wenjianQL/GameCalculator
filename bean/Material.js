class Material {
    constructor(key, name, imagePath, category, x, y) {
        // 唯一标识
        this.key = key;
        // 名字
        this.name = name;
        // 图片地址
        this.icon = icon;
        // 一级分类
        this.firstCategory = firstCategory;
        // 二级分类
        this.secondCategory = secondCategory;
        // 物品分类：0-材料，1-制造设备，2-传送带，3-增产剂。（有其它的再扩充。）
        this.category = category;
        this.x = x;
        this.y = y;
    }
}
