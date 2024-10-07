// ЗАКРЫТИЕ И ОТКРЫТИЕ POPUP

document.addEventListener('DOMContentLoaded', () => {
  const openPopupButtons = document.querySelectorAll('.btn');
  const closePopupButton = document.getElementById('closePopup');
  const popup = document.getElementById('popupSales');

  // Открытие попапа для каждой кнопки с классом 'openPopup'
  openPopupButtons.forEach(button => {
      button.addEventListener('click', () => {
          popup.style.display = 'flex';
      });
  });

  // Закрытие попапа
closePopupButton.addEventListener('click', () => {
    popup.style.display = 'none';

    // метод forEach удобен, когда нужно применить одну и ту же операцию 
    // к каждому элементу массива или коллекции, не создавая при этом дополнительных циклов for или while.
  
    // Скрываем все ошибки
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
      error.style.display = 'none'; // Скрываем ошибку
    });
  
    // Очищаем поля ввода
    const fields = document.querySelectorAll('.input-field');
    fields.forEach(field => {
      field.value = ''; // Очищаем значение
    });
  });  
});
