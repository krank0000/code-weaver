$(document).ready(function () {
  $(".VSCode_btn").click(function () {
    var $vscode = $(".VSCODE");
    var $body = $("body");

    // 檢查是否處於手機模式
    if (window.matchMedia("(max-width: 1140px)").matches) {
      // 如果是手機模式，打開 VSCode API 官方連結並在新頁面顯示
      window.open("https://code.visualstudio.com/api", "_blank");
    } else {
      // 桌面模式下的滑動功能
      if ($vscode.is(":visible")) {
        // 如果可見，滑動到右側隱藏並恢復頁面的滾動條
        $vscode.animate({ marginRight: "-100%" }, "slow", function () {
          $vscode.hide();
          $body.css("overflow", "auto"); // 恢復滾動條
        });
      } else {
        // 如果不可見，禁用頁面滾動條，顯示元素並從右側滑動到原位
        $body.css("overflow", "hidden"); // 禁用滾動條
        $vscode.show().css({ marginRight: "-100%" });
        $vscode.animate({ marginRight: "0" }, "slow");
      }
    }
  });
});

// 菜單變形icon
const menuIcons = document.querySelectorAll(".menu-icon");
let isMenuOpen = false;

menuIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    isMenuOpen ? icon.classList.add("open") : icon.classList.remove("open");
  });
});

// 其他功能
$(document).ready(function () {
  $(".user").click(function () {
    // 檢查螢幕寬度是否大於 1140px（桌面模式）
    if (window.matchMedia("(min-width: 1140px)").matches) {
      $(".other").toggle();
    }
  });
});

//手機板側邊欄顯示/關閉
document.getElementById("icon1").addEventListener("click", function () {
  var menuNavFooter = document.querySelector(".menu_nav_footer");
  menuNavFooter.classList.toggle("active");
});

//首頁輸入框
const textarea = document.getElementById("message_text");

// 自動增行的函數
textarea.addEventListener("input", function () {
  // 重置高度，防止高度不變
  textarea.style.height = "auto";
  // 根據內容自動調整高度
  textarea.style.height = textarea.scrollHeight + "px";
});

// 首頁loading切換
// 更新每個 section 狀態的函數
function updateSection(section, delay) {
  setTimeout(() => {
    const checkIcon = section.querySelector("i");
    const statusText = section.querySelector("p:last-of-type");

    checkIcon.style.display = "inline"; // 顯示勾號圖示
    statusText.textContent = "已完成"; // 更新文字
  }, delay);
}

// 切換到 loading_area 的功能
function switchDiv() {
  var indexDiv = document.querySelector(".switch_div");
  var loadingDiv = document.querySelector(".switch_loading_area");
  var loadingTitle = document.querySelector(".loading_area h1"); // 取得 h1 元素
  var loadingBtnArea = document.querySelector(".loading_btn_area"); // 取得 loading_btn_area 區域
  var currentUrl = window.location.href; // 取得當前 URL

  if (indexDiv) {
    indexDiv.style.display = "none"; // 隱藏 switch_index
  }

  if (loadingDiv) {
    loadingDiv.style.display = "block"; // 顯示 switch_loading_area
  }

  if (currentUrl.includes("system.html")) {
    // 當前頁面為 system.html 時的操作

    // 3秒後修改 <h1> 標題
    setTimeout(function () {
      if (loadingTitle) {
        loadingTitle.textContent = "程式碼生成完成"; // 修改 h1 標題
      }

      // 修改按鈕為「檢視程式碼」
      if (loadingBtnArea) {
        loadingBtnArea.innerHTML = `
            <input
              type="button"
              class="loading_btn back_btn"
              id="loading_codebtn"
              value="檢視程式碼"
              onclick=""
            />
          `;
      }
    }, 3000); // 3秒後執行

    // 更新進度條顯示，每隔600ms更新一個section狀態
    const sections = document.querySelectorAll("#progress-article section");
    sections.forEach((section, index) => {
      updateSection(section, index * 600); // 每隔600ms更新一個section狀態
    });
  } else {
    // 當前頁面為 index.html 或 requirement.html 時

    // 1.9秒後修改 <h1> 標題和新增 <p>
    setTimeout(function () {
      if (loadingTitle) {
        loadingTitle.textContent = "生成完畢"; // 修改 h1 標題
      }
      // 新增 <p> 自動跳轉
      var showParagraph = document.querySelector(".show_loadingP");
      showParagraph.style.display = "block";
    }, 1900); // 1.9秒後執行

    // 根據當前頁面決定跳轉
    setTimeout(function () {
      if (currentUrl.includes("index.html")) {
        // 從 index.html 跳轉到 requirement.html
        window.location.href = "./page/requirement.html";
      } else if (currentUrl.includes("requirement.html")) {
        // 從 requirement.html 跳轉到 system.html
        window.location.href = "system.html";
      }
    }, 2900); // 2.9秒後執行
  }
}

// 返回 switch_index 的功能
function goBack() {
  var indexDiv = document.querySelector(".switch_div");
  var loadingDiv = document.querySelector(".switch_loading_area");

  if (loadingDiv) {
    loadingDiv.style.display = "none"; // 隱藏 switch_loading_area
  }

  if (indexDiv) {
    indexDiv.style.display = "block"; // 顯示 switch_index
  }
}
