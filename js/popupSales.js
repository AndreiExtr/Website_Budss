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
  });
});
