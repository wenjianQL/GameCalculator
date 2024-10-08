// 目标URL
const url = "https://satisfactory-calculator.com/zh/items";

const urlBase = "https://satisfactory-calculator.com";

function processPage(domin) {
    // 完整的URL
    const url = new URL(domin, urlBase).href;

    // 发送HTTP请求
    fetch(url)
        .then(response => {
            // 检查请求是否成功
            if (response.ok) {
                return response.text();
            } else {
                throw new Error(`Failed to retrieve the webpage: ${response.status}`);
            }
        })
        .then(html => {
            // 解析HTML内容
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // 创建保存图片的目录
            const imgDir = "img";
            if (!fs.existsSync(imgDir)) {
                fs.mkdirSync(imgDir);
            }

            // 获取class为"media flex-column flex-md-row"的div标签下的图片
            // const mediaDiv = doc.querySelector('.media.flex-column.flex-md-row');
            // let imgAlt = "";
            // if (mediaDiv) {
            //     const imgTag = mediaDiv.querySelector('img');
            //     if (imgTag && imgTag.src) {
            //         const imgUrl = new URL(imgTag.src, urlBase).href;
            //         imgAlt = imgTag.alt || "";
            //         fetch(imgUrl)
            //             .then(res => res.blob())
            //             .then(blob => {
            //                 // 图片保存的名字为img_alt代表的值.jpg
            //                 const imgPath = path.join(imgDir, `${imgAlt}.jpg`);
            //                 fs.writeFileSync(imgPath, blob);
            //             })
            //             .catch(error => console.error(`Failed to download image: ${error}`));
            //     }
            // }

            // 存储配方数据的item
            const recipeData = [];

            // 获取所有class为"card-body border-top"的div标签
            const cardBodies = doc.querySelectorAll('.card-body.border-top');
            cardBodies.forEach(cardBody => {
                const recipeBox = cardBody.querySelectorAll('.row.align-items-center');
                if (recipeBox.length !== 2) {
                    return;
                }

                const itemJson = {
                    "time": 60,
                    "equType": "",
                    "equIndex": 0,
                    "productList": {},
                    "sourceList": {}
                };

                // 获取设备名字
                const recipeEquipment = recipeBox[0];
                const col6TextRight = recipeEquipment.querySelector('.col-6.text-right');
                if (col6TextRight) {
                    const equipmentName = col6TextRight.querySelector('a').textContent;
                    itemJson.equType = equipmentName;
                }

                // 获取原料和产物信息
                const colList = recipeBox[1].querySelectorAll('.col-6');
                if (colList.length !== 2) {
                    return;
                }

                // 原料
                const sourceList = colList[0];
                const sourceItemList = sourceList.querySelectorAll('div');
                sourceItemList.forEach(item => {
                    const perMinuteNeedNum = item.querySelector('small').textContent
                        .replace(/ \/ min\)/g, '')
                        .replace(/\(/g, '')
                        .replace(/,/g, '')
                        .replace(/m³/g, '');
                    const goodsName = item.querySelector('a').textContent;
                    itemJson.sourceList[goodsName] = perMinuteNeedNum;
                });

                // 产物
                const productList = colList[1];
                const productItemList = productList.querySelectorAll('div');
                productItemList.forEach(item => {
                    const perMinuteNeedNum = item.querySelector('small').textContent
                        .replace(/ \/ min\)/g, '')
                        .replace(/\(/g, '')
                        .replace(/,/g, '')
                        .replace(/m³/g, '');
                    const goodsName = item.querySelector('a').textContent;
                    itemJson.productList[goodsName] = perMinuteNeedNum;
                });

                recipeData.push(itemJson);
            });

            console.log("-------------");

            resultJson[imgAlt] = {
                "useIndex": 0,
                "data": recipeData
            };
            console.log(resultJson);
        })
        .catch(error => console.error(error));
}

processPage("/zh/items/detail/id/Desc_IronPlateReinforced_C/name/加强铁板")

// 发送HTTP请求
// fetch(url)
//     .then(response => {
//         // 检查请求是否成功
//         if (response.ok) {
//             return response.text();
//         } else {
//             throw new Error(`Failed to retrieve the webpage: ${response.status_code}`);
//         }
//     })
//     .then(html => {
//         // 解析HTML内容
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//
//         // 查找所有class为"card-body"的div元素
//         const cardBodies = doc.querySelectorAll('.card-body');
//
//         // 提取每个card-body内的a标签的href属性
//         const links = [];
//         cardBodies.forEach(card => {
//             const aTags = card.querySelectorAll('a[href]');
//             aTags.forEach(a => {
//                 const href = a.getAttribute('href');
//                 links.push(href);
//                 // a标签中获取img标签的alt
//                 const imgTag = a.querySelector('img');
//                 if (imgTag) {
//                     const imgAlt = imgTag.getAttribute('alt');
//                     resultJson[imgAlt] = {
//                         "useIndex": 0,
//                         "data": []
//                     };
//                 }
//             });
//         });
//
//         // 处理每个链接
//         links.forEach(link => {
//             console.log(link);
//             // process_page(link); // 这里可以调用process_page函数处理每个链接
//         });
//
//         // 输出结果
//         console.log(links);
//     })
//     .catch(error => {
//         console.error(error);
//     });
