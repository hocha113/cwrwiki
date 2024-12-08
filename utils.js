// 定义一个函数处理点击事件
function handleMenuClick(action) {
    switch (action) {
        case 'Home':
            console.log('Navigating to Home...');
            break;
        case 'About':
            console.log('Navigating to About...');
            break;
        case 'Services':
            console.log('Navigating to Services...');
            break;
        case 'Contact':
            console.log('Navigating to Contact...');
            break;
        case 'Name':
            window.location.href = "spekMyName.html"; // 跳转到新的页面
            break;
        case 'Close':
            console.log('Navigating to Close...');
            updateListener();
            break;
        default:
            console.log('Unknown action:', action);
    }
}

function updateListener(){
    sidebar.classList.toggle('collapsed');
    var hasColl = sidebar.classList.contains('collapsed')
    toggleBtn.textContent = hasColl ? '»»»' : '«««';
    closeEls.textContent = hasColl ? '开启' : '关闭';
    if (hasColl){
        closeEls.classList.remove("btn-animate");
        closeEls.classList.add("btn-close");
        closeEls.classList.add("btn-animate__overline-from-right");
    }
    else{
        closeEls.classList.remove("btn-animate__overline-from-right");
        closeEls.classList.remove("btn-close");
        closeEls.classList.add("btn-animate");
    }
}