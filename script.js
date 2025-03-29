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
        const downloadUrl = `https://mirifu.github.io/downloads/${selectedVersion}.zip`;
        console.log("ダウンロード開始:", downloadUrl);
        window.location.href = downloadUrl;
    });

    // ダークモード切り替え
    if (themeSwitch) {
        themeSwitch.addEventListener("change", function () {
            document.body.classList.toggle("dark-mode", this.checked);
        });
    } else {
        console.error("テーマスイッチが見つかりません");
    }
});

