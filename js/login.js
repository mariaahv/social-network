$(document).ready(login);

function login() {
  // selecciona ELEMENTOS DEL DOM   
  var inputEmailLogin = $('#email-login');
  var inputPasswordLogin = $('#password-login');
  var btnLogin = $('#btn-login');

  // variables centinelas
  var validInputEmail = false;
  var validInputPasssword = false;   

  // añade eventos a inputs
  inputEmailLogin.on('input', verifyEmailCredential);   
  inputPasswordLogin.on('input', verifyPasswordCredential);
  btnLogin.on('click', function(event) {
    event.preventDefault();
    window.location.href = 'profile.html';
  });

  function verifyEmailCredential() {
    if (inputEmailLogin.val() === localStorage.email) {
      console.log('valid email');
      validInputEmail = true;
      allInputsLoginValid();  
    } else {
      validInputEmail = false;
      desactiveBtnLogin(btnLogin);
    }
  }

  function verifyPasswordCredential() {
    if (inputPasswordLogin.val() === localStorage.password) {
      console.log('valid password');        
      validInputPasssword = true;
      allInputsLoginValid();  
    } else {
      validInputPasssword = false;
      desactiveBtnLogin(btnLogin);
    }
  }

  function allInputsLoginValid() { 
    if (validInputEmail && validInputPasssword) {
      activeBtnLogin(btnLogin);
    }
  }

  function activeBtnLogin(btn) {
    btn.removeClass('disabled');
  }

  function desactiveBtnLogin(btn) {
    btn.addClass('disabled');  
  }
}