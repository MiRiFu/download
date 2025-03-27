document.getElementById("downloadBtn").addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "files/sample.zip"; // ダウンロードするファイルのURL
    link.download = "sample.zip"; // 保存時のファイル名
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
