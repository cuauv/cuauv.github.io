$(document).ready(function() {

  //toggle button clicked
  var buttonClicked = false;

  $("#hamburger-button").click(function() {
    if (!buttonClicked) {
      $("#ham-menu").slideDown();
      buttonClicked = true;
    } else {
      $("#ham-menu").slideUp();
      buttonClicked = false;
    }
  });

  //hide if screen too big
  $(window).resize(function() {
    var windowsize = $(window).width();
    if (windowsize > 999) {
      $("#ham-menu").hide();
    }
  });


});
