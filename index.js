// 获取所有的 .category 元素
const categories = document.querySelectorAll('.category');
            
// 获取音效元素
const soundEffect = document.getElementById('soundEffect');

// 创建一个标记，用来判断是否已经播放过音效
let isSoundPlaying = false;

// 为每个 category 元素添加点击事件
categories.forEach(function(category) {
    category.addEventListener('click', function() {
        HanderCategoryEvent(category.id);
    });
});

//愚蠢的声音设计
// // 为每个 .category 元素添加鼠标进入事件监听器
// categories.forEach(category => {
//     category.addEventListener('mouseenter', function() {
//         // 防止音效快速重复播放
//         if (!isSoundPlaying) {
//             isSoundPlaying = true;
//             soundEffect.currentTime = 0;  // 重置播放时间
//             soundEffect.play();
//         }
//     });

//     // 当鼠标离开时，重置 isSoundPlaying 标记
//     category.addEventListener('mouseleave', function() {
//         isSoundPlaying = false;
//     });
// });

function HanderCategoryEvent(id){
    // 这个函数用于处理主页窗口的调整逻辑，注意id必须是一个可以转换为数字的值
    const currentLang = localStorage.getItem('selectedLanguage');
    switch(Number(id)){
        case 1:
            window.location.href = currentLang === 'zh-CN' ?  "cn/core/weaponList.html" : "/index.html";
            break;
    }
}
