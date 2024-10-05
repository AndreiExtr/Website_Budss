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
