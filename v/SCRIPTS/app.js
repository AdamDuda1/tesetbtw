
function localStoradgeLoad() {
    info = localStorage.setItem("theme", "light");
    info = info + sessionStorage.setItem("screenWidht", screen.width);
    info = info + sessionStorage.setItem("screenHeight", screen.height);
    info = info + sessionStorage.setItem("screenSize", screen.width + " x " + screen.height);
    info = info + sessionStorage.setItem("browserCodeName", navigator.appCodeName);
    info = info + sessionStorage.setItem("browserName", navigator.appName);
    info = info + sessionStorage.setItem("browserVersion", navigator.appVersion);
    info = info + sessionStorage.setItem("coockieEndable", navigator.cookieEnabled);
    info = info + sessionStorage.setItem("platformCodeName", navigator.platform);
    info = info + sessionStorage.setItem("userAgent", navigator.userAgent);
}
function browserCheck() {
        console.log("Twoja przeglądarka najprawdopodobniej kożysta z oprogramowania " + navigator.appName + ".");
        console.log("" + screen.width + " x " + screen.height);
        if (navigator.appName == "Microsoft Internet Explorer") {
                przegladarka = "Internet Explorer";
                alert("Twoja przeglądarka (" + przegladarka + "), nie obsłógóje najnowszych technologii jest już nie wspierana. Z tego powodu, strona może działać nie poprawnie.");
        }
}