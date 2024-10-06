function initSatisFactorySelectDialog() {
    let node = document.getElementById("selectGridTableCustom")
    if (!node) {
        return;
    }

    node.innerHTML = '';

    const dialogData = selectDialogData;
    for (let key in dialogData) {
        const itemArray = dialogData[key];
        for (let i = 0; i < itemArray.length; i++) {
            let name = itemArray[i];
            let divNode = document.createElement("div");
                // 将item数据添加到
                let spanNode = document.createElement("h5");
                spanNode.textContent = name;
                spanNode.nodeValue = name;
                // 添加一个img
                let imgNode = createImageElement(name);
                divNode.appendChild(imgNode);
                divNode.appendChild(spanNode);

                divNode.onclick = function () {
                    let inputNode = document.getElementById("needs_item");
                    if (inputNode) {
                        inputNode.textContent = name;
                        inputNode.value = name
                    }
                    let closeButton = document.getElementById("selectDialogClickClose");
                    if (closeButton) {
                        closeButton.click();
                    }
                }
                node.appendChild(divNode);
        }
        // 添加换行符
        let count = 8 - (itemArray.length % 8);
        for (let i = 0; i < count; i++) {
            node.appendChild(document.createElement("div"));
        }
    }
}

function clickCalculateBtn() {
    // 需求item
    let needs_item = document.getElementById("needs_item").textContent;
    // item 数量
    let needs_amount = document.getElementById("needs_amount").value;
    // 计算
    calculateItem(needs_item, needs_amount);
}