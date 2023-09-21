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

// document.addEventListener("DOMContentLoaded", function () {
//    // Проверяем, была ли страница перезагружена в текущей сессии
// if (!sessionStorage.getItem('pageReloaded')) {
//     // Если нет, то очищаем кэш и устанавливаем флаг о перезагрузке
//     sessionStorage.setItem('pageReloaded', 'true');
//     window.location.reload(true);
//   }
//   });

// Генерируем случайное число и добавляем его к URL-адресу ресурсов
function bustCache() {
    return Math.random().toString(36).substring(2);
  }
  
  // Обновляем URL-адреса всех ресурсов с добавлением случайного параметра
  function updateResourceUrls() {
    const resources = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    resources.forEach(resource => {
      const url = resource.href || resource.src;
      if (url) {
        const newUrl = url + (url.includes('?') ? '&' : '?') + '_=' + bustCache();
        if (resource.href) {
          resource.href = newUrl;
        } else {
          resource.src = newUrl;
        }
      }
    });
  }
  
  // Вызываем функцию обновления URL-адресов после загрузки страницы
  document.addEventListener('DOMContentLoaded', updateResourceUrls);

