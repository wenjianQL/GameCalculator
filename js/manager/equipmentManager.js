// 设备类型数组
let deviceTypes = [];

// 设备数组
let devices = [];

// 添加设备类型
function addDeviceType() {
    const deviceTypeNameInput = document.getElementById("deviceTypeNameInput");
    const deviceTypeName = deviceTypeNameInput.value;

    // 将设备类型添加到数组
    // deviceTypes.push(deviceTypeName);
    let equipment = game_data["equipment"];
    if (!equipment.hasOwnProperty(deviceTypeName)) {
        equipment[deviceTypeName] = {
            "useIndex": 0,
            "data": []
        }
    }
    saveDataToLocalStorage()

    // 清空输入框
    deviceTypeNameInput.value = "";

    // 更新设备类型列表和设备表格
    updateDeviceTypeSelect();
    updateDeviceTable();

    equipmentBtnClick("save", "device-type")
}

// 添加设备
function addDevice() {
    const equTypeSelect = document.getElementById("equTypeSelect");
    const deviceType = equTypeSelect.value;

    if (deviceType === "") {
        alert("请选择设备类型!");
        return;
    }

    const equNameInput = document.getElementById("equNameInput");
    const deviceName = equNameInput.value;

    const equPowerInput = document.getElementById("equPowerInput");
    const devicePower = equPowerInput.value;

    const equEnergyInput = document.getElementById("equEnergyInput");
    const deviceRate = equEnergyInput.value;

    // 创建设备对象
    let equDataList = game_data["equipment"][deviceType]["data"];
    for (let i = 0; i < equDataList.length; i++) {
        let item = equDataList[i];
        if (item["name"] === deviceName) {
            alert("设备名称重复");
            return;
        }
    }

    equDataList.push({
        "name": deviceName,
        "energy": devicePower,
        "rate": deviceRate
    })
    saveDataToLocalStorage()

    // 清空输入框
    equNameInput.value = "";
    equPowerInput.value = "";
    equEnergyInput.value = "";

    // 更新设备表格
    updateDeviceTable();

    equipmentBtnClick("save", "device");
}

function saveEditDevice() {
    // 从id中获取value
    // editEquModalLabel
    let splits = document.getElementById("editEquModalLabel").value.split("-");
    let deviceType = splits[0];
    let deviceIndex = parseInt(splits[1]);

    // editEquTypeSelect
    let oldEqyType = document.getElementById("editEquTypeSelect").value;
    if (oldEqyType !== deviceType) {
        alert("设备类型不允许修改，如有需要，请删除重建。");
        // todo 修改成数据库的形式后，才能进行修改。
        return;
    }

    let list = game_data["equipment"][deviceType].data;
    let data = list[deviceIndex];
    data["name"] = document.getElementById("editEquNameInput").value;
    data["energy"] = parseFloat(document.getElementById("editEquEnergyInput").value);
    data["rate"] = parseFloat(document.getElementById("editEquRateInput").value);

    saveDataToLocalStorage();
    updateDeviceTable();
}

// 更新设备类型选择框
function updateDeviceTypeSelect() {
    const equTypeSelect = document.getElementById("equTypeSelect");
    equTypeSelect.innerHTML = "";

    let equipment = game_data["equipment"];
    for (let deviceType in equipment) {
        let option = document.createElement("option");
        option.value = deviceType;
        option.innerText = deviceType;
        equTypeSelect.appendChild(option);
    }
}

function updateDeviceTypeInEditDialog() {
    const node = document.getElementById("editEquTypeSelect");
    node.innerHTML = "";

    let equipment = game_data["equipment"];
    for (let deviceType in equipment) {
        let option = document.createElement("option");
        option.value = deviceType;
        option.innerText = deviceType;
        node.appendChild(option);
    }
}

// 更新设备表格
function updateDeviceTable() {
    const deviceTableBody = document.getElementById("deviceTableBody");
    deviceTableBody.innerHTML = "";

    let equipment = game_data["equipment"];
    for (const deviceType in equipment) {
        let list = equipment[deviceType]["data"];
        for (let i = 0; i < list.length; i++) {
            let item = list[i];
            const row = document.createElement("tr");
            const deviceTypeCell = document.createElement("td");
            const deviceNameCell = document.createElement("td");
            const deviceRateCell = document.createElement("td");
            const devicePowerCell = document.createElement("td");
            const operationCell = document.createElement("td");

            deviceTypeCell.innerText = deviceType;
            deviceNameCell.innerText = item.name;
            deviceRateCell.innerText = item.rate;
            devicePowerCell.innerText = item.energy;
            const editButton = document.createElement("button");
            editButton.innerText = "编辑";
            editButton.className = "btn btn-sm btn-primary float-right m-t-n-xs";
            editButton.onclick = function() {
                editDevice(deviceType, i);
                equipmentBtnClick("edit", "device")
            };
            const deleteButton = document.createElement("button");
            deleteButton.innerText = "删除";
            deleteButton.style.marginLeft = "10px";
            deleteButton.className = "btn btn-sm btn-danger float-right m-t-n-xs";
            deleteButton.onclick = function() {
                deleteDevice(deviceType, i);
                equipmentBtnClick("delete", "device")
            };
            operationCell.appendChild(deleteButton);
            operationCell.appendChild(editButton);
            row.appendChild(deviceTypeCell);
            row.appendChild(deviceNameCell);
            row.appendChild(deviceRateCell);
            row.appendChild(devicePowerCell);
            row.appendChild(operationCell);
            deviceTableBody.appendChild(row);
        }
    }
}

// 编辑设备
function editDevice(deviceType, index) {
    $('#editEquModal').modal('show');
    // 生成可供选择的设备类型
    updateDeviceTypeInEditDialog();
    // 获取index对应的数据
    let data = game_data["equipment"][deviceType]["data"][index];
    // 将数据设置到view上
    // editEquModalLabel
    document.getElementById("editEquModalLabel").value = deviceType + "-" + index;
    // editEquNameInput
    document.getElementById("editEquNameInput").value = data.name;
    // editEquRateInput
    document.getElementById("editEquRateInput").value = parseFloat(data.rate);
    // editEquEnergyInput
    document.getElementById("editEquEnergyInput").value = parseFloat(data.energy);
}

// 删除设备
function deleteDevice(deviceType, index) {
    let equipments = game_data["equipment"][deviceType]["data"];
    if (index < 0 || index >= equipments.length) {
        return;
    }
    equipments.splice(index, 1);
    saveDataToLocalStorage();
    updateDeviceTable();
}

function updateEquTypeManagerTable() {
    let editEquBody = document.getElementById("editEquBody");
    editEquBody.innerHTML = "";

    let equipment = game_data["equipment"];
    let deviceTypes = Object.keys(equipment).reverse();
    for (let deviceType of deviceTypes) {
        const row = document.createElement("tr");
        const equTypeName = document.createElement("td");
        const saveBtnCell = document.createElement("td");
        const deleteBtnCell = document.createElement("td");

        const inputNode = document.createElement("input");
        inputNode.type = "text";
        inputNode.id = deviceType + "-input";
        inputNode.value = deviceType;
        equTypeName.appendChild(inputNode);

        const saveButton = document.createElement("button");
        saveButton.innerText = "保存";
        saveButton.id = deviceType + "-save";
        saveButton.className = "btn btn-primary";
        saveButton.onclick = function(event) {
            let typeName = event.target.id.replace("-save", "");
            let inputNode = document.getElementById(typeName + "-input");
            if (inputNode) {
                let newName = inputNode.value;
                const equipment = game_data["equipment"];
                const updatedEquipment = {
                    [newName]: equipment[typeName]
                };
                delete equipment[typeName];

                // 获取当前键数组顺序
                const keys = Object.keys(equipment);
                const index = keys.indexOf(typeName);

                // 按照之前的键数组顺序将更新后的键值对添加回equipment对象
                if (index !== -1) {
                    keys.splice(index, 0, newName);
                    const orderedEquipment = {};
                    for (let key of keys) {
                        orderedEquipment[key] = equipment[key];
                    }
                    Object.assign(equipment, orderedEquipment);
                } else {
                    Object.assign(equipment, updatedEquipment);
                }
            }
            saveDataToLocalStorage();
            updateEquTypeManagerTable();
        };

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "删除";
        deleteButton.id = deviceType + "-delete";
        deleteButton.setAttribute("data-dismiss", "modal");
        deleteButton.className = "btn btn-danger";
        deleteButton.onclick = function(event) {
            let typeName = event.target.id.replace("-delete", "");
            const equipment = game_data["equipment"];
            delete equipment[typeName];

            const recipeData = game_data["recipe_data"];
            for (let key in recipeData) {
                let dataList = recipeData[key]["data"];
                dataList = dataList.filter(function(item) {
                    return item.equType !== typeName;
                });
                recipeData[key]["useIndex"] = 0;
                recipeData[key]["data"] = dataList;
            }
            saveDataToLocalStorage();
            updateDeviceTable();
        };

        saveBtnCell.appendChild(saveButton);
        deleteBtnCell.appendChild(deleteButton);

        row.appendChild(equTypeName);
        row.appendChild(saveBtnCell);
        row.appendChild(deleteBtnCell);

        editEquBody.appendChild(row);
    }
}

function addEditEquDialog() {
    let str = `
<div class="modal-dialog" role="document">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="editEquModalLabel">编辑设备</h5>
            <button type="button" class="close" data-dismiss="modal"
                    aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form id="editEquForm">
                <div class="form-group">
                    <label for="editEquTypeSelect">设备类型：</label>
                    <select id="editEquTypeSelect">
                        <!-- 动态生成设备类型选项 -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="editEquNameInput">设备名字：</label>
                    <input type="text" id="editEquNameInput"
                           placeholder="设备名字" value="">
                </div>
                <div class="form-group">
                    <label for="editEquRateInput">设备倍率：</label>
                    <input type="number" id="editEquRateInput"
                           class="form-control" step="0.1" value="1">
                </div>
                <div class="form-group">
                    <label for="editEquEnergyInput">设备耗能：</label>
                    <input type="text" id="editEquEnergyInput"
                           class="form-control" step="0.1"
                           placeholder="设备耗能" value="">
                </div>

            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary"
                    data-dismiss="modal">取消
            </button>
            <button type="button" class="btn btn-primary"
                    data-dismiss="modal" onclick="saveEditDevice()">保存
            </button>
        </div>
    </div>
</div>
    `;

    // editEquModal
    let node = document.getElementById("editEquModal");
    if (node) {
        node.innerHTML = str;
    }
}