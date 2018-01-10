$(document).ready(function () {

  //obtener elementos 
  var $name_business = $('#name_business');
  var $Descripcion_business = $('#Descripcion_business');
  var $Direccion_business = $('#Direccion_business');
  var $email = $('#email');
  var $password = $('#password');
  var $password_confirmation = $('#password_confirmation');
  var $btn_bussiness = $('#btn_bussiness');


  var $EmaiLUser = $('#Email-user');
  var $password_user = $('#password_user');
  var $btn_user = $('#btn_user');
  var $nameuser = $('#name_user');
  var $last_name = $('#last_name');

  var name_business = false;
  var Descripcion_business = false;
  var Direccion_business = false;
  var email = false;
  var password = false;
  var btn_bussiness = false;


  var EmaiLUser = false;
  var password_user = false;
  var btn_user = false;
  var nameuser = false;
  var last_name = false;

  var regexName = /^[a-zA-Z]*$/;
  var regexEmail = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);


  $name_business.on('input', verificar_name);
  $Descripcion_business.on('input', verificar_descripcion);
  $Direccion_business.on('input', verificar_direccion);
  $email.on('input', verificar_email);
  $password.on('input', verificar_password);
  $btn_bussiness.on('click', openLogin);

  $EmaiLUser.on('input', verificar_email_user);
  $password_user.on('input', verifyPassword);
  $nameuser.on('input', verificar_name_user);
  $last_name.on('input', verificar_lastname);
  $btn_user.on('click', openLoginUser);

  function openLogin(event) {
    event.preventDefault();
    localStorage.email = $email.val();
    localStorage.password = $password.val();
    window.location.href = 'login.html';
  }

  function openLoginUser(event) {
    event.preventDefault();
    localStorage.email = $EmaiLUser.val();
    localStorage.password = $password_user.val();
    window.location.href = 'login.html';
  }

  function verificar_name() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('firstname valid');
      name_business = true;
      allInputsValid($btn_bussiness);
    } else {
      name_business = false;
      desactiveButton($btn_bussiness);
    }
  }

  function verificar_name_user() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('validado nombre');
      name_user = true;
      inputsValid($btn_user);
    } else {
      name_user = false;
      desactiveButton($btn_user);
    }
  }

  function verificar_descripcion() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('Descripcion valid');
      Descripcion_business = true;
      allInputsValid($btn_bussiness);
    } else {
      Descripcion_business = false;
      desactiveButton($btn_bussiness);
    }
  }

  function verificar_lastname() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('last name validado');
      last_name = true;
      inputsValid($btn_user);
    } else {
      last_name = false;
      desactiveButton($btn_user);
    }
  }

  function verificar_direccion() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('Ddireccion valid');
      Direccion_business = true;
      allInputsValid($btn_bussiness);
    } else {
      Direccion_business = false;
      desactiveButton($btn_bussiness);
    }
  }

  function verificar_email() {
    if (regexEmail.test($($email).val())) {
      console.log('funciona email');
      email = true;
      allInputsValid($btn_bussiness);

    } else {
      email = false;
      desactiveButton($btn_bussiness);
    }
  };

  function verificar_email_user() {
    if (regexEmail.test($($EmaiLUser).val())) {
      console.log('funciona email');
      EmaiLUser = true;
      inputsValid($btn_user);

    } else {
      EmaiLUser = false;
      desactiveButton($btn_user);
    }
  };

  function verificar_password() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('funciona password');
      password = true;
      allInputsValid($btn_bussiness);

    } else {
      password = false;
      desactiveButton($btn_bussiness);
    }
  };

  function verifyPassword() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('funciona password');
      password_user = true;
      inputsValid($btn_user);
    } else {
      password_user = false;
      desactiveButton($btn_user);
    }
  };

  function allInputsValid() {
    if (password && email && Direccion_business && Descripcion_business && name_business) {
      activeButton($btn_bussiness);
    }
  };

  function inputsValid() {
    if (password_user && EmaiLUser && last_name && name_user) {
      activeButton(btn_user);
    }
  }

});