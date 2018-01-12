// funcionalidad para activar ydesactivar los botones de distintas vistas
function activeButton(button) {
  button.attr('disabled', false);
};

function desactiveButton(button) {
  button.attr('disabled', 'disabled');
};

// funcionalidad para que el textarea se adapte al texto
var textArea = $('.textarea');
textArea.on('keydown', function(event) {
  // verifica las filas del textarea para adaptarlo al texto o añadir filas si presiona '\n (enter)'
  var text = event.target.value.split('');
  var acum = 0;
  for (var i = 0; i < text.length; i++) {
    if (text[i] === '\n') {
      acum++;
    }
    if (acum) {
      event.target.rows = acum + 2;
    }
  }

  setTimeout(function() {
    textArea.css.cssText = 'height:' + textArea.scrollHeight + 'px';
  }, 0);
});

function checkText(array) {
  for (var index = 0; index < array.length; index++) {
    if (array[index] !== ' ' && array.charCodeAt(index) !== 10) {
      return true;
    }
  }
}