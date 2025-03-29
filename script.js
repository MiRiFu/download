document.addEventListener("DOMContentLoaded", function () {
    const versionButtons = document.querySelectorAll(".version-list button");
    const downloadBtn = document.getElementById("downloadBtn");
    const themeSwitch = document.getElementById("themeSwitch");
    let selectedVersion = null;

    // バージョンボタンのクリックイベント
    versionButtons.forEach(button => {
        button.addEventListener("click", function () {
            selectedVersion = this.dataset.version;
            console.log("選択されたバージョン:", selectedVersion);
        });
    });

    // ダウンロードボタンのクリックイベント
    downloadBtn.addEventListener("click", function () {
        if (!selectedVersion) {
            alert("バージョンを選択してください。");
            return;
        }
        const downloadUrl = `https://github.com/MiRiFu/download/downloads/${selectedVersion}.zip`;
        console.log("ダウンロード開始:", downloadUrl);
        window.location.href = downloadUrl;
    });

    // ダークモードの設定をローカルストレージに記録
    function applyTheme(isDarkMode) {
        document.body.classList.toggle("dark-mode", isDarkMode);
        themeSwitch.checked = isDarkMode;
        localStorage.setItem("darkMode", isDarkMode);
    }

    // ページ読み込み時にテーマ設定を適用
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme !== null) {
        applyTheme(savedTheme === "true");
    }

    // ダークモード切り替えイベント
    if (themeSwitch) {
        themeSwitch.addEventListener("change", function () {
            applyTheme(this.checked);
        });
    } else {
        console.error("テーマスイッチが見つかりません");
    }
});
