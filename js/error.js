document.addEventListener('DOMContentLoaded', () => { 
  const doneButton = document.getElementById('done');
  
  doneButton.addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');

    const nameError = nameField.nextElementSibling;  // Получаем элемент ошибки рядом с полем
    const emailError = emailField.nextElementSibling;
    const phoneError = phoneField.nextElementSibling;

    // Проверка поля "Name"
    if (nameField.value.trim() === '') {
      nameError.style.display = 'block';  // Отображаем ошибку
    } else {
      nameError.style.display = 'none';  // Скрываем ошибку
    }

    // Проверка поля "Email"
    if (emailField.value.trim() === '') {
      emailError.style.display = 'block';
    } else {
      emailError.style.display = 'none';
    }

    // Проверка поля "Phone"
    if (phoneField.value.trim() === '') {
      phoneError.style.display = 'block';
    } else {
      phoneError.style.display = 'none';
    }
  });
});
