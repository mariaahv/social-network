$(document).ready(login);

function login() {
  // selecciona ELEMENTOS DEL DOM   
  var inputEmailLogin = $('#email-login');
  var inputPasswordLogin = $('#password-login');
  var btnLogin = $('#btn-login');

  // variables centinelas
  var validInputEmail = false;
  var validInputPasssword = false;   

  var regexEmail = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);

  // añade eventos a inputs
  inputEmailLogin.on('input', verifyEmailCredential);   
  inputPasswordLogin.on('input', verifyPasswordCredential);
  btnLogin.on('click', function(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(inputEmailLogin.val(), inputPasswordLogin.val())
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
    // observar el cambio de un usuario
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.        
        window.location.href = 'profile.html';
      } else {
        // User is signed out.
        console.log('usuario no logueado');
      }
    });
  });

  function verifyEmailCredential() {
    if (regexEmail.test($(inputEmailLogin).val())) {
      console.log('valid email');
      validInputEmail = true;
      allInputsLoginValid();  
    } else {
      validInputEmail = false;
      desactiveBtnLogin(btnLogin);
    }
  }

  function verifyPasswordCredential() {
    if (inputPasswordLogin.val().length >= 6) {
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