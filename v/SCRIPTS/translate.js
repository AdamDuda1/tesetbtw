launguage = "Polish"; // 

(function translate() {
    launguage = "English";
    localStorage.setItem("launguage", launguage);
    while (true) {
        if (localStorage.getItem("launguage") == "Polish") {
            document.querySelector("navBarElementsLinks1").innerHTML = "O mnie";
        }
        else {
            document.querySelector("navBarElementsLinks1").innerHTML = "About me";
        }
    }
})
