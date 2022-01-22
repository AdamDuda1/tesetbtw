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
    console.log("------------------");
    langUpdate();
}

function langUpdate() {
    if (lang = "pl") {
        document.querySelector('.footerButton').innerHTML = "Polish";
        document.querySelector('header .subtitle').innerHTML = "Ether to projekt, który jest rozwijany pod kątem nauki programowania. Na naszej stronie, możesz nauczyć się tworzyć podstawowe strony internetowe. Zapraszamy! ";
        document.querySelector('header .title').innerHTML = "Co to Ether?";
        document.querySelector('').innerHTML = "";
        document.querySelector('').innerHTML = "";
        document.querySelector('').innerHTML = "";
    }
    else if (lang = "en") {
        document.querySelector('.footerButton').innerHTML = "English";
        document.querySelector('header .subtitle').innerHTML = "Ether is a project that is being developed with the focus on learning programming. On our website, you can learn how to create basic websites. We invite you!";
        document.querySelector('header .title').innerHTML = "What's Ether?";
        document.querySelector('').innerHTML = "";
        document.querySelector('').innerHTML = "";
    }
}