// 获取所有的 .category 元素
const categories = document.querySelectorAll('.category');

// 创建一个标记，用来判断是否已经播放过音效
let isSoundPlaying = false;

// 为每个 category 元素添加点击事件
categories.forEach(function(category) {
    category.addEventListener('click', function() {
        HanderCategoryEvent(category.id);
    });
});

function HanderCategoryEvent(id){
    // 这个函数用于处理主页窗口的调整逻辑，注意id必须是一个可以转换为数字的值
    const currentLang = localStorage.getItem('selectedLanguage') || "zh-CN";
    switch(Number(id)){
        case 1:
            window.location.href = currentLang === 'zh-CN' ?  "cn/core/weaponList.html" : "en/core/weaponList.html";
            break;
        case 2:
            window.location.href = currentLang === 'zh-CN' ?  "cn/core/mechanism.html" : "en/core/mechanism.html";
            break;
        case 3:
            window.location.href = currentLang === 'zh-CN' ?  "cn/core/biology.html" : "en/core/biology.html";
            break;
    }
}

// 获取所有的 <li> 元素
const sidebarItems = document.querySelectorAll('.sidebar ul li');

// 为每个 li 元素添加点击事件
sidebarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        const id = item.id; // 获取当前 li 的 id
        handleSidebarNavigation(id);
    });
});

function handleSidebarNavigation(id) {
    // 获取当前语言选项
    const currentLang = localStorage.getItem('selectedLanguage') || "zh-CN";
    switch (id) {
        case "1s":
            window.location.href = currentLang === 'zh-CN' ? "cn/core/weaponList.html" : "en/core/weaponList.html";
            break;
        case "2s":
            window.location.href = currentLang === 'zh-CN' ? "cn/core/mechanism.html" : "en/core/mechanism.html";
            break;
        case "3s":
            window.location.href = currentLang === 'zh-CN' ? "cn/core/biology.html" : "en/core/biology.html";
            break;
        case "4s":
            window.location.href = currentLang === 'zh-CN' ? "cn/core/aboutMod.html" : "en/core/aboutMod.html";
            break;
    }
}
