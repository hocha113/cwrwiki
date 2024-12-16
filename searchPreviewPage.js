// 获取存储的搜索结果
const searchResultKeys = JSON.parse(localStorage.getItem("searchResultKays"));

// 获取预览容器
const previewContainer = document.getElementById('preview-container');

// 遍历路径数组并动态生成预览窗口
searchResultKeys.forEach(key => {
    const previewItem = document.createElement('div');
    previewItem.classList.add('preview-item');
    previewItem.style.position = 'relative'; // 为每个预览窗口设置相对定位

    const iframe = document.createElement('iframe');
    iframe.src = pageDictionary[key];  // 将路径设置为 iframe 的 src 属性

    // 创建 "前往该页面" 按钮
    const goButton = document.createElement('button');
    goButton.classList.add('go-button');
    goButton.textContent = "前往该页面";
    goButton.onclick = () => {
        window.location.href = iframe.src;  // 点击按钮跳转到对应页面
    };

    previewItem.appendChild(iframe);
    previewItem.appendChild(goButton);  // 添加按钮到预览窗口
    previewContainer.appendChild(previewItem);
});
