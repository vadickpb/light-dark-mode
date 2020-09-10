const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const nav = document.querySelector('#nav');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');



//modo oscuro
const darkMode = () => {
    nav.style.background = "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = "Dark Mode";
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    textBox.style.background = "rgb(255 255 255 / 50%)";
    image1.src = "img/undraw_proud_coder_dark.svg";
    image2.src = "img/undraw_feeling_proud_dark.svg";
    image3.src = "img/undraw_conceptual_idea_dark.svg"

}

const lightMode = () => {
    nav.style.background = "rgb(255 255 255 / 50%)";
    toggleIcon.children[0].textContent = "Light Mode";
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    textBox.style.background = "rgb(0 0 0 / 50%)";
    image1.src = "img/undraw_proud_coder_light.svg";
    image2.src = "img/undraw_feeling_proud_light.svg";
    image3.src = "img/undraw_conceptual_idea_light.svg"
}


//switch theme dinámico
const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();   
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
};


//Event Listener
toggleSwitch.addEventListener('change', switchTheme); 