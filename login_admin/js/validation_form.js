function validateForm() {
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    var loginError = document.getElementById("login-error");
    var passwordError = document.getElementById("password-error");
  
    loginError.style.display = "none";
    passwordError.style.display = "none";
  
    if (login == "") {
      loginError.innerHTML = "Por favor, preencha o campo de email";
      loginError.style.display = "block";
      setTimeout(function() {
        loginError.style.display = "none";
      }, 10000);
      return false;
    }
  
    if (password == "") {
      passwordError.innerHTML = "Por favor, preencha o campo de senha";
      passwordError.style.display = "block";
      setTimeout(function() {
        passwordError.style.display = "none";
      }, 10000);
      return false;
    }

    if (password == "" && login == "") {
        passwordError.innerHTML = "Por favor, preencha ambos os campos";
        passwordError.style.display = "block";
        setTimeout(function() {
          passwordError.style.display = "none";
        }, 10000);
        return false;
      }
  
    // Enviar o formulário
    document.getElementById("login-form").submit();
  
    return true;
  }
  