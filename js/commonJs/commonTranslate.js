/*
* 通用翻译文件，用于翻译页面中的文本
*/

// 定义需要更新文本的配置数组
const textsToTranslate = [
    ["生产目标", "Product Target", "text_product_target"],
    ["物品", "Goods", "text_goods"],
    ["选择弹窗", "Select Dialog", "text_select_dialog"],
    ["选择", "Select", "text_select"],
    ["材料", "Material", "text_material"],
    ["建筑", "Building", "text_building"],
    ["其它", "Other", "text_other"],
    ["数量", "Number", "text_number"],
    ["个/每分钟", "Per Minute", "needs_amount"],
    ["单独计算", "Calculate", "text_calculate"],
    ["累加计算", "Add Calculate", "text_add_calculate"],
    ["设备数量", "Number of equipment", "text_device_number"],
    ["单独计算", "Calculate", "text_device_calculate"],
    ["累加计算", "Add Calculate", "text_device_add_calculate"],
    ["开启循环计算", "Circle Calculate", "text_open_circle_calculate"],
    ["传送带运力拆分", "Conveyor capacity splitting", "text_belf_split"],
    ["重置", "Reset", "resetNeeds"],
    ["设备设置", "Device setup", "text_device_setting"],
    ["选择传送带后，需重新点击计算", "After selecting the conveyor belt, you need to click Calculate again", "text_need_click_calculate"],
    ["增产剂设置", "Production enhancer setting", "text_buff_setting"],
    ["加速:25%", "Acceleration :25%", "text_speed_25"],
    ["加速:50%", "Acceleration :50%", "text_speed_50"],
    ["加速:100%", "Acceleration :100%", "text_speed_100"],
    ["增产:12.5%", "Yield increase :12.5%", "text_increase_12_5"],
    ["增产:20%", "Yield increase :20%", "text_increase_20"],
    ["增产:25%", "Yield increase :25%", "text_increase_25"],
    ["全局增产剂效果:", "Global booster effect:", "text_buff"],
    ["清除所有增产剂", "Remove all production enhancers", "text_clear_buff"],
    ["计算结果", "Calculation result", "text_calculate_result"],
    ["树形列表1", "Tree list 1", "text_tree_list_one"],
    ["层次表格", "Hierarchical table", "text_level_table"],
    ["树形列表2", "Tree list 2", "text_tree_list_two"],
    ["如果在树形列表中进行了某个物品的其中一个路径的设备修改，那么在层次表格中目前无法进行统计区分的，是个bug，待修。", "If the device modification of one of the paths of an item is carried out in the tree list, then the statistical distinction currently cannot be made in the hierarchical table is a bug, to be fixed.", "text_level_bug_tips"],
    ["层级", "hierarchy", "text_table_level"],
    ["物品", "item", "text_table_goods"],
    ["物品数量", "Item quantity", "text_table_goods_number"],
    ["所需设备", "Required equipment", "text_table_devices"],
    ["设备数量", "Number of equipment", "text_table_devices_number"],
    ["配方", "Formula", "text_table_recipe"],
    ["增产剂", "Production-boosting agent", "text_table_buff"],
    ["是否计算", "Whether to calculate", "text_table_is_calculate"],
    ["这里没弄懂怎么调大小，所以先这样放两个按钮有需要的自己调。", "I don't know how to adjust the size here, so let's just put two buttons like this and adjust them as needed.", "text_tree_size"],
    ["放大", "Blow up", "text_big"],
    ["缩小", "minification", "text_small"],
    ["原材料合计：", "Total of raw materials:", "text_total_material"],
    ["设备合计：", "Total equipment：", "text_total_equipment"],
    ["产物：", "Products：", "text_total_product"],
    ["电量：", "Total amount of electricity：", "text_total_energy"],
    ["统计：", "Total", "text_total"],
];

// 国际化文本更新函数，接受数组参数
function updateLocalizedTexts(textConfigs) {
    textConfigs.forEach(config => {
        const [defaultText, translatedText, elementId] = config;
        const element = document.getElementById(elementId);

        if (element) {
            let updatedText = needTranslate ? translatedText : defaultText;
            // 可在此处根据需要添加额外的文本处理逻辑，例如格式化等
            element.innerText = updatedText;
        } else {
            // console.log(`无法找到ID为${elementId}的元素。`);
        }
    });
}

// 调用函数更新所有文本
updateLocalizedTexts(textsToTranslate);
