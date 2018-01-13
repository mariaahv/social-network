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

$(document).ready(function () {
  var user = null;
  var btnLoginGoogle = $('#btn-google');

  btnLoginGoogle.on('click', loginGoogle);

  // inicio de sesion con google
  function loginGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {
      var token = result.credential.accessToken;
      user = result.user;
      console.log(user);
      firebase.database().ref('users/' + user.uid).set({
        email: user.email,
        name: user.displayName,
        uid: user.uid,
        profilePicture: user.photoURL
      }).then(
        user => {
          window.location.href = 'profile.html';
        });
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  };
});