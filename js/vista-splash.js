$(document).ready(viewSplash);

function viewSplash() {
  setTimeout(function() {
    window.location.href = 'views/start-page.html';
  }, 5000);

  $(function() {
    setTimeout(function() {
      $('.fly-in-text').removeClass('hidden');
    }, 500);
  })();
}
