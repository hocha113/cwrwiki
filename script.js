// script.js
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const closeEls = document.getElementById('CloseID');

toggleBtn.addEventListener('click', () => {
    updateListener();
});

// 获取所有菜单项
const menuItems = document.querySelectorAll('.menu li a');

// 遍历每个菜单项并添加点击事件监听器
menuItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // 阻止默认跳转行为（可选）
        const action = item.getAttribute('data-action'); // 获取动作名称
        console.log(`Menu item clicked: ${action}`);
        // 在这里处理点击逻辑
        handleMenuClick(action);
    });
});