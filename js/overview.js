// $(document).ready(createSectionOverview);

// function createSectionOverview () {
//   // selecciona elementos del DOM
//   var sectionOverview = $('#overview .container .row');
//   createPost(sectionOverview);

//   function createPost(sectionOverview) {
//     var divConatinerPost = $('div');
//     var headerPost = $('p');
//     headerPost.addClass('class="py-2 px-3 font-weight-bold border-bottom"');
//     divConatinerPost.addClass('col-12 border-bottom px-0');

//   }
// }

$(document).ready(function() {
  var like = 0 , unlike = 0 , out = '';

  // function calificacion_publi() {
  if ( $('#calificacion').click(function() {
    like++;
    console.log('like');
    $("#calificacion").css("color", " red");})) {
  } else {
    like--;
    console.log('unlike');
   $("#calificacion").css("color", " black");
  }
// }



  // $('#calificacion').click(function(){
  //   like++;
  //   $("#calificacion").css("color", " red");
  // console.log(like);
  //
  // });
});
