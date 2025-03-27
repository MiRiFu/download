document.addEventListener("DOMContentLoaded", function () {
    loadVersions();
    updateDownloadCount();
});

function loadVersions() {
    fetch("version.php")
    .then(response => response.json())
    .then(data => {
        const select = document.getElementById("versionSelect");
        data.forEach(item => {
            let option = document.createElement("option");
            option.value = item.filename;
            option.textContent = `Version ${item.version}`;
            select.appendChild(option);
        });
    })
    .catch(error => console.error("バージョン取得エラー:", error));
}

function downloadVersion() {
    const filename = document.getElementById("versionSelect").value;
    const url = `download.php?file=${filename}`;

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    updateDownloadCount();
}

function updateDownloadCount() {
    fetch("download.php?count=true")
    .then(response => response.text())
    .then(count => {
        document.getElementById("downloadCount").innerText = count;
    })
    .catch(error => console.error("カウント取得エラー:", error));
}
