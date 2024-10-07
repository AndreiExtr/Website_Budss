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
    if (phoneField.value.trim() === '') {
      phoneError.style.display = 'block';
      phoneField.style.border = '1px solid #ff0000';
    } else {
      phoneError.style.display = 'none';
      phoneField.style.border = '1px solid #F1F1F1';
    }
  });
});
