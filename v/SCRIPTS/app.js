
function localStoradgeLoad() {
        localStorage.setItem("theme", "light");
        sessionStorage.setItem("screenWidht", screen.width);
        sessionStorage.setItem("screenHeight", screen.height);
        sessionStorage.setItem("screenSize", screen.width + " x " + screen.height);
        sessionStorage.setItem("browserCodeName", navigator.appCodeName);
        sessionStorage.setItem("browserName", navigator.appName);
        sessionStorage.setItem("browserVersion", navigator.appVersion);
        sessionStorage.setItem("coockieEndable", navigator.cookieEnabled);
        sessionStorage.setItem("platformCodeName", navigator.platform);
        sessionStorage.setItem("userAgent", navigator.userAgent);
}
function browserCheck() {
        console.log("Twoja przeglądarka najprawdopodobniej kożysta z oprogramowania " + navigator.appName + ".");
        console.log("" + screen.width + " x " + screen.height);
        if (navigator.appName == "Microsoft Internet Explorer") {
                przegladarka = "Internet Explorer";
                alert("Twoja przeglądarka (" + przegladarka + "), nie obsłógóje najnowszych technologii jest już nie wspierana. Z tego powodu, strona może działać nie poprawnie.");
        }
}