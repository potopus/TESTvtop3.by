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


const scrollableContainer = document.querySelector('.blog__content');
const absoluteBlock = document.querySelector('.dot__light-down');

// scrollableContainer.addEventListener('scroll', () => {
//   const scrollTop = scrollableContainer.scroll;
//   // Измените положение .absolute-block на основе значения scrollTop
//   absoluteBlock.style.top = `${scrollTop}px`;
// });



scrollableContainer.addEventListener('scroll', () => {
  const scrollTop = scrollableContainer.scrollTop;
  const containerHeight = scrollableContainer.clientHeight; // Высота видимой области контейнера
  const absoluteBlockHeight = absoluteBlock.clientHeight; // Высота блока .absolute-block

  // Рассчитываем новое значение для bottom
  const newBottom = containerHeight - scrollTop - absoluteBlockHeight;

  // Применяем новое значение к свойству bottom
  absoluteBlock.style.bottom = `${newBottom}px`;
});
