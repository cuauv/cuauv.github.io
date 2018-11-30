var buttonClicked = false;
console.log(buttonClicked);
console.log($("#hamburger-button"));

$("#hamburger-button").click(function() {
  console.log("clicked");
  if (!buttonClicked) {
    $("#ham-menu").slideDown();
    buttonClicked = true;
  } else {
    $("#ham-menu").slideUp();
    buttonClicked = false;
  }
});