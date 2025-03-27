// ダウンロード処理
document.getElementById("downloadBtn").addEventListener("click", function () {
    const selectedVersion = document.getElementById("versionSelect").value;
    const link = document.createElement("a");
    link.href = "files/" + selectedVersion;
    link.download = selectedVersion;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

// ダーク/ライトモード切替処理
document.getElementById("themeToggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    this.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// ページ読み込み時にテーマを復元
window.onload = function () {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        document.getElementById("themeToggle").textContent = "☀️";
    }
};
