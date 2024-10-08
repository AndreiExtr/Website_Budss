document.addEventListener('DOMContentLoaded', () => { 
  const doneButton = document.getElementById('done');
  const superButton = document.getElementById('applicationPopup');
  const popupApplication = document.getElementById('popupApplication'); // Следующий попап
  const popupSales = document.getElementById('popupSales'); // Текущий попап

  doneButton.addEventListener('click', () => {
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const phoneField = document.getElementById('phone');

    const nameError = nameField.nextElementSibling;
    const emailError = emailField.nextElementSibling;
    const phoneError = phoneField.nextElementSibling;

    let isValid = true; // Флаг для проверки, все ли поля корректны

    // Проверка поля "Name"
    if (nameField.value.trim() === '') {
      nameError.style.display = 'block';
      nameField.style.border = '1px solid #ff0000';
      isValid = false; // Устанавливаем флаг в false, если есть ошибка
    } else {
      nameError.style.display = 'none';
      nameField.style.border = '1px solid #F1F1F1';
    }

    // Проверка поля "Email"
    const emailValue = emailField.value.trim();

    // Регулярное выражение для проверки email (как для международных, так и для российских доменов)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ru|com|net|org|gov|edu|info|biz)$/i;

    if (emailValue === '') {
      emailError.style.display = 'block';
      emailError.textContent = 'Email is required';
      emailField.style.border = '1px solid #ff0000';
      isValid = false; // Устанавливаем флаг в false, если поле пустое
    } else if (!emailRegex.test(emailValue)) {
      emailError.style.display = 'block';
      emailError.textContent = 'Please enter a valid email address';
      emailField.style.border = '1px solid #ff0000';
      isValid = false; // Устанавливаем флаг в false, если email некорректен
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
      isValid = false;
    } else if (!phoneValue.startsWith('+1')) {
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number must start with +1';
      phoneField.style.border = '1px solid #ff0000';
      isValid = false;
    } else if (!/^\+1\d+$/.test(phoneValue)) {
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number must contain only digits after +1';
      phoneField.style.border = '1px solid #ff0000';
      isValid = false;
    } else if (phoneValue.length !== 14) {
      phoneError.style.display = 'block';
      phoneError.textContent = 'Phone number must be exactly 14 characters';
      phoneField.style.border = '1px solid #ff0000';
      isValid = false;
    } else {
      phoneError.style.display = 'none';
      phoneField.style.border = '1px solid #F1F1F1';
    }

    // Если все поля корректны, переходим к следующему попапу
    if (isValid) {
      popupSales.style.display = 'none'; // Скрываем текущий попап
      popupApplication.style.display = 'flex'; // Переход к следующему попапу

      superButton.addEventListener('click', () => {
        popupApplication.style.display = 'none';
      });
    }
  });
});

