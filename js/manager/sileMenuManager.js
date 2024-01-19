/*
侧拉栏数据管理
-----
数据规则：
1、用户自己增加的游戏，以“游戏1-游戏2-游戏3”的形式进行拼接，key为“use_add_games”

-----
涉及：
- 按钮：添加游戏；
- 按钮：删除游戏；
- 加载游戏类型，并以li标签的形式显示，添加到id为“side-menu”的ul标签中；
*/
/**
 * 添加“添加游戏”按钮、“删除当前游戏”按钮；
 * 需要在页面中添加：<ul class="nav metismenu" id="side-menu"></ul>
 * <script src="./js/manager/sileMenuManager.js"></script>
 * <div id="gameManager">
 *    <script>addBtnNode(false);</script>
 * </div>
 */
function addBtnNode(canDelete) {
    let str = '' +
        '<span class="navbar-minimalize minimalize-styl-2"> | </span>\n' +
        '<button class="minimalize-styl-2 btn btn-primary " onclick="clickAddGame()">添加游戏</button>\n' +
        '';

    if (canDelete) {
        str += '<button class="minimalize-styl-2 btn btn-danger " onclick="deleteGame()">删除当前游戏</button>\n';
    } else {
        str += '<span class="navbar-minimalize minimalize-styl-2"> | </span>';
        str += '<a class="minimalize-styl-2 btn btn-danger" style="color: white;" onclick="clearLocalStorage()">重置游戏数据</a>'
    }

    let gameManagerNode = document.getElementById("gameManager");
    if (gameManagerNode == null) {
        return;
    }

    gameManagerNode.innerHTML = str;
}

// 添加游戏
/**
 * 点击按钮：添加游戏
 * 显示“添加游戏”弹窗
 */
function clickAddGame() {
    let gameName = prompt('请输入游戏名称');
    if (gameName) {
        userAddGameNameList.push(gameName);
        updateGameList(gameName);
        // 打开新页面加载链接
        window.open(customGamePageLink + "?gameName=" + gameName, "_blank");
    }
}

function deleteGame() {
    // 执行删除游戏的逻辑
    if (curGameName) {
        let index = userAddGameNameList.indexOf(curGameName);
        if (index > -1) {
            userAddGameNameList.splice(index, 1);
            updateGameList(curGameName);
            window.location.href = "index.html";
        }
    }

    // 关闭删除确认弹窗
    $('#deleteConfirmationModal').modal('hide');
}

// 更新游戏列表
function updateGameList(selectGameName) {
    let sideMenu = document.getElementById('side-menu');

    // 清空菜单
    sideMenu.innerHTML = '';

    // 添加游戏到菜单
    for (let i = 0; i < userAddGameNameList.length; i++) {
        let li = document.createElement('li');
        let spanNode = document.createElement("span");
        spanNode.className = "nav-label";
        spanNode.textContent = userAddGameNameList[i];

        let aNode = document.createElement("a");
        aNode.href = "customGame.html?gameName=" + userAddGameNameList[i];
        aNode.appendChild(spanNode);

        li.appendChild(aNode);

        if (userAddGameNameList[i] === selectGameName && curGameName === selectGameName) {
            li.className = "active";
        }

        sideMenu.appendChild(li);
    }

    // 保存游戏列表到localStorage
    localStorage.setItem('user_add_games', userAddGameNameList.join('-'));
}

// 初始化加载游戏列表
function loadGameList(selectGameName) {
    let savedGames = localStorage.getItem('user_add_games');
    if (savedGames) {
        userAddGameNameList = savedGames.split('-');
        updateGameList(selectGameName);
    }
}
