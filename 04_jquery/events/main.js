


$(document).ready(function () {
});


$(document).on("click", ".pixel", function () {

});
// $("h1").on("click", function () {
//   console.log("The h1 was clicked!");
// });

//
// var $newHeading = $("<h3></h3>");

// $$("<h3></h3>").text("Hello World").css("font-size","50px").appendTo("body");
// $("body").append($newHeading);



var animateBox = function () {

  $(".animate").animate({
    width: "500px",
    top: "50px"
  },1000).animate({
    width: "200px",
    top: "0px"
  },1000,animateBox);



  //set the width of this box to be 500px
  // $(".animate").animate({
  //   width: "500px",
  //   top: "50px"
  // }, 1000, function () {
  //   $(".animate").animate({
  //     width: "200px",
  //     top: "0px"
  //   },5000);
  //   // console.log("Animation complete");
  //
  // });
}


$(".pixel").on("mouseover", function () {
  var $currentPixel = $(this);
  $currentPixel.css("background","hotpink");


});

$(window).on("keypress", function(e){
  // var currentLetter = e.key;
  var currentLetter = String.fromCharCode(e.keyCode);
  // Find and store the h2 with the class of typing
  var $h2 = $("h2.typing");
  // store its current HTML
  var currrentHTML = $h2.html();
  var newHTML = currrentHTML + currentLetter;
  // I the want to add whatever the currentLetter is
  // $h2.text(newHTML);
});








$(window).on("mousemove", function (event) {
  var $div = $("<div></div>");
  $div.addClass("dot");
  //change the top and left position so that they represent where the mouse is
  var mouseX = event.clientX;
  var mouseY = event.clientY;

  $div.css("top", mouseX);
  $div.css("left", mouseY);
  // $div.css({
  //   "top": mouseX,
  //   "left": mouseY
  // });
  // $("body").append($div);
});







// $("h1").on("click", function () {
//   console.log("The h1 was clicked!");
// });
// $(window).on("mousemove", function (event) {
//   // create a new paragraph
//   var $p = $("<p></p>");
//   var mouseX = event.clientX;
//   var mouseY = event.clientY;
//   // create
//   var message = "Mouse X:" + mouseX;
//   message += ". Mouse Y:" + mouseY;
//
//   $p.text(message);
//   $("body").prepend($p);
//
// });
