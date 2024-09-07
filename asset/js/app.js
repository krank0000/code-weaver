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
