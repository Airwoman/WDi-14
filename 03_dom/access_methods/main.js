console.log(document);

var bill= document.getElementById("bill");
console.log(bill);

var randomPara = document.getElementById("randomParagraph");
console.log(randomPara);

var listItems = document.getElementsByTagName("li");
console.log(listItems);
// 
// for (var i = 0; i < listItems.length; i++) {
//   var listItem = listItems[i];
//   var newText = "List " + (i+1);
//   // var text = listItem.innerHTML;
//   // console.log(text);
//   listItem.innerHTML = newText;
// }

var greatMovies = document.getElementsByClassName("movie");
console.log(greatMovies);

for (var i = 0; i < greatMovies.length; i++) {
  var movieElemet = greatMovies[i];
  var currentText = movieElemet.innerHTML;
  var uppercaseText = currentText.toUpperCase();
  movieElemet.innerHTML = uppercaseText;
}
var food = document.querySelector("ol,li");
console.log(food.innerHTML);

var allfoods = document.querySelectorAll("ol li");
console.log(allfoods);
