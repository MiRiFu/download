// **ページの要素をすべて読み込んでからスクリプトを実行**
document.addEventListener("DOMContentLoaded", function () {
    console.log("ページが完全に読み込まれました");

    // **ダウンロードボタン**
    const downloadBtn = document.getElementById("downloadBtn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", downloadVersion);
    } else {
        console.error("Error: ダウンロードボタンが見つかりません");
    }

    // **ダーク/ライトモード切替（スイッチ型）**
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            document.body.classList.toggle("dark-mode");
            localStorage.setItem("theme", this.checked ? "dark" : "light");
        });

        // **ページ読み込み時にテーマを復元**
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.checked = true;
        }
    } else {
        console.error("Error: テーマスイッチが見つかりません");
    }

    // **バージョン選択処理**
    const versionList = document.querySelectorAll(".version-item");
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

    const selectedVersion = document.querySelector(".selected-version");
    if (!selectedVersion) {
        alert("バージョンを選択してください");
        return;
    }

    const version = selectedVersion.dataset.version;
    if (!version) {
        alert("バージョンデータが取得できません");
        return;
    }

    const fileUrl = `downloads/${version}.zip`;
    console.log("ダウンロード URL:", fileUrl);

    // **ダウンロードリンクを作成して実行**
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = `${version}.zip`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

