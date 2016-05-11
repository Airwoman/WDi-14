var nick = document.querySelector(".nick");
var widthTimer = null;

nick.setAttribute("width", "200");

var makeImageBigger = function () {
  //get the current width
  var currentWidth = nick.width;
  if (currentWidth > 500) {
    window.clearInterval(widthTimer);
  }

  console.log(widthTimer);
  //
  // if (currentWidth >500) {
  //   return;
  // }

  //add ten to it
  var newWidth = currentWidth + 10;

  //then change the width to be the new value
  nick.width = newWidth;
};
widthTimer = window.setInterval( makeImageBigger, 100);







var nick = document.querySelector(".nick");
var opacityTimer = null;
nick.style.opacity = 1;

var makeNickInvisible = function () {
  //get current value
  var currentValue  = parseFloat(nick.style.opacity);
  if (currentValue <= 0) {
    window.clearInterval(opacityTimer);
    return;
  }

  var newValue = currentValue - 0.05;
  nick.style.opacity = newValue;
}
// window.setTimeout(makeNickInvisible,500);

opacityTimer = window.setInterval(makeNickInvisible,200);
