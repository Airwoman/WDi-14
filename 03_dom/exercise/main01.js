// Add a script tag to the bottom.
// (In JS) Change the body tag's style so it has a font-family of "Arial, sans-serif".
// (In JS) Replace each of the spans (nickname, favorites, hometown) with your own information.
// Iterate through each li and change the class to "listitem". Add a style tag that sets a rule for "listitem" to make the color red.
// Create a new img element and set its src attribute to a picture of you. Append that element to the page.

var stylenew = document.body;
stylenew.style.fontFamily = "Arial, sans-serif";



var names = document.getElementById("nickname");
names.innerHTML += "Harrison";
var favor = document.getElementById("favorites");
favor.innerHTML += "Fishing";
var favor = document.getElementById("hometown");
favor.innerHTML += "Beijing";


var allClass = document.querySelectorAll("ul li");
for (var i = 0; i < allClass.length; i++) {
  allClass[i].id = "listitem";
}

var newImg = document.createElement("img");
newImg.src = "https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/2014/02/Olympic-logo.png";
newImg.style.border ="10px dashed grey";
document.body.appendChild(newImg);







var books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  }
];
//
// Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

for (var i = 0; i < books.length; i++) {
  var book = books[i];
  var pTag = document.
}
// Bonus: Use a ul and li to display the books.
// Bonus: add a property to each book with the URL of the book cover, and add an img element for each book on the page.
// Bonus: Change the style of the book depending on whether you have read it or not.
