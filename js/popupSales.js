document.addEventListener('DOMContentLoaded', () => {
    const openPopupButtons = document.querySelectorAll('.btn');
    const closePopupButton = document.getElementById('closePopup');
    const popupSales = document.getElementById('popupSales');
    const superButton = document.getElementById('superButton');
    const popupApplication = document.getElementById('popupApplication');
  
    // Функция очистки полей и ошибок
    function clearFieldsAndErrors() {
      // Скрываем все ошибки
      const errors = document.querySelectorAll('.error');
      errors.forEach(error => {
        error.style.display = 'none'; // Скрываем ошибку
      });
  
      // Очищаем поля ввода
      const fields = document.querySelectorAll('.input-field');
      fields.forEach(field => {
        field.value = ''; // Очищаем значение
        field.style.border = '1px solid #F1F1F1'; // Сбрасываем стиль
      });
    }
  
    // Открытие попапа для каждой кнопки с классом 'btn'
    openPopupButtons.forEach(button => {
      button.addEventListener('click', () => {
        clearFieldsAndErrors(); // Очищаем поля при каждом открытии попапа
        popupSales.style.display = 'flex';
      });
    });
  
    // Закрытие попапа с полями
    closePopupButton.addEventListener('click', () => {
      popupSales.style.display = 'none';
      clearFieldsAndErrors(); // Очищаем поля при закрытии попапа
    });
  
    // Закрытие попапа об успешной отправке заявки
    superButton.addEventListener('click', () => {
      popupApplication.style.display = 'none'; // Скрываем попап об успешной отправке
      clearFieldsAndErrors(); // Очищаем поля перед открытием формы заново
      popupSales.style.display = 'flex'; // Возвращаемся к форме
    });
  });
  