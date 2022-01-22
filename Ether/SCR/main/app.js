const change_launguage_button = document.querySelector('.change_lang');

function setup() {
    console.log("The page has loaded successfully.");
    localStorage.setItem("lang", "en");

    let lang = localStorage.getItem("lang");
    if (lang = "en") {
        console.log(".localStorage has loaded successfully.");
    }
}

function change_lang() {

}
