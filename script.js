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

    downloadBtn.addEventListener("click", function () {
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

        const fileUrl = `downloads/${version}.zip`; // ダウンロード URL 設定

        console.log("ダウンロード URL:", fileUrl); // 確認用

        // ダウンロード処理
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = `${version}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});
