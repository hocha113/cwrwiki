const LANG_STORAGE_KEY = 'selectedLanguage';
const DEFAULT_LANG = 'zh-CN';

// 加载语言文件
async function loadLanguageData(lang) {
    const response = await fetch('404.json');
    const data = await response.json();
    return data[lang];
}

// 更新页面文字内容
async function updateContent(lang) {
    const content = await loadLanguageData(lang);

    // 设置页面内容
    document.title = content.title;

    document.querySelectorAll('.sidebar nav ul li a')[0].textContent = content.sidebar0;
    document.querySelectorAll('.sidebar nav ul li a')[1].textContent = content.sidebar1;
    document.querySelectorAll('.sidebar nav ul li a')[2].textContent = content.sidebar2;
    document.querySelectorAll('.sidebar nav ul li a')[3].textContent = content.sidebar3;
    document.querySelectorAll('.sidebar nav ul li a')[4].textContent = content.sidebar4;

    document.querySelector('.search-bar #search-button').textContent = content.search0;
    document.querySelector('.search-bar #search').placeholder = content.search1;

    document.querySelector('.main-content').querySelector('h1').textContent = content.main0;
    document.querySelector('.main-content').getElementsByTagName('p')[0].textContent = content.main1;
    document.querySelector('.main-content').getElementsByTagName('p')[1].textContent = content.main2;

    document.querySelector('footer p').textContent = content.footer;

    // 更新语言按钮
    const languageButton = document.getElementById('language-button');
    languageButton.textContent = lang === 'zh-CN' ? 'Switch to English' : '切换为中文';
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();

    document.getElementById('language-button').addEventListener('click', switchLanguage);
});

// 切换语言
function switchLanguage() {
    const currentLang = localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
    const newLang = currentLang === 'zh-CN' ? 'en-US' : 'zh-CN';
    localStorage.setItem(LANG_STORAGE_KEY, newLang);
    updateContent(newLang);
}

// 初始化页面语言
function initLanguage() {
    const savedLang = localStorage.getItem(LANG_STORAGE_KEY) || DEFAULT_LANG;
    updateContent(savedLang);
}

window.onload = function() {
    initLanguage();
};
