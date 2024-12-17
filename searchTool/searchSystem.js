// 计算 Levenshtein 距离的函数
function levenshtein(a, b) {
    const tmp = [];
    let i, j, alen = a.length, blen = b.length, alen1 = alen + 1, blen1 = blen + 1;
    if (alen == 0) return blen;
    if (blen == 0) return alen;
    for (i = 0; i < alen1; i++) tmp[i] = [i];
    for (j = 0; j < blen1; j++) tmp[0][j] = j;
    for (i = 1; i < alen1; i++) {
        for (j = 1; j < blen1; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            tmp[i][j] = Math.min(
                tmp[i - 1][j] + 1,
                tmp[i][j - 1] + 1,
                tmp[i - 1][j - 1] + cost
            );
        }
    }
    return tmp[alen][blen];
}

// 改进的相似度计算函数：基于 Levenshtein 距离
function getSimilarity(input, target) {
    const levDistance = levenshtein(input, target);
    const maxLength = Math.max(input.length, target.length);
    return 1 - levDistance / maxLength; // 返回 0 到 1 的相似度
}

var results = null;

function performSearch() {
    const searchInput = document.getElementById("search").value.toLowerCase();
    const resultsContainer = document.getElementById("search-results");
    const searchBar = document.querySelector('.search-bar'); // 获取 .search-bar
    
    // 清空上次的搜索结果
    resultsContainer.innerHTML = "";

    if (searchInput.trim() === "") {
        resultsContainer.style.display = "none";
        return;
    }

    // 匹配逻辑：筛选并排序结果
    results = Object.keys(pageDictionary).map(item => ({
            item,
            score: getSimilarity(searchInput, item.toLowerCase())
        }))
        .filter(({ score }) => score > 0) // 筛选出相似度大于0的内容
        .sort((a, b) => b.score - a.score) // 按相似度从高到低排序
        .map(({ item }) => item); // 提取结果内容

    // 如果有结果则显示
    if (results.length > 0) {
        resultsContainer.style.display = "block";

        // 获取 .search-bar 的高度并设置结果框的位置
        var searchBarRec = searchBar.getBoundingClientRect();
        resultsContainer.style.top = `${searchBarRec.bottom}px`; // 设置 .search-results 在 .search-bar 下方
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.className = "search-result-item";
            resultElement.textContent = result;

            // 为每个动态创建的结果项添加点击事件
            resultElement.addEventListener('click', function() {
                document.getElementById("search").value = result;
                resultsContainer.style.display = "none";
                resetHander(result);
            });

            resultsContainer.appendChild(resultElement);
        });
    } 
    else {
        resultsContainer.style.display = "none";
    }
}

function searchButton(){
    if (results != null && results.length > 0){
        if (results.length == 1){
            window.location.href = pageDictionary[results[0]];
            return;
        }
        // 将 results 数据存储到 localStorage 中
        localStorage.setItem("searchResultKays", JSON.stringify(results));
        window.location.href = "searchPreviewPage.html";
    }
}

function resetHander(result){
    const page = pageDictionary[result]; // 获取对应的页面路径
    if (page) {
        window.location.href = page; // 跳转到对应页面
    } else {
        alert("页面未找到！"); // 如果没有找到对应的页面路径
    }
}

// 输入框事件绑定
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", performSearch);

function initializeSC(){
    const resultsContainer = document.getElementById("search-results");
    resultsContainer.style.display = "none";//在绝大多数情况下它都得是none
}

window.onload = function() {
    initializeSC();
};