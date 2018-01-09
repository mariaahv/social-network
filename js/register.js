
  $(document).ready(function() {
    // Initialize Firebase
    var config = {
    apiKey: "AIzaSyBdEycW3LtWgNkErWEelXpijIlXQlkkHXQ",
    authDomain: "social-net-e5cc4.firebaseapp.com",
    databaseURL: "https://social-net-e5cc4.firebaseio.com",
    projectId: "social-net-e5cc4",
    storageBucket: "social-net-e5cc4.appspot.com",
    messagingSenderId: "959956941410"
  };
  firebase.initializeApp(config);


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
var $Descripcion_businessr=$('#Descripcion_business');
var $Direccion_business=$('#Direccion_business');
var $email=$('#email');
var $password=$('#password');
var $password_confirmation=$('#password_confirmation');
var $btn_bussiness=document.getElementById('#btn_bussiness');


var $EmaiLUser=$('#Email-user');
var $password_user=$('#password_user');
var $btn_user=$('#btn_user');
var $nameuser=$('#name_user');
var $last_name=$('#last_name');
var $password_confirmation_user=$('#password_confirmation_user');


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

function validFirstName() {
    var nameuser = false;
    var regex = /^[a-zA-Z]*$/;
    if (regex.test($($nameuser).val()) && $nameuser.val().length >= 0) {
      nameuser = true;
    }
    return nameuser;
  }


function validEmail(event) {
    var EmaiLUser = false;
    var regex = (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/);
    if (regex.test($($EmaiLUser).val())) {
      EmaiLUser = true;
    }
    return EmaiLUser;
  };



  function validForm() {
    if (validFirstName() && validEmail()) {
      $btn_bussiness.removeClass('disabled');

    }
    else {
      $btn_bussiness.addClass('disabled');

    }
  };



});
