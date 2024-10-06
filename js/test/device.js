/*
设备管理
具备：
1、设备数据
2、操作函数
 */

// 设备类型中默认选中的位置
let deviceIndexMap = {};

/**
 * 获取设备类型对应的数据列表
 */
function getDeviceList(deviceName) {
    return deviceData[deviceName]
}

/**
 * 获取设备类型中默认选中的设备
 */
function getDevice(deviceName) {
    // 如果indexMap中没有deviceName，则从deviceData中获取第一个设备
    if (!deviceIndexMap[deviceName]) {
        deviceIndexMap[deviceName] = 0
    }

    const index = deviceIndexMap[deviceName]
    return deviceData[deviceName][index]
}

/**
 * 根据设备类型，获取第一个设备
 */
function getFirstDevice(deviceName) {
    return deviceData[deviceName][0]
}

/**
 * 根据设备类型和位置，获取设备
 */
function getDeviceByIndex(deviceName, index) {
    return deviceData[deviceName][index]
}

/**
 * 修改设备默认值
 */
function setDefaultDevice(deviceName, index) {
    deviceIndexMap[deviceName] = index
}

/**
 * 获取设备电量
 */
function getDeviceElectricity(deviceName) {
    // 遍历deviceData，在key对应的value列表中，找到name和deviceName相同的设备，返回其energy
    for (let key in deviceData) {
        for (let i = 0; i < deviceData[key].length; i++) {
            if (deviceData[key][i].name === deviceName) {
                return deviceData[key][i].energy
            }
        }
    }
    return 0
}
