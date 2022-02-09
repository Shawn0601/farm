// JSON 檔案網址
const url = "https://hexschool.github.io/js-filter-data/data.json";
const productsList = document.querySelector(".showList");
let data = [];
function getData() {
  axios.get('https://hexschool.github.io/js-filter-data/data.json').then(function (response) {
    data = response.data;
    renderData(data);
  });
}
getData();
function renderData(showData) {
  let str = "";
  showData.forEach((item) => {
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

const search = document.querySelector(".search");
/** 題目填答區開始  **/
/** 步驟一 **/
//註冊監聽 search 的點擊事件，並帶入事件參數
//以下步驟在監聽函式內執行
//透過 if 判斷點擊到的等於以下按鈕
//<button type="button" class="search text-white btn mb-2">搜尋</button>
search.addEventListener("click", (e)=>{
  if(e.target.nodeName === "BUTTON"){
    let crop = document.querySelector("#crop")
    if(crop.value.trim() === ""){
      alert("請輸入作物名稱！");
      return
    }
    let filterData = [];
   filterData =  data.filter(item=>
      // item.作物名稱 === crop.value
      item.作物名稱.match(crop.value)
    )
    if (filterData.length === 0) {
      productsList.innerHTML =
        '<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>';
    } else {
      renderData(filterData)
    };
  }
})

/** 步驟二 **/
//以下步驟在 if 等於按鈕判斷式內執行
//選取以下節點
//<input class="rounded-end" type="search" placeholder="請輸入作物名稱" id="crop" name="crop">
//透過選取的節點判斷以上 input 欄位值濾掉空格後是否為空字串
//為空字串跳出 alert("請輸入作物名稱！") 並 return

/** 步驟三 **/
//宣告一個變數 filterData 並賦予值為空陣列
//透過 data 跑 filter，並至少帶入一個參數
//透過 filter 篩選出作物名稱與 input 欄位值相等的結果
//將篩選的值賦予給 filterData

/** 步驟四 **/
//判斷 filterData 長度等於零
//等於零的情況下
//將節點 productsList 透過 innerHTML 的方式賦予以下 HTML 標籤字串
// '<tr><td colspan="6" class="text-center p-3">查詢不到交易資訊QQ</td></tr>'
//不等於零的情況下執行函式 renderData 並帶入參數 filterData

/** 題目填答區結束  **/
