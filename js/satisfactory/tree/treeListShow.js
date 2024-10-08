/**
 * 渲染树形列表
 * @param {HTMLElement} ulNode - 树形列表的ul节点
 * @param {Object} data - 树形列表的数据
 * @returns {HTMLElement} - 渲染后的树形列表的ul节点
 */
function renderTree(ulNode, data) {
    if (!data) return null;

    // 根据物品名字和数量，在ulNode中添加对应的li进行结果显示
    const currentNode = document.createElement('li');
    // 设置高度为50px
    // currentNode.style.height = '16px';
    // 文字垂直居中
    // currentNode.style.lineHeight = '50px';
    // 设置li节点内容
    setLiContent(currentNode, data);

    ulNode.appendChild(currentNode);

    return ulNode;
}

/**
 * 给li节点添加：物品名称和数量、设备数量、配方选择select
 */
function setLiContent(liNode, data) {
    // 设置liNode的id为data.path
    liNode.id = data.path;

    // 创建图片元素
    const img = createImageElement(data.name);
    liNode.appendChild(img);

    if (data.childNodeList.length !== 0 && !data.isExcess) {
        let needDeviceNumber = 0;
        // 根据设备类型，获取设备
        const equ = getDevice(data.equType);
        // 根据物品的accelerate，用总数量/（一台设备制造的产物数量*accelerateIndex），得到需要制造的次数
        needDeviceNumber = Math.ceil((data.number / (data.oneEquProductNumber * equ.rate * (1 + deviceAccelerateList[data.accelerateIndex]))) * 100) / 100;

        const inputNumber = document.createElement('input');
        inputNumber.type = 'number';
        inputNumber.value = data.number;
        inputNumber.style.width = '60px';
        inputNumber.addEventListener('change', (e) => {
            const newData = getCalculateResult(data.path, data.name, e.target.value);
            data.number = newData.number;
            data.otherProductList = newData.otherProductList;
            data.childNodeList = newData.childNodeList;
            liNode.innerHTML = "";
            setLiContent(liNode, data);
            // 重新进行结果统计
            treeTotal();
        });

        liNode.appendChild(inputNumber);
        const textNode = document.createTextNode(
            `*${data.name}（${needDeviceNumber}*${equ.name}）`);
        liNode.appendChild(textNode);
    } else {
        const inputNumber = document.createElement('input');
        inputNumber.type = 'number';
        inputNumber.value = data.number;
        inputNumber.style.width = '60px';
        inputNumber.addEventListener('change', (e) => {
            const newData = getCalculateResult(data.path, data.name, e.target.value);
            data.number = newData.number;
            data.otherProductList = newData.otherProductList;
            data.childNodeList = newData.childNodeList;
            liNode.innerHTML = "";
            setLiContent(liNode, data);
            // 重新进行结果统计
            treeTotal();
        });

        if (data.isExcess) {
            liNode.appendChild(document.createTextNode("多余产物："));
        }
        liNode.appendChild(inputNumber);
        const textNode = document.createTextNode(`*${data.name}`);
        liNode.appendChild(textNode);
    }

    // 如果data中的isCalculator是false，那么给liNode中的文字添加一个删除线的效果
    if (!data.isCalculator) {
        // 给liNode添加一个恢复按钮，点击后将data中的isCalculator设置为true
        const recoverButton = document.createElement('button');
        recoverButton.classList.add('btn', 'btn-outline', 'btn-danger');
        recoverButton.textContent = '恢复';
        recoverButton.style.marginLeft = '16px';
        recoverButton.addEventListener('click', () => {
            data.isCalculator = true;
            liNode.innerHTML = "";
            setLiContent(liNode, data);
            // 重新进行结果统计
            treeTotal();
        });
        liNode.appendChild(recoverButton);

        return;
    }

    // 如果data中的childNodeList不为空
    if (data.childNodeList.length !== 0 && !data.isExcess) {
        // 添加配方选择select
        const select = document.createElement('select');
        // margin left 16px
        select.style.marginLeft = '16px';
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

            if (recipeScope === "currentPath") {
                setDefaultRecipe(path, index)
                if (storage != null) {
                    storage.set(path, index);
                }

                // 获取当前节点的新计算结果
                const newData = getCalculateResult(path.substring(0, path.lastIndexOf('-')), data.name, data.number);
                // 数据更新
                data.otherProductList = newData.otherProductList;
                data.childNodeList = newData.childNodeList;
                data.nodeRecipeIndex = newData.nodeRecipeIndex;
                data.equType = newData.equType;
                data.oneEquProductNumber = newData.oneEquProductNumber;

                liNode.innerHTML = "";
                setLiContent(liNode, data);
                // 重新进行结果统计
                treeTotal();
            } else {
                setDefaultRecipe(data.name, index)
                if (storage != null) {
                    storage.set(data.name, index);
                }

                // 在treeRootNode中找到所有以data.name结尾的path的data
                treeRootNodeByItemName = [];
                getCalculateResultByItemName(treeRootNode, data.name);
                // 遍历dataList
                for (let i = 0; i < treeRootNodeByItemName.length; i++) {
                    let itemData = treeRootNodeByItemName[i];
                    let newItemData = getCalculateResult(itemData.path.substring(0, itemData.path.lastIndexOf('-')), itemData.name, itemData.number);
                    itemData.otherProductList = newItemData.otherProductList;
                    itemData.childNodeList = newItemData.childNodeList;
                    itemData.nodeRecipeIndex = newItemData.nodeRecipeIndex;
                    itemData.equType = newItemData.equType;
                    itemData.oneEquProductNumber = newItemData.oneEquProductNumber;
                    // 更新对应的li节点
                    let itemLiNode = getLiNode(itemData.path);
                    itemLiNode.innerHTML = "";
                    setLiContent(itemLiNode, itemData);
                }
            }
        });
        liNode.appendChild(select);
    }

    // 添加加速select
    if (!data.isExcess) {
        const accelerateSelect = document.createElement('select');
        accelerateSelect.style.marginLeft = '16px';
        // 创建option
        for (let i = 0; i < deviceAccelerateList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = "加速: " + deviceAccelerateList[i];
            option.id = data.path + "-加速_" + i;
            accelerateSelect.appendChild(option);
        }
        accelerateSelect.value = data.accelerateIndex;
        accelerateSelect.addEventListener('change', () => {
            const selectId = accelerateSelect.options[accelerateSelect.selectedIndex].id;
            const selectIdArr = selectId.split("_");
            const index = selectIdArr[1];
            data.accelerateIndex = index;
            // // 配方中一台设备制造的产物数量要根据加速倍数进行调整
            // data.oneEquProductNumber = data.oneEquProductNumber * (1 + accelerateIndex);

            liNode.innerHTML = "";
            setLiContent(liNode, data);
            // 重新进行结果统计
            treeTotal();
        });
        liNode.appendChild(accelerateSelect);

        // 添加增产select
        const increaseSelect = document.createElement('select');
        increaseSelect.style.marginLeft = '16px';
        // 创建option
        for (let i = 0; i < deviceIncreaseList.length; i++) {
            const option = document.createElement('option');
            option.value = i;
            option.innerHTML = "增产: " + deviceIncreaseList[i];
            option.id = data.path + "-增产_" + i;
            increaseSelect.appendChild(option);
        }
        increaseSelect.value = data.increaseIndex;
        increaseSelect.addEventListener('change', () => {
            const selectId = increaseSelect.options[increaseSelect.selectedIndex].id;
            const selectIdArr = selectId.split("-增产_");
            const path = selectIdArr[0];
            const index = selectIdArr[1];
            data.increaseIndex = index;

            // 获取当前节点的新计算结果
            const newData = getCalculateResult(path.substring(0, path.lastIndexOf('-')), data.name, data.number / (1 + deviceIncreaseList[index]));
            // 数据更新
            data.childNodeList = newData.childNodeList;
            // // 增产变化处理逻辑：原料数量减少
            // increaseChange(data, deviceIncreaseList[index]);
            liNode.innerHTML = "";
            setLiContent(liNode, data);
            // 重新进行结果统计
            treeTotal();
        });
        liNode.appendChild(increaseSelect);
    }

    // 给liNode添加一个忽略按钮，点击后将data中的isCalculator设置为false
    const ignoreButton = document.createElement('button');
    ignoreButton.classList.add('btn', 'btn-outline', 'btn-default');
    ignoreButton.textContent = '忽略';
    ignoreButton.style.marginLeft = '16px';
    ignoreButton.addEventListener('click', () => {
        data.isCalculator = false;
        liNode.innerHTML = "";
        setLiContent(liNode, data);

        // 重新进行结果统计
        treeTotal();
    });
    liNode.appendChild(ignoreButton);

    if (!data.isExcess) {
        const markButton = document.createElement('a');
        markButton.style.marginLeft = '16px';
        markButton.classList.add('btn', 'btn-white', 'btn-bitbucket');
        markButton.innerHTML = '新建页面';
        // 打开一个新页面，并在域名后添加data.name=data.number
        markButton.addEventListener('click', () => {
            window.open(`satisfactory_tree.html?name=${data.name}&number=${data.number}`);
        });
        liNode.appendChild(markButton);

        // 如果otherProductList不为空或sourceList不为空
        if (data.otherProductList || data.childNodeList) {
            // 创建一个名字childUlNode的ul
            const childUlNode = document.createElement('ul');
            childUlNode.id = data.path;
            childUlNode.style.display = data.isExpand ? 'block' : 'none';
            liNode.appendChild(childUlNode);

            const toggleButton = document.createElement('span');
            toggleButton.textContent = data.isExpand ? '▼' : '►';
            toggleButton.style.cursor = 'pointer';
            toggleButton.style.marginRight = '5px';
            toggleButton.addEventListener('click', () => {
                data.isExpand = !data.isExpand;
                childUlNode.style.display = data.isExpand ? 'block' : 'none';
                toggleButton.textContent = data.isExpand ? '▼' : '►';
            });
            liNode.insertBefore(toggleButton, liNode.firstChild);

            // 如果sourceList不为空
            if (data.childNodeList) {
                // 遍历data中的sourceList，将sourceList中的数据添加到childUlNode中
                for (let key in data.childNodeList) {
                    renderTree(childUlNode, data.childNodeList[key]);
                }
            }

            // 如果otherProductList不为空
            for (let key in data.otherProductList) {
                renderTree(childUlNode, data.otherProductList[key]);
            }
        }
    }

}

function createImageElement(key) {
    const img = document.createElement('img');
    img.src = imgPath + "/" + key + ".jpg";
    img.style.width = '40px';
    img.style.height = '40px';
    img.style.marginRight = '4px';
    return img;
}

/**
 * 增产变化处理
 * 传入data和增产倍率，对data中的childNodeList内的数据进行增产变化处理，并递归处理childNodeList内的数据。
 */
function increaseChange(data, increase) {
    for (let key in data.childNodeList) {
        data.childNodeList[key].number = data.childNodeList[key].number / (1 + increase);
    }
}

/**
 * 传入物品路径，然后找到id为物品路径的li标签，然后返回
 */
function getLiNode(path) {
    return document.getElementById(path);
}