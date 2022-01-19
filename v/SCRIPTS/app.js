const moonico = document.getElementsByClassName("moon-icon")
const sunico = document.getElementsByClassName("navBarElementsLinks4")

console.log(sunico);
console.log(moonico);

moonico.addEventListener('click', () => {
        console.log(moonico);
})
sunico.addEventListener('click', () => {
        alert('a to funkcja anonimowa');
})
(function localStoradgeLoad() {
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
        document.cookie="username=AdamDuda; expires=Thu, 18 Dec 2013 12:00:00 GMT; path=/";
})
function browserCheck() {
        console.log("Twoja przeglądarka najprawdopodobniej kożysta z oprogramowania " + navigator.appName + ".");
        console.log("" + screen.width + " x " + screen.height);
        if (navigator.appName == "Microsoft Internet Explorer") {
                przegladarka = "Internet Explorer";
                alert("Twoja przeglądarka (" + przegladarka + "), nie obsłógóje najnowszych technologii jest już nie wspierana. Z tego powodu, strona może działać nie poprawnie.");
        }
}