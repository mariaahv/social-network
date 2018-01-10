$(document).ready(createSectionProfile);

function createSectionProfile() {
  // funcionalidad para que usuario pueda publicar contenido 
  var sectionUserPost = $('#user-post');
  console.log(sectionUserPost);
  var btnPost = $('#post');
  
  textArea.on('input', verifyTextInput);
  btnPost.on('click', getTextInput);

  function verifyTextInput() {
    var textPost = $('#post-text').val();  
    if (checkText(textPost)) { 
      activeButton(btnPost);
    } else {
      desactiveButton(btnPost);
    }
  }

  function getTextInput(event) {
    event.preventDefault(); 
    console.log('evita evento por defecto');
    addPostInHtml(createElementsHtml($('#post-text').val()));
    $('#post-text').val('');
  }

  function createElementsHtml(text) {
    var divContainerPost = $('<div></div>');
    divContainerPost.addClass('col-12 border-bottom px-0');
    divContainerPost.html('<p id="header" class="py-2 px-3 font-weight-bold border-bottom">Azúcar</p><div class="body border-bottom"><p class="px-3">' + text + '</p></div><p id="footer" class="ml-2 mb-0 py-2 font-weight-bold"><i class="icon-heart-o"></i><a href="comment.html" role="button" class="ml-2"><i class="icon-comment-o"></i></a></p>');
    return divContainerPost;
  }

  function addPostInHtml(element) {
    element.appendTo(sectionUserPost);
  }
}