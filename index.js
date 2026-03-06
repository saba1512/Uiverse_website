const btn = document.querySelector("#modes");
const body = document.querySelector("body");
const logo = document.querySelector(".button")

btn.addEventListener('click', () => {
    body.classList.toggle('NightMode')
    logo.classList.toggle('NightModeLogo')
    if (btn.textContent !== 'Light mode') {
        btn.textContent = 'Light mode'
        btn.style.border = '1px solid #37FF8B'
    } else{
        btn.style.border = '1px solid #000000'
        btn.textContent = 'Night mode'
    }
})


const burger = document.querySelector('.burger');
const links = document.querySelector('.nav-link');

burger.addEventListener('click', () => {
    links.classList.toggle('active');
});