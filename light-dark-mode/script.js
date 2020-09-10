const toggleSwitch = document.querySelector('input[type = "checkbox"]');
const toggleIcon = document.querySelector('#toggle-icon');
const nav = document.querySelector('#nav');
const image1 = document.querySelector('#image1');
const image2 = document.querySelector('#image2');
const image3 = document.querySelector('#image3');
const textBox = document.querySelector('#text-box');


//image light or dark color
const imageMode = (mode) => {
    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

//function light dark mode
const toggleDarkLightMode = (isDark) => {
    nav.style.background = isDark ? "rgb(0 0 0 / 50%)" : "rgb(255 255 255 / 50%)";
    textBox.style.background = isDark ? "rgb(255 255 255 / 50%)" :  "rgb(0 0 0 / 50%)";
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : "Light Mode";
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? imageMode('dark') : imageMode('light')
}


//switch theme dinámico
const switchTheme = (e) => {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(true);   
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(false);
    }
};


//Event Listener
toggleSwitch.addEventListener('change', switchTheme); 

//save swichTheme en Local Storage
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true);
    }
}