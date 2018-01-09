
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAs5ON8zlwX10WmfuoAFHTqUUgx7Ogbya8",
    authDomain: "jumpbuss.firebaseapp.com",
    databaseURL: "https://jumpbuss.firebaseio.com",
    projectId: "jumpbuss",
    storageBucket: "",
    messagingSenderId: "1043596069554"
  };
  firebase.initializeApp(config);

function activeButton(button) {
  button.attr('disabled',false);
};


function desactiveButton(button) {
  button.attr('disabled','disabled');
};
