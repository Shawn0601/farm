

// JSON 檔案網址
const url = "https://shannon945.github.io/farm_produce/data.json";
const productsList = document.querySelector(".showList");
const buttonGroup = document.querySelector(".button-group");
let data = [];

//axios get資料
function getData() {
    axios.get(url)
        .then(function (response) {
            data = response.data;
        });
}
getData();

//渲染頁面
function renderData(showData) {
    let str = '';
    //請透過 data 陣列跑 forEach ，並至少帶入第一個參數
    showData.forEach(function (item) {
        str += `<tr>
            <td>${item.作物名稱}</td>
            <td>${item.市場名稱}</td>
            <td>${item.上價}</td>
            <td>${item.中價}</td>
            <td>${item.下價}</td>
            <td>${item.平均價}</td>
            <td>${item.交易量}</td>
            </tr>`;

    });
    productsList.innerHTML = str;
}

/** 步驟三 **/
//以下步驟在 forEach {} 大括號內執行
//請將以下內容賦予給 str
//並依指示填入填空處
// str += `<tr>
// <td>${請填入作物名稱}</td>
// <td>${請填入上價}</td>
// <td>${請填入中價}</td>
// <td>${請填入下價}</td>
// <td>${請填入平均價}</td>
// <td>${請填入交易量}</td>
// </tr>`;


/*＊ 步驟四 **/
//以下步驟在 forEach {} 大括號外執行
//請透過 innerHTML 給 productsList 變數賦予值
//該值為變數 str


/*＊ 步驟五 **/
//請在正確的位置呼叫 renderData() (請留意非同步)

buttonGroup.addEventListener("click", (e) => {
    /** 步驟二 **/
    //請透過底下判斷式，確認點擊到的是否為 BUTTON
    if (e.target.nodeName === 'BUTTON') {
        let tabs = document.querySelectorAll('.button-group button');
        tabs.forEach((item) => item.classList.remove('active'));
        //請取出埋藏於 HTML button 上的 data-type 屬性值
        //將該值賦予到 type 變數上
        let type = e.target.dataset.type;
        let filterData = [];
        if (type === 'N04') {
            /** 步驟三 **/
            //請透過 data 陣列跑 filter ，並至少帶入第一個參數
            //以下步驟在 filter {} 大括號內執行
            //篩選出 data 內的種類代碼為 "N04"
            //賦予給 filterData
            filterData = data.filter((item) => item.種類代碼 === 'N04');
            e.target.classList.add('active');
        } else if (type === 'N05') {
            //請透過 data 陣列跑 filter ，並至少帶入第一個參數
            //以下步驟在 filter {} 大括號內執行
            //篩選出 data 內的種類代碼為 "N05"
            //賦予給 filterData
            filterData = data.filter((item) => item.種類代碼 === 'N05');
            e.target.classList.add('active');
        } else if (type === 'N06') {
            //請透過 data 陣列跑 filter ，並至少帶入第一個參數
            //以下步驟在 filter {} 大括號內執行
            //篩選出 data 內的種類代碼為 "N06"
            //賦予給 filterData
            filterData = data.filter((item) => item.種類代碼 === 'N06'
            );
            e.target.classList.add('active');
        }
        /** 步驟四 **/
        //呼叫 renderData 並傳入參數 filterData
        renderData(filterData);
    }
});



function changeCropType(type) {
    let filterData = [];
    filterData = data.filter((item) => item.種類代碼 === type);
    renderData(filterData);
}



/** 題目填答區開始  **/
/** 步驟一 **/
//註冊監聽 search 的點擊事件，並帶入事件參數
//以下步驟在監聽函式內執行
//透過 if 判斷點擊到的等於以下按鈕
//<button type="button" class="search text-white btn mb-2">搜尋</button>

const search = document.querySelector('.search');
const txt = document.querySelector('.rounded-end');
const input = document.querySelector('input');
search.addEventListener('click', function (e) {
    if (e.target.nodeName == 'BUTTON') {
        if (input.value.trim() == "") {
            alert('請輸入文字')
            return;
        }
        let filterData = [];
        filterData = data.filter((item) => item.作物名稱.match(input.value));   //filterData = data.filter((item) => item.作物名稱.match(input.value);
        if (filterData.length == 0) {
            productsList.innerHTML =
                `<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>`
        } else {
            renderData(filterData)
        }
    }
});

const searchGroup = document.querySelector('.main .seach-group');
searchGroup.addEventListener('click', function (e) {
    console.log(e.target.nodeName)
})







//select 選單排序
const select = document.querySelector('select');
select.addEventListener('click', function (e) {
    switch (e.target.value) {
        case '依上價排序':
            selectChange('上價');
            break;
        case '依中價排序':
            selectChange('中價');
            break;
        case '依下價排序':
            selectChange('下價');
            break;
        case '依平均價排序':
            selectChange('平均價');
            break;
        case '依交易量排序':
            selectChange('交易量');
            break;
    }
    function selectChange(value) {
        data.sort((a, b) => {
            return a[value] - b[value];

        })
        renderData(data)
    }
})

/** 題目填答區開始  **/
/** 步驟一 **/
//註冊監聽 sortAdvanced 的點擊事件
//並帶入事件參數

/** 步驟二 **/
//以下步驟於監聽函式大括號內執行
//透過 if 撰寫判斷式
//判斷點擊到的標籤是否為 <i></i> I 標籤

/** 步驟二 **/
//以下步驟於 if 判斷式內執行
//請宣告一個變數命名為 sortPrice
//將點擊時取出埋藏於 i 標籤的 data-price 值
//賦予給 sortPrice

//請宣告一個變數命名為 sortCaret
//將點擊時取出埋藏於 i 標籤的 data-sort 值
//賦予給  sortCaret

/** 步驟三 **/
//撰寫 if else 流程判斷
//在 if 的小括號內條件應填入"如果 sortCaret 取出的值相等於 "up"

/** 步驟四 **/
//以下步驟於在 if 判斷式大括號內執行
//透過 data 執行陣列方法 sort
//帶入 compareFunction 函式，並於函式內帶入 a 、 b 兩參數
//透過 return 回傳 b[sortPrice] -  a[sortPrice];
// b - a 可實現從大排到小

/** 步驟五 **/
//以下步驟在 else 大括號內執行
//透過 data 執行陣列方法 sort
//帶入 compareFunction 函式，並於函式內帶入 a 、 b 兩參數
//透過 return 回傳 a[sortPrice] -  b[sortPrice];
// a -  b 可實現從小排到大

/** 步驟六 **/
//以下步驟於 if（"判斷點擊到的為 I 標籤"）內
//if（"如果 sortCaret 取出的值相等於 "up"） else 大括號外執行
//呼叫函式 renderData 並帶入參數 data
const sortAdvanced = document.querySelectorAll('.sort-advanced');
sortAdvanced.forEach((item) => {
    item.addEventListener('click', (e) => {
        if (e.target.nodeName == 'I') {
            
            let sortPrice = e.target.dataset.price;
            let sortCaret = e.target.dataset.sort;
            if (sortCaret == 'up') {
                data.sort((a, b) => {
                    return b[sortPrice] - a[sortPrice];
                })
            
            }else{
                data.sort((a,b)=>{
                    return a[sortPrice] - b[sortPrice];
                })
            }
            renderData(data)
        }
    })
})
