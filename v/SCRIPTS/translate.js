launguage = "Polish"; // English

(function translate() {
    launguage = "English";
    localStorage.setItem("launguage", "English");
    while (true) {
        if (localStorage.getItem("launguage") == "Polish") {
            document.getElementsByClassName("navBarElementsLinks1").innerHTML = "O mnie";
        }
        else {
            document.getElementsByClassName("navBarElementsLinks1").innerHTML = "About me";
        }
    }
})
