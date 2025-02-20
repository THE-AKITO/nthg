document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").classList.add("hidden");
        document.getElementById("homepage").classList.remove("hidden");
    }, 2000);
});
