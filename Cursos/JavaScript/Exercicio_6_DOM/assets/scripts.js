function changeMode () {
    //console.log("cliquei!");
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass);
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText() {
    const lightMode = "light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClasss)) {
        button.innerHTML = "Light Mode";
        h1.innerHTML = "darkMode" + " ON";
        return;
    }

    button.innerHTML = darkMode;
        h1.innerHTML = lightMode + " ON";
}

const darkModeClasss = "dark-mode";
const button = document.getElementById("mode-selector");
const h1 = document.getElementById("page-list");
const body = document.getElementsByTagName("body")[0];
const footer = document.getElementsByTagName("footer")[0];
button.addEventListener("click", changeMode);
