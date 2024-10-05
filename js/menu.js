const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

// Открытие меню при клике на бургер
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

    // Убираем или добавляем прокрутку
    if (menu.classList.contains('active')) {
      document.body.style.overflow = 'hidden'; // Отключаем прокрутку
    } else {
        document.body.style.overflow = 'auto'; // Включаем прокрутку
    }
});

// Закрытие меню при клике на крестик
closeMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
});

// Закрытие меню при изменении размера окна
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
      burger.classList.remove('active');
      menu.classList.remove('active');
  }
});