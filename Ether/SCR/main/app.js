const change_launguage_button = document.querySelector('.footerButton');
let lang = localStorage.getItem("lang");

function setup() {
    console.log("The page has loaded successfully.");
    localStorage.setItem("lang", "en");

    if (lang = "en") {
        console.log(".localStorage has loaded successfully.");
    }
    else if (lang = "pl") {
        langUpdate();
    }
    console.log("Your language: " + localStorage.getItem("lang") + ".")
}

function change_lang() {
    if (lnag = "en") {
        localStorage.setItem("lang", "pl");
        document.querySelector('body').setAttribute("lang", "pl");
    }
    else if (lang = "pl") {
        localStorage.setItem("lang", "en");
        document.querySelector('body').setAttribute("lang", "en");
    }
    console.log("Your language: " + localStorage.getItem("lang") + ".");
    langUpdate();
}

function langUpdate() {
    document.querySelector('.footerButton').innerHTML = "Polish";
}