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
