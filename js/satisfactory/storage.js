class Storage {
    constructor() {
        this.storage = {};
        this.loadFromLocalStorage();
    }

    // 从 localStorage 加载数据
    loadFromLocalStorage() {
        const storedData = localStorage.getItem('appStorage');
        if (storedData) {
            this.storage = JSON.parse(storedData);
        }
    }

    // 保存数据到 localStorage
    saveToLocalStorage() {
        localStorage.setItem('appStorage', JSON.stringify(this.storage));
    }

    // 设置 key 和 value
    set(key, value) {
        this.storage[key] = value;
        this.saveToLocalStorage();
    }

    // 获取指定 key 的 value
    get(key) {
        return this.storage[key];
    }

    // 获取所有的 key-value 对
    getAll() {
        return this.storage;
    }

    // 清除所有数据
    clear() {
        this.storage = {};
        localStorage.removeItem('appStorage');
    }
}
