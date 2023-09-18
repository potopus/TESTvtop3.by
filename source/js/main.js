const burgerInput = document.querySelector('.check-menu');

burgerInput.addEventListener('change', function () {
    const nav = document.querySelector(".nav__menu");
    const header__btns = document.querySelector(".header__btns ");
    if (this.checked) {
        nav.classList.add("active");
        header__btns.classList.add("active");
        document.body.classList.add("lock");
    } else {
        nav.classList.remove("active");
        header__btns.classList.remove("active");
        document.body.classList.remove("lock");
    }
});