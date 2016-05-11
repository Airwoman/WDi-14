var nick = document.querySelector(".nick");
nick.style.top = "0px";
nick.style.left = "0px";
var leftTimer = null;

var makeNickMove = function () {
  var currentLeft = parseFloat(nick.style.left);
  if (currentLeft > window.innerWidth-200) {

  }
  var newCurrentLeft = currentLeft + 10;
  nick.style.left = newCurrentLeft +"px";
}

leftTimer = window.setInterval(makeNickMove, 100);
