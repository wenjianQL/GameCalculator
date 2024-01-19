function updateRecipeTable(searchStr = "") {
    let tableBody = document.getElementById("recipeTableBody");
    tableBody.innerHTML = "";

    let recipeData = game_data["recipe_data"];
    for (const itemName in recipeData) {
        if (searchStr !== "" && !itemName.includes(searchStr)) {
            continue;
        }

        let dataList = recipeData[itemName].data;
        for (let i = 0; i < dataList.length; i++) {
            let item = dataList[i];
            let proList = item.productList;
            let sourceList = item.sourceList;

            const tr = document.createElement('tr');

            let targetTd = document.createElement('td');
            let targetProductNumber = proList[itemName]
            targetTd.textContent = targetProductNumber + "*" + itemName;
            tr.appendChild(targetTd);

            let surplusTargetTd = document.createElement("td");
            let surplusStr = "";
            for (let key in proList) {
                if (key === itemName) {
                    continue;
                }
                surplusStr += proList[key] + "*" + key + " + ";
            }
            surplusTargetTd.textContent = surplusStr.substring(0, surplusStr.length - 2);
            tr.appendChild(surplusTargetTd);

            let sourceTd = document.createElement('td');
            let sourceStr = "";
            for (let key in sourceList) {
                sourceStr += sourceList[key] + "*" + key + " + ";
            }
            sourceTd.textContent = sourceStr.substring(0, sourceStr.length - 2);
            tr.appendChild(sourceTd);

            let timeTd = document.createElement('td');
            timeTd.textContent = item.time.toString() + "s";
            tr.appendChild(timeTd);

            let equipTd = document.createElement('td');
            equipTd.textContent = item.equType;
            tr.appendChild(equipTd);


            let editTd = document.createElement('td');

            let editBtn = document.createElement("button");
            editBtn.className = "btn btn-primary";
            editBtn.type = "button";
            editBtn.textContent = "编辑";
            editBtn.onclick = function () {
                recipeBtnClick("edit")
                $('#editModal').modal('show');
                initEditModal(item);
                updateEditRecipeEquSelect();
            }
            editTd.appendChild(editBtn);

            let deleteBtn = document.createElement("button");
            deleteBtn.className = "btn btn-danger";
            deleteBtn.type = "button";
            deleteBtn.textContent = "删除";
            deleteBtn.style.marginLeft = "16px";
            deleteBtn.onclick = function () {
                recipeBtnClick("delete")
                let list = game_data["recipe_data"][itemName]["data"];
                list.splice(i, 1);
                if (list.length === 0) {
                    delete game_data["recipe_data"][itemName];
                }
                saveDataToLocalStorage();
                // 刷新表格
                updateRecipeTable();
            }
            editTd.appendChild(deleteBtn);
            tr.appendChild(editTd);

            tableBody.appendChild(tr);
        }
    }
}

// 新增产物行
function addProductRow(containerId) {
    const container = document.getElementById(containerId);
    const row = document.createElement("div");
    row.classList.add("form-row");
    row.innerHTML = `
        <div class="form-group col-md-6">
          <input type="text" class="form-control" placeholder="产物名称" required>
        </div>
        <div class="form-group col-md-4">
          <input type="number" class="form-control" placeholder="数量" value="1" required>
        </div>
        <div class="form-group col-md-2">
          <button type="button" class="btn btn-danger" onclick="deleteRow(this)">删除</button>
        </div>
      `;
    container.appendChild(row);
}

// 删除行
function deleteRow(button) {
    button.closest(".form-row").remove();
}

// 保存数据
function saveAddRecipeData() {
    const time = parseInt(document.getElementById("timeInput").value);
    const equType = document.getElementById("addRecipeEquSelect").value;
    const products = getFormData("productList");
    const materials = getFormData("materialList");

    if (!game_data["equipment"].hasOwnProperty(equType)) {
        alert("请先添加设备类型！若无设备类型，则设备名字就是设备类型。");
        return;
    }

    let realProducts = {}
    products.forEach(product => {
        realProducts[product["name"]] = parseInt(product["quantity"])
    })
    let realMaterials = {}
    materials.forEach(material => {
        realMaterials[material["name"]] = parseInt(material["quantity"])
    })

    let recipeData = game_data["recipe_data"];
    // 遍历配方数据，给对应的产物添加配方。（如果有两个产物，那么每个产物都需要添加配方。）
    products.forEach(product => {
        let name = product["name"]
        let item = {
            "time": time,
            "material": name,
            "equType": equType,
            "equIndex": 0,
            "productList": realProducts,
            "sourceList": realMaterials
        };

        if (recipeData.hasOwnProperty(name)) {
            recipeData[name]["data"].push(item)
        } else {
            recipeData[name] = {
                "useIndex": 0,
                "data": [item]
            }
        }

        saveDataToLocalStorage();
        // 刷新表格
        updateRecipeTable();
        loadCalPagerMaterialList();
    })
}

// 获取表单数据
function getFormData(containerId) {
    const container = document.getElementById(containerId);
    const rows = container.getElementsByClassName("form-row");
    const data = [];

    for (let i = 0; i < rows.length; i++) {
        const nameInput = rows[i].querySelector("input[type='text']");
        const quantityInput = rows[i].querySelector("input[type='number']");
        const name = nameInput.value;
        const quantity = quantityInput.value;

        if (name && quantity) {
            data.push({
                name: name,
                quantity: quantity
            });
        }
    }

    return data;
}

// 初始化编辑弹窗数据
function initEditModal(data) {
    // set id for find index in saveData function
    document.getElementById("editDataMaterial").value = data["material"];
    document.getElementById("editDataId").value = data["id"];
    document.getElementById("editTimeInput").value = data["time"];
    document.getElementById("editRecipeEquSelect").value = data["equType"];

    // 初始化产物列表
    const editProductList = document.getElementById("editProductList");
    editProductList.innerHTML = "";
    for (const product in data["productList"]) {
        let isTarget = data["material"] === product
        const row = createProductRow(product, data["productList"][product], isTarget);
        editProductList.appendChild(row);
    }

    // 初始化原材料列表
    const editMaterialList = document.getElementById("editMaterialList");
    editMaterialList.innerHTML = "";
    for (const material in data["sourceList"]) {
        const row = createProductRow(material, data["sourceList"][material], false);
        editMaterialList.appendChild(row);
    }
}

// 创建产物/原材料行
function createProductRow(name, quantity, readOnly) {
    const row = document.createElement("div");
    row.classList.add("form-row");
    if (readOnly) {
        row.innerHTML = `
      <div class="form-group col-md-6">
        <input type="text" class="form-control" value="${name}" readonly="readOnly" required>
      </div>
      <div class="form-group col-md-4">
        <input type="number" class="form-control" value="${quantity}" required>
      </div>
      <div class="form-group col-md-2">
        <button type="button" class="btn btn-danger" onclick="deleteRow(this)">删除</button>
      </div>
    `;
    } else {
        row.innerHTML = `
      <div class="form-group col-md-6">
        <input type="text" class="form-control" value="${name}" required>
      </div>
      <div class="form-group col-md-4">
        <input type="number" class="form-control" value="${quantity}" required>
      </div>
      <div class="form-group col-md-2">
        <button type="button" class="btn btn-danger" onclick="deleteRow(this)">删除</button>
      </div>
    `;
    }

    return row;
}

function saveEditData() {
    const materialName = document.getElementById("editDataMaterial").value;
    const id = document.getElementById("editDataId").value;
    const time = parseInt(document.getElementById("editTimeInput").value);
    const device = document.getElementById("editRecipeEquSelect").value;
    const products = getFormData("editProductList");
    const materials = getFormData("editMaterialList");

    let realProducts = {}
    let hasTargetMaterial = false;
    products.forEach(product => {
        realProducts[product["name"]] = parseInt(product["quantity"])
        if (product["name"] === materialName) {
            hasTargetMaterial = true;
        }
    })

    if (!hasTargetMaterial) {
        alert("目标产物不支持修改名字！如有需要，请删除配方重新添加。");
        return;
    }

    let realMaterials = {};
    materials.forEach(material => {
        realMaterials[material["name"]] = parseInt(material["quantity"])
    })

    let recipeData = game_data["recipe_data"][materialName]["data"];
    recipeData.forEach(item => {
        if (item["id"] === id) {
            item["time"] = time;
            item["equType"] = device;
            item["productList"] = realProducts;
            item["sourceList"] = realMaterials;
        }
    });

    saveDataToLocalStorage();
    // 刷新表格
    updateRecipeTable();
}

function addRecipeEquSelect() {
    recipeBtnClick("add");
    const equTypeSelect = document.getElementById("addRecipeEquSelect");
    equTypeSelect.innerHTML = "";

    let equipment = game_data["equipment"];
    for (let deviceType in equipment) {
        let option = document.createElement("option");
        option.value = deviceType;
        option.innerText = deviceType;
        equTypeSelect.appendChild(option);
    }
}

function updateEditRecipeEquSelect() {
    const select = document.getElementById("editRecipeEquSelect");
    select.innerHTML = "";

    let equipment = game_data["equipment"];
    for (let deviceType in equipment) {
        let option = document.createElement("option");
        option.value = deviceType;
        option.innerText = deviceType;
        select.appendChild(option);
    }
}
