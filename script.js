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

// **バージョン選択時の動作**
function downloadVersion(version) {
    const versionInfo = document.getElementById("version-info");
    if (versionInfo) versionInfo.textContent = "選択中のバージョン: " + version;
}

document.addEventListener("DOMContentLoaded", function () {
    const downloadBtn = document.getElementById("downloadBtn");

    if (!downloadBtn) {
        console.error("ダウンロードボタンが見つかりません");
        return;
    }

    downloadBtn.addEventListener("click", function () {
        console.log("ダウンロードボタンがクリックされました"); // デバッグ用

        // ダウンロードするファイルの URL を取得
        const selectedVersion = document.querySelector(".selected-version");
        if (!selectedVersion) {
            alert("バージョンを選択してください");
            return;
        }

        const version = selectedVersion.dataset.version;
        const fileUrl = `downloads/${version}.zip`; // ここにダウンロード URL を設定

        // ダウンロード処理
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = `${version}.zip`; // ファイル名を指定
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
