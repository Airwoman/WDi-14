// Serge Responds
// Serge answers 'Sure.' if you ask him a question.
// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).
// He says 'Fine. Be that way!' if you address him without actually saying anything.
//
// He answers 'Whatever.' to anything else.
//
// To call the function, we want to be able to do something like this - Serge.respondTo( "Some string here" )
//
// What do you need to do?
//
// Make your HTML and JS files
// Make sure you work with an object to get this working - remember to keep your functions small!
// Figure out the appropriate response

var Serge

Serge.respondTo("input")
Serge

Serge = {
  respondTo: function(userInput){
    if (Serge.isQuestion(userInput)) {
      console.log("Sure!");
    } else if (Serge.isLoud(userInput)) {
      console.log("Woah, chill out!");
    } else if (Serge.isSilent(userInput)) {
      console.log("Fine. Be that way!");
    } else {
      console.log("Whatever.");
    }
  },

  isQuestion: function (userInput) {
    if (userInput.trim().charAt(userInput.length-1) === "?") { // use "word".endsWith("d")
      return true;
    } else {
      return false;
    }
  },
  //
  // isQuestion: function (userInput) {
  //   return ((userInput.trim().charAt(userInput.length-1) === "?")=true); { // use "word".endsWith("d")
  // },



  isLoud: function (userInput) {
    if (userInput === userInput.toUpperCase()) {
      return true;
    } else {
      return false;
    }
  },

  isSilent: function (userInput) {
    if (userInput.trim() === "") {
      return true;
    } else {
      return false;
    }
  },

}

  Serge.respondTo("question?");
  Serge.respondTo("LOUD");
  Serge.respondTo("");
  Serge.respondTo("anything");










};
