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
          <!--关于弹窗-->
          <div class="modal inmodal fade" id="aboutDialog" tabindex="-1"
               role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-lg">
                  <div class="modal-content">
                      <div class="modal-header">
                          <button type="button" class="close" data-dismiss="modal" style="float: right;">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="modal-body">
                          <!--内容填充-->
                          <div class="tabs-container">
                              <ul class="nav nav-tabs" role="tablist">
                                  <li><a class="nav-link active" data-toggle="tab" href="#about-version">版本说明</a></li>
                                  <li><a class="nav-link" data-toggle="tab" href="#about-bug">问题/建议反馈</a></li>
                                  <li><a class="nav-link" data-toggle="tab" href="#about-todo">待开发功能</a></li>
                              </ul>
                              <div class="tab-content">
                                  <div role="tabpanel" id="about-version" class="tab-pane active">
                                      <div class="panel-body">
                                          <h2>当前版本：v1.1 —— 2024年1月18日</h2>
                                          <ul>
                                              <li>新增功能：增产剂统计，可事先进行计算参数设置</li>
                                              <li>界面优化：总计从底部放到右侧并浮动可收缩、生产目标/计算参数位置调整、多余产物位置调整；</li>
                                              <li>修复：点击忽略/恢复，原材料存在相反状态的异常、层次表格设备数量统计异常；</li>
                                              <li>逻辑优化：循环产线、对多余产物是需要物品的情况进行支持、有些配方只能加速或增产剂没有直接效果；</li>
                                          </ul>
                                          <h2>v1.0 —— 2024年1月12日</h2>
                                          <ul>
                                              <li>游戏数据录入：幸福工厂、戴森球计划；</li>
                                              <li>量化计算功能；</li>
                                              <li>结果展示形式：树形列表、层次表格；</li>
                                              <li>支持自定义游戏数据：游戏、设备、配方</li>
                                          </ul>
                                      </div>
                                  </div>
                                  <div role="tabpanel" id="about-bug" class="tab-pane">
                                      <div class="panel-body">
                                          <div>
                                              bug反馈： <a href="https://txc.qq.com/products/605145" target="_blank">bug反馈</a>
                                          </div>
                                          <div style="margin-top: 20px;">
                                              建议反馈： <a href="https://txc.qq.com/products/605145" target="_blank">建议反馈</a>
                                          </div>
                                      </div>
                                  </div>
                                  <div role="tabpanel" id="about-todo" class="tab-pane">
                                      <div class="panel-body">
                                          <h2>以下功能没有先后顺序，如果你有想要的功能，请反馈。</h2>
                                          <ul>
                                              <li>更多游戏数据的添加</li>
                                              <li>基于树形列表进行修改的树形表格</li>
                                              <li>反转树形列表</li>
                                              <li>计算结果保存、加载、删除</li>
                                              <li>传送带的计算</li>
                                              <li>......等</li>
                                              <li>如果你有想要添加的功能，那么请在反馈页面进行反馈。</li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </nav>
    </div>
  `;

    const node = document.getElementById("head");
    node.innerHTML = str;
};