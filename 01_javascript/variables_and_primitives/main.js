// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var N = 2;
var Z = "HHH";
var Y = "Sydney";
var X = "software engineer";

console.log("I will be a " + X + " in " + Y + ", and married to " + Z + " with " + N + " kids.");

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
var currentDate = new Date();
var currentYear = currentDate.getYear()+1900;
var TomDob = 1983;
console.log("They are either "+ (currentYear - TomDob) + " or " + (currentYear - TomDob - 1) +".");




// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


var myAge = 35;
var maxAge = 88;
var esAmountPerDay = 3;

console.log( "You will need "+ ((maxAge - myAge) * esAmountPerDay * 365) +" to last you until the ripe old age of " + maxAge +".");




// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var r = 23;

console.log("The radius is " + r + "\nThe circumference is " + 2*Math.PI*r +".");
console.log("The area is " + Math.PI*r*r +".");


// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var tempNum = 30;
console.log(tempNum + "°C is " + (tempNum * 9 / 5 + 32) + " °F.");
var fahrNum = 172;
console.log(fahrNum + "°F is " + Math.round(((fahrNum - 32) * 5 / 9)) + "°C.");




