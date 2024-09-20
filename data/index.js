supportGameData = [
    {
        "name_us": "Dyson Sphere Program",
        "name_en": "戴森球计划",
        "imgUrl": "img/logo/dsp.webp",
        "url": "dsp.html"
    },
    {
        "name_us": "Satisfactory",
        "name_en": "幸福工厂",
        "imgUrl": "img/logo/SatisFactory.webp",
        "url": "satisfactory.html"
    }
]

// 给id为support_game_list的div添加内容
for (let i = 0; i < supportGameData.length; i++) {
    let game = supportGameData[i];
    let gameDiv = document.createElement("div");
    gameDiv.className = "game";
    gameDiv.innerHTML = `
    <div class="btn-game">
        <a href="${game.url}">
            <img src="${game.imgUrl}" alt="${game.name_us}">
            <div class="game_name">${game.name_us}</div>
        </a>
    </div>
`;
    document.getElementById("support_game_list").appendChild(gameDiv);
}

// 如果是中国地区
// if (navigator.language.startsWith("zh")) {
//     document.getElementById("text_feedback").textContent = "如果你有建议、反馈、其它想玩的游戏，欢迎联系我：\n X: @Wind674179535"
// } else {
//     document.getElementById("text_feedback").textContent = "If you have any suggestions, feedback, or other games you want to play, please contact me: \n X: Wind674179535"
// }
// document.getElementById("text_feedback").textContent = "If you have any suggestions, feedback, or other games you want to play, please contact me: \n X: Wind674179535"
