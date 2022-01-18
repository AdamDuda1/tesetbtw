launguage = "Polish"; // English

(function translate() {
    localStorage.setItem("launguage", "English");
    launguage = localStorage.getItem("launguage");
    while (true) {
        if (localStorage.getItem("launguage") == "Polish") {
            document.getElementsByClassName("navBarElementsLinks1").innerHTML = "O mnie";
        }
        else {
            document.getElementsByClassName("navBarElementsLinks1").innerHTML = "About me";
        }
    }
})
