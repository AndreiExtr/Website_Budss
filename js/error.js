document.addEventListener('DOMContentLoaded', () => { 
  const doneButton = document.getElementById('done');
  
  doneButton.addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');

    // .nextElementSibling — это свойство, которое возвращает следующий элемент 
    // (соседний) в DOM после данного элемента, который находится на том же уровне вложенности.

    const nameError = nameField.nextElementSibling; 
    const emailError = emailField.nextElementSibling;
    const phoneError = phoneField.nextElementSibling;

    // Проверка поля "Name"
    if (nameField.value.trim() === '') {
      nameError.style.display = 'block';
      nameField.style.border = '1px solid #ff0000';
    } else {
      nameError.style.display = 'none';
      nameField.style.border = '1px solid #F1F1F1';
    }

    // Проверка поля "Email"
    if (emailField.value.trim() === '') {
      emailError.style.display = 'block';
      emailField.style.border = '1px solid #ff0000';
    } else {
      emailError.style.display = 'none';
      emailField.style.border = '1px solid #F1F1F1';
    }

    // Проверка поля "Phone"
    const phoneValue = phoneField.value.trim();

    if (phoneValue === '') {
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number is required';
      phoneField.style.border = '1px solid #ff0000';
    } else if (!phoneValue.startsWith('+1')) {
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number must start with +1';
      phoneField.style.border = '1px solid #ff0000';
    } else if (!/^\+1\d+$/.test(phoneValue)) {  // Проверяем, что после +1 только цифры
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number must contain only digits after +1';
      phoneField.style.border = '1px solid #ff0000';
    } else if (phoneValue.length !== 14) {  // Проверяем длину номера телефона (макс. 14 символов)
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number must not exceed 14 characters';
      phoneField.style.border = '1px solid #ff0000';
    } else {
      phoneError.style.display = 'none';  // Скрываем ошибку, если номер корректен
      phoneField.style.border = '1px solid #F1F1F1';  // Возвращаем стандартную рамку
    }

  });
});
