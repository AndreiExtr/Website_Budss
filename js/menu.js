const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

// Открытие меню при клике на бургер
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');

  // Отключаем прокрутку
  document.body.style.overflow = 'hidden'; 
});

// Закрытие меню при клике на крестик
closeMenu.addEventListener('click', () => {
  burger.classList.remove('active');
  menu.classList.remove('active');

  // setTimeout, чтобы избежать конфликтов
  setTimeout(() => {
      document.body.style.overflow = 'auto'; // Включаем прокрутку
  }, 300);
});


// Закрытие меню при изменении размера окна
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
      burger.classList.remove('active');
      menu.classList.remove('active');
  }
});