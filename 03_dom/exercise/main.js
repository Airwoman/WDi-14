var searchLink = document.querySelector(".searchEngine")
console.log(searchLink);

searchLink.href = "http://www.yahoo.com";
searchLink.className = "bestSearchEngine";
searchLink.innerHTML = "Search with Yahoo";
searchLink.style.fontSize = "100px";


var emptyPage = function () {
  var bodyTag = document.querySelector("body");
  console.log(bodyTag.innerHTML);
  bodyTag.innerHTML = "<h1>Goodbye, cruel world</h1>";
  bodyTag.innerHTML += "<p>No soup for you.</p>";
}

var bodyElement = document.querySelector("body");
bodyElement.style.background = "red";
bodyElement.style.fontFamily = "monispace";
bodyElement.style.textAlign = "center";
bodyElement.style.paddingTop = "100px";
console.log(bodyElement.style);


var bridge = function () {
  //create the element
  var newHeading = document.createElement("h2");
  //create the text to go in the element
  var textForHeading = document.createTextNode("mkmkmk");
  //we style the element(if necessary)
  newHeading.style.fontFamily ="Comic Sans";
  newHeading.style.color = "rebeccapurple";
  //we put the text in the element
  newHeading.appendChild( textForHeading );
  //then put the element on the page

  document.body.appendChild(newHeading);
};


var bringBackTheBill = function () {
  var bill = document.createElement("img");
  var randomSize = (Math.random() + 1)*400;
  var imgURL = "http://www.fillmurry.com/";
  imgURL += randomSize;
  imgURL += "/";
  imgURL += randomSize;

  bill.src = imgURL;
  bill.style.border ="10px dashed grey";
  document.body.appendChild(bill);
}

var changebutton = function () {
  var olbButton = document.querySelector("center,input ");
  olbButton.value = "yahoo";
}
