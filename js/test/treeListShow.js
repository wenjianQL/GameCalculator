/**
 * 渲染树形列表
 * @param {HTMLElement} ulNode - 树形列表的ul节点
 * @param {Object} data - 树形列表的数据
 * @returns {HTMLElement} - 渲染后的树形列表的ul节点
 */
function renderTree(ulNode, data) {
    if (!data) return null;
    console.log("data = ");
    console.log(data);

    // ulNode为空，返回
    // if (!ulNode) return null;

    // 根据物品名字和数量，在ulNode中添加对应的li进行结果显示
    const currentNode = document.createElement('li');

    // 如果childNodeList不为空，那么计算需要的设备数量
    if (data.childNodeList.length !== 0) {
        let needDeviceNumber = 0;
        // 根据设备类型，获取设备
        const equ = getDevice(data.equType);
        // 根据物品的rate，用总数量/（一台设备制造的产物数量*rate），得到需要制造的次数
        needDeviceNumber = Math.ceil((data.number / (data.oneEquProductNumber * equ.rate)) * 100) / 100;
        const textNode = document.createTextNode(
            `${data.number}*${data.name}（${needDeviceNumber}*${equ.name}）`);
        currentNode.appendChild(textNode);
    } else {
        const textNode = document.createTextNode(`${data.number}*${data.name}`);
        currentNode.appendChild(textNode);
    }

    // TODO 忽略按钮
    // const button = document.createElement('button');
    // // button设置点击事件
    // button.addEventListener('click', () => {
    //     // TODO：
    //     // 获取data中的isCalculator，并取反重新设置，然后重新渲染当前节点
    //     // data.isCalculator = !data.isCalculator;
    //     // renderTree(ulNode, data);
    // });
    // // 根据isCalculator设置按钮文本和样式
    // if (data.isCalculator) {
    //     button.textContent = '忽略';
    // } else {
    //     button.textContent = '计算';
    //     currentNode.style.textDecoration = 'line-through';
    // }
    // currentNode.appendChild(button);


    // 如果data中的childNodeList不为空
    if (data.childNodeList.length !== 0) {
        // 添加配方选择select
        const select = document.createElement('select');
        // 获取物品对应的recipeList
        const recipeList = getRecipeList(data.name);
        // 遍历recipeList，将recipeList中的数据添加到select中
        for (let i = 0; i < recipeList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = getRecipeStep(recipeList[i]);
            option.id = data.path + "_" + i;
            select.appendChild(option);
        }
        select.value = data.nodeRecipeIndex;
        select.addEventListener('change', () => {
            const selectId = select.options[select.selectedIndex].id;
            const selectIdArr = selectId.split("_");
            const path = selectIdArr[0];
            const index = selectIdArr[1];
            console.log(path, index);

            treeNodeRecipeIndexMap[path] = index;

            // 获取当前节点的新计算结果
            const newData = getCalculateResult(path.substring(0, path.lastIndexOf('-')), data.name, data.number);
            console.log("newData = ");
            console.log(newData);
            // 数据更新
            data.otherProductList = newData.otherProductList;
            data.childNodeList = newData.childNodeList;
            data.nodeRecipeIndex = newData.nodeRecipeIndex;
            data.equType = newData.equType;
            data.oneEquProductNumber = newData.oneEquProductNumber;
            // 删除currentNode
            ulNode.removeChild(currentNode);
            // 重新渲染节点ulNode
            renderTree(ulNode, data);
        });
        currentNode.appendChild(select);
    }

    ulNode.appendChild(currentNode);

    // 如果otherProductList不为空或sourceList不为空
    if (data.otherProductList || data.childNodeList) {
        // 创建一个名字childUlNode的ul
        const childUlNode = document.createElement('ul');
        childUlNode.id = data.path;
        childUlNode.style.display = data.isExpand ? 'block' : 'none';
        currentNode.appendChild(childUlNode);

        const toggleButton = document.createElement('span');
        toggleButton.textContent = data.isExpand ? '▼' : '►';
        toggleButton.style.cursor = 'pointer';
        toggleButton.style.marginRight = '5px';
        toggleButton.addEventListener('click', () => {
            data.isExpand = !data.isExpand;
            childUlNode.style.display = data.isExpand ? 'block' : 'none';
            toggleButton.textContent = data.isExpand ? '▼' : '►';
        });
        currentNode.insertBefore(toggleButton, currentNode.firstChild);

        // 如果sourceList不为空
        if (data.childNodeList) {
            // 遍历data中的sourceList，将sourceList中的数据添加到childUlNode中
            for (let key in data.childNodeList) {
                renderTree(childUlNode, data.childNodeList[key]);
            }
        }

        // 如果otherProductList不为空
        if (data.otherProductList) {
            // 遍历data中的otherProductList，将otherProductList中的数据添加到childUlNode中
            for (let key in data.otherProductList) {
                const otherNumber = data.otherProductList[key];
                const li = document.createElement('li');
                li.textContent = `多余产物：${key} x ${otherNumber}`;
                childUlNode.appendChild(li);
            }
        }
    }

    return ulNode;
}