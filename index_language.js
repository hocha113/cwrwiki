const LANG_STORAGE_KEY = 'selectedLanguage';
const DEFAULT_LANG = 'zh-CN';

// 加载语言文件
async function loadLanguageData(lang) {
    const response = await fetch('index.json');
    const data = await response.json();
    return data[lang];
}

// 更新页面文字内容
async function updateContent(lang) {
    const content = await loadLanguageData(lang);

    // 设置页面内容
    document.title = content.title2;
    document.querySelector('.logo').textContent = content.title;
    document.querySelector('h1').textContent = content.welcome;
    document.querySelector('p').textContent = content.description;

    document.querySelectorAll('.sidebar nav ul li a')[0].textContent = content.sidebar0;
    document.querySelectorAll('.sidebar nav ul li a')[1].textContent = content.sidebar1;
    document.querySelectorAll('.sidebar nav ul li a')[2].textContent = content.sidebar2;
    document.querySelectorAll('.sidebar nav ul li a')[3].textContent = content.sidebar3;

    document.querySelector('.search-bar #search-button').textContent = content.search0;
    document.querySelector('.search-bar #search').placeholder = content.search1;

    document.querySelectorAll('.category')[0].querySelector('h2').textContent = content.weapons;
    document.querySelectorAll('.category')[0].querySelector('p').textContent = content.weapons_desc;
    document.querySelectorAll('.category')[1].querySelector('h2').textContent = content.changes;
    document.querySelectorAll('.category')[1].querySelector('p').textContent = content.changes_desc;
    document.querySelectorAll('.category')[2].querySelector('h2').textContent = content.enemies;
    document.querySelectorAll('.category')[2].querySelector('p').textContent = content.enemies_desc;
    document.querySelector('footer p').textContent = content.footer;

    // 更新语言按钮
    const languageButton = document.getElementById('language-button');
    languageButton.textContent = lang === 'zh-CN' ? '🌐Switch to English' : '🌐切换为中文';
}

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

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();

    document.getElementById('language-button').addEventListener('click', switchLanguage);
});