// Exercises: Arrays
// Your top choices
//
// Create an array to hold your top five choices of something (colors, presidents, whatever). If you choose movies, the right top choice is "Satantango".
//
// For each choice, log to the screen a string like: "My #1 choice is blue."
// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.


var MyChoice = function(){
  var choice = ["BLUE", "Basketball", "Fising", "Sleeping", "Eating"];
  var numFlow = ["st", "nd", "rd", "th"];
  for (var i = 0; i < choice.length; i+=1) {
    if (i < 3 ) {
      console.log("My " + (i + 1) + numFlow[i]  + " choice is " + choice[i]);
    } else {
      console.log("My " + (i + 1) + numFlow[3] + " choice is " + choice[i]);
  i  }
  }
  return true;
}

MyChoice();
