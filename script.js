// **ページが完全に読み込まれたら実行**
 window.onload = function () {
     const savedTheme = localStorage.getItem("theme");
     const themeToggle = document.getElementById("modeSwitch");
 
     if (savedTheme === "dark") {
         document.body.classList.add("dark-mode");
         if (themeToggle) themeToggle.checked = true;
     }
 
     // **ダークモード切り替え**
     if (themeToggle) {
         themeToggle.addEventListener("change", function () {
             document.body.classList.toggle("dark-mode", this.checked);
             localStorage.setItem("theme", this.checked ? "dark" : "light");
         });
     }
 };

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");
    const versionList = document.querySelectorAll(".version-item"); // バージョン選択リスト

    if (!downloadBtn) {
        console.error("ダウンロードボタンが見つかりません");
        return;
    }

    // バージョンをクリックすると `.selected-version` をつける
    versionList.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".version-item").forEach(v => v.classList.remove("selected-version"));
            this.classList.add("selected-version");
        });
    });

function downloadVersion() {
    console.log("ダウンロードボタンがクリックされました");

    // 選択されたバージョンを取得
    const selectedVersion = document.querySelector(".selected-version");
    if (!selectedVersion) {
        alert("バージョンを選択してください");
        return;
    }

    const version = selectedVersion.dataset.version;
    console.log("選択されたバージョン:", version); // デバッグ用

    if (!version) {
        alert("バージョンデータが取得できません");
        return;
    }

    // ダウンロード URL 設定
    const fileUrl = `downloads/${version}.zip`; // ダウンロード URL 設定

    console.log("ダウンロード URL:", fileUrl); // 確認用

    // ダウンロード処理
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${version}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// **バージョン選択時の動作**
function downloadVersion(version) {
    const versionInfo = document.getElementById("version-info");
    if (versionInfo) versionInfo.textContent = "選択中のバージョン: " + version;
}
