// I need to have a starting point
// I need to have a conditon
// i need an step (some way to make the condition evaluate to flase to the end of the loop)


// var count = 10;//strating poing
// while (count > 0) { //condition
//   console.log(count);
//   count -= 1; // count = count -1;  count --;
// }
//
// console.log("lift off!");
//
// // for(start; end; step ){}
// for (var count = 10; count > 0; count-=1){
//   console.log(count);
// }
// console.log("lift off!");


// I want to have some way to saying my 9 times tables
// I want to do that using a function called multiplyNumbers
// 1 though to 12

// var multiplyNumbers = function(number, factor){
//   var result = number * factor;
//   var message = number+ " multipled by " + factor + " is " + result;
//   console.log(message);
//   return result;
// }
// for (var i = 1; i <= 12; i++) {
//   multiplyNumbers(9, i)
// }

// for (var i = 0; i <= 212; i+=1){
//   console.log(i);
//   if(i === 7){
//     break; //pause on a bad movie
//   }
// }

// for (var j = 1; j <= 12; j += 1){
//   console.log("j is now" + j);
//   for (var i = 1; i <= 12; i ++ ) {
//     multiplyNumbers(j, i)
//   }
// }


var printOutLetter = function ( name ) {
  for (var i = 0; i < name.length; i += 1) {
    var currentLetter = name.charAt(i);
    console.log("Letter " + i + " is " + currentLetter);
  }
};

printOutLetter("Chico");
