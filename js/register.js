
  $(document).ready(function() {

  // btnlogin.addEventListener('click' , e => {
  //   var email=EmaiLUser.value;
  //   var pass=password.value;
  //   var auth=firebase.auth();
  //  });


//   $("#btnlogin").on('click', event => {
//     var email=EmaiLUser.value;
//     var pass=password.value;
//     var auth=firebase.auth();
//     var promise=auth.signWithEmailAndPassword(email,pass);
// });

//obtener elementos
var $name_business=$('#name_business');
var $Descripcion_business=$('#Descripcion_business');
var $Direccion_business=$('#Direccion_business');
var $email=$('#email');
var $password=$('#password');
var $password_confirmation=$('#password_confirmation');
var $btn_bussiness=$('#btn_bussiness');


var $EmaiLUser=$('#Email-user');
var $password_user=$('#password_user');
var $btn_user=$('#btn_user');
var $nameuser=$('#name_user');
var $last_name=$('#last_name');
var $password_confirmation_user=$('#password_confirmation_user');


var name_business=false;
var Descripcion_business=false;
var Direccion_business=false;
var email=false;
var password=false;
var password_confirmation=false;
var btn_bussiness=false;


var EmaiLUser=false;
var password_user=false;
var btn_user=false;
var nameuser=false;
var last_name=false;
var password_confirmation_user=false;


$name_business.on('input',verificar_name);
$Descripcion_business.on('input',verificar_descripcion);
$Direccion_business.on('input',verificar_direccion);
$email.on('input',verificar_email);
$password.on('input',verificar_password);
// $password_confirmation.on('input',confirm_password);
$btn_bussiness.click(event => {
  event.preventDefault();
  var auth = firebase.auth();
    // Sign in
    var promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(event => console.log(event.message));
  window.location.href = 'login.html';
});


// $EmaiLUser.on('input','verificar_email');
// $password_user.on('input','verificar_password');
// $btn_user.on('input','register_user');
// $nameuser.on('input','verificar_name');
// $last_name.on('input','verificar_lastname');
// $password_confirmation_user.on('input','confirm_password');

function verificar_name() {
  if ($(this).val().length >= 3 && regexName.test($(this).val())) {
      console.log('firstname valid');
      name_business=true;
      allInputsValid($btn_bussiness);
    } else {
      name_business = false;
      desactiveButton($btn_bussiness);
    }
  }

  function verificar_descripcion() {
    if ($(this).val().length >= 3 && regexName.test($(this).val())) {
        console.log('Descripcion valid');
        Descripcion_business=true;
        allInputsValid($btn_bussiness);
      } else {
        Descripcion_business=false;
        desactiveButton($btn_bussiness);
      }
    }



    function verificar_direccion() {
      if ($(this).val().length >= 3 && regexName.test($(this).val())) {
          console.log('Ddireccion valid');
          Direccion_business=true;
          allInputsValid($btn_bussiness);
        } else {
          Direccion_business=false;
          desactiveButton($btn_bussiness);
        }
      }


function inicio(){
$('#btn_user').click(validar);
}

function validar (){
  var nameuser=document.getElementById('name_user').value;
  if(nameuser==null|| nameuser.length==0){
    alert('ingresa un caracter');
    return false;
  }
};

var regexName = /^[a-zA-Z]*$/;
var regexEmail = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);



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

function allInputsValid(){
  if(password && email && Direccion_business && Descripcion_business && name_business){
    activeButton($btn_bussiness);
  }
};


  // function validForm() {
  //   if (validFirstName() && validEmail()) {
  //     $btn_bussiness.removeClass('disabled');
  //
  //   }
  //   else {
  //     $btn_bussiness.addClass('disabled');
  //
  //   }
  // };



});
