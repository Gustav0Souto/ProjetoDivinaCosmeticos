// Função para validar o e-mail
function validateEmail() {
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    const email = emailInput.value.trim();

    if (email === '') {
      emailError.textContent = 'O campo de e-mail não pode ficar vazio.';
      emailInput.classList.add('is-invalid');
      return false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Por favor, digite um e-mail válido.';
      emailInput.classList.add('is-invalid');
      return false;
    }

    emailError.textContent = '';
    emailInput.classList.remove('is-invalid');
    return true;
  }

  // Manipulador de evento para o envio do formulário
  document.getElementById('emailForm').addEventListener('submit', function(event) {
    if (!validateEmail()) {
      event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
  });