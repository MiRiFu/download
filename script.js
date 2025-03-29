// **ダウンロード処理**
document.getElementById("downloadBtn").addEventListener("click", function () {
    downloadVersion();
});

// **ダーク/ライトモード切替（スイッチ型）**
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("change", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", this.checked ? "dark" : "light");
});

// **ページ読み込み時にテーマを復元**
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggle.checked = true;
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const versionList = document.querySelectorAll(".version-item"); // バージョン選択リスト

    // バージョンをクリックすると `.selected-version` をつける
    versionList.forEach(item => {
        item.addEventListener("click", function () {
            document.querySelectorAll(".version-item").forEach(v => v.classList.remove("selected-version"));
            this.classList.add("selected-version");
        });
    });
});

// **バージョンダウンロード関数**
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
    const fileUrl = `downloads/${version}.zip`;

    console.log("ダウンロード URL:", fileUrl); // 確認用

    // **ダウンロード処理**
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${version}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

