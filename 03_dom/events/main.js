var myButton = document.querySelector("#myTestButton");


// someElement.addEventListener(typeOfEvent, whattodo);
myButton.addEventListener("click", function () {
  console.log("The button was clicked!");
});

var myHeading = document.querySelector("h1");
var myCallback = function () {
  console.log("thsssss");
}

myHeading.addEventListener("click", myCallback);
// myHeading.removeEventListener("click", myCallback);


var bill = document.querySelector(".bill");

var billsCallback = function (event) {
  var newParagraph = document.createElement("p");
  var paragraphText = document.createTextNode("missed call" + event.timeStamp);
  newParagraph.appendChild(paragraphText);
  document.body.appendChild(newParagraph);
}



//
//
//
// var bill = document.querySelector(".bill");
// var billsCallback = function () {
//   console.log("dddd");
// }

bill.addEventListener("click", billsCallback);




var thisShouldHappenRegularly = function () {
  console.log("This just happened. But that this is the wrong this");
};

// window.setInterval(whattoto,delay);

// window.setInterval(thisShouldHappenRegularly, 100);

// window.setInterval( function () {
//
// }, 100);


var thisShouldBeDelayed = function () {
  console.log("This should happen a little while after the page is loaded.");
};

window.setTimeout(thisShouldBeDelayed,1000);
