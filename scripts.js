const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('closeMenu');

// Открытие меню при клике на бургер
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// Закрытие меню при клике на крестик
closeMenu.addEventListener('click', () => {
    burger.classList.remove('active');
    menu.classList.remove('active');
});

// Показывать уведомление через 3 секунды после загрузки страницы
window.addEventListener('load', () => {
  setTimeout(() => {
      const cookiesSection = document.getElementById('cookies');
      cookiesSection.style.display = 'flex';
  }, 3000); // 3000 миллисекунд = 3 секунды
});

// Обработка кнопок
document.querySelector('.btn-accept').addEventListener('click', () => {
  // Логика для принятия куки
  document.getElementById('cookies').style.display = 'none'; // Скрыть уведомление
});

document.querySelector('.btn-decline').addEventListener('click', () => {
  // Логика для отклонения куки
  document.getElementById('cookies').style.display = 'none'; // Скрыть уведомление
});



// Закрытие меню при изменении размера окна
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
      burger.classList.remove('active');
      menu.classList.remove('active');
  }
});