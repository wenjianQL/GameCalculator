/**
 * 给页面添加顶部导航栏
 * 页面需要添加：
 * <div id="head">
 * <script src="./js/manager/head.js"></script>
 * <script>addHead();</script>
 * </div>
 */
const addHead = () => {
    const str = `
    <div class="row border-bottom">
      <nav class="navbar navbar-static-top" role="navigation" style="margin-bottom: 0">
        <div class="navbar-header">
          <a class="navbar-minimalize minimalize-styl-2 btn btn-primary" href="#">游戏选择</a>
          <div id="gameManager" style="display: inline"></div>
        </div>
        <div class="navbar-header">
          <button type="button" class="minimalize-styl-2 btn btn-primary" style="margin-right: 20px;" data-toggle="modal" data-target="#aboutDialog">
              关于
          </button>
        </div>
      </nav>
    </div>
  `;

    const node = document.getElementById("head");
    node.innerHTML = str;
};