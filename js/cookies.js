// Показывать уведомление через 3 секунды после загрузки страницы
window.addEventListener('load', () => {
  setTimeout(() => {
      const cookiesSection = document.getElementById('cookies');
      cookiesSection.style.display = 'flex';
  }, 1500);
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