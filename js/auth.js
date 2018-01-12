// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBrhjROB4ijHkF2OE9Ke9ZbZSW1PRGLGkI',
  authDomain: 'jumpbuss-d6dfe.firebaseapp.com',
  databaseURL: 'https://jumpbuss-d6dfe.firebaseio.com',
  projectId: 'jumpbuss-d6dfe',
  storageBucket: 'jumpbuss-d6dfe.appspot.com',
  messagingSenderId: '64604098524'
};

firebase.initializeApp(config);
$(document).ready(function() {
  console.log('cargue');
  var user = null;
  var btnLoginGoogle = $('#btn-google');
  btnLoginGoogle.on('click', function(event) { 
    event.preventDefault();
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    window.location.href = 'overview.html';
  });
});