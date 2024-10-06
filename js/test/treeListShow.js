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
    // 创建图片元素
    const img = createImageElement(data.name);
    liNode.appendChild(img);

    if (data.childNodeList.length !== 0) {
        let needDeviceNumber = 0;
        // 根据设备类型，获取设备
        const equ = getDevice(data.equType);
        // 根据物品的rate，用总数量/（一台设备制造的产物数量*rate），得到需要制造的次数
        needDeviceNumber = Math.ceil((data.number / (data.oneEquProductNumber * equ.rate)) * 100) / 100;
        const textNode = document.createTextNode(
            `${data.number}*${data.name}（${needDeviceNumber}*${equ.name}）`);
        liNode.appendChild(textNode);
    } else {
        const textNode = document.createTextNode(`${data.number}*${data.name}`);
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
    if (data.childNodeList.length !== 0) {
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

            treeNodeRecipeIndexMap[path] = index;

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
        });
        liNode.appendChild(select);
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
        if (data.otherProductList) {
            // 遍历data中的otherProductList，将otherProductList中的数据添加到childUlNode中
            for (let key in data.otherProductList) {
                const otherNumber = data.otherProductList[key];
                const li = document.createElement('li');
                // 创建图片元素
                const img = createImageElement(key);
                const textNode = document.createTextNode(`多余产物：${otherNumber}*${key}`);
                li.appendChild(textNode);
                li.appendChild(img);
                childUlNode.appendChild(li);
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