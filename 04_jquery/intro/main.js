var $aTag = $("a");

//new paragraph
var $p = $("<p></p>");
//put some text in it
$p.text("here is some random stuff");
//i want to change some sytles
$p.css({
  "color": "gainsboro",
  "text-decoration": "underline",
  "text-transform": "uppercase",
});
$("body").append($p);
$("body").prepend($p);
//color:gainsboro
//text-decoration:underline
//text-transform:uppercase
//i want to actually put it on the pag

var $allParagraphs = $("p")
for (var i = 0; i < $allParagraphs.length; i++) {
  var currentParagraph = $allParagraphs[i];
  var $currentParagraph = $( currentParagraph );
  $currentParagraph.html("paragraph " + i);
  debugger;
}


for (var i = 0; i < $allParagraphs.length; i++) {
  var $currentParagraph = $allParagraphs.eq(i);
  var currentHTML = $currentParagraph.html();
  $currentParagraph.html(currentHTML += "wooooooo.");
}





$allParagraphs.each(function(i)){
  $(this).html ("this is awesome now "+1);
  console.log(index, paragraph);
}
