const burgerInput = document.querySelector('.check-menu');


const nav = document.querySelector(".nav__menu");
const header__btns = document.querySelector(".header__btns ");

burgerInput.addEventListener('change', function () {
    if (burgerInput.checked) {
        nav.classList.add("active");
        header__btns.classList.add("active");
        document.body.classList.add("lock");
    } else {
        nav.classList.remove("active");
        header__btns.classList.remove("active");
        document.body.classList.remove("lock");
    }
});

nav.addEventListener("click", function () {
    if (burgerInput.checked) {
        nav.classList.remove("active");
        header__btns.classList.remove("active");
        document.body.classList.remove("lock");
        burgerInput.checked = false;
    }
})

header__btns.addEventListener("click", function () {
    if (burgerInput.checked) {
        nav.classList.remove("active");
        header__btns.classList.remove("active");
        document.body.classList.remove("lock");
        burgerInput.checked = false;
    }
})