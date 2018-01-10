$(document).ready(createSectionOverview);

function createSectionOverview () {
  // selecciona elementos del DOM
  var sectionOverview = $('#overview .container .row');
  createPost(sectionOverview);
  
  function createPost(sectionOverview) {
    var divConatinerPost = $('div');
    var headerPost = $('p');
    headerPost.addClass('class="py-2 px-3 font-weight-bold border-bottom"');
    divConatinerPost.addClass('col-12 border-bottom px-0');

  }
}
