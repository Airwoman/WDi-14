// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

var recipe = {
  title: "Mole",
  servings: 2,
  ingredients: [
    "salt", "sugar", "chickenPodwer", "soySource"
  ]
};

console.log("Titile: " + recipe.title);
console.log("Servings: " + recipe.servings);
for (var i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}


// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'


var readList = [
  { title: "Idea all",
    author: "Jack",
    pages: 3332,
    alreadyRead: true
  },
  { title: "aaaaaaa all",
    author: "mike",
    pages: 132,
    alreadyRead: false
  },
  { title: "ppppall",
    author: "Tom",
    pages: 902,
    alreadyRead: true
  },
  { title: "kokoko",
    author: "Bob",
    pages: 220,
    alreadyRead: false
  },
  { title: "war and peace",
    author: "Nick",
    pages: 999,
    alreadyRead: false
  }
];

for (var i = 0; i < readList.length; i++) {
  if (readList[i].alreadyRead) {
    console.log("You already read "+ '"'+ readList[i].title + '"' + " by " + readList[i].author + ". It's have " + readList[i].pages + " pages. ");
  } else {
    console.log("You still need to read " + '"' + readList[i].title + '"' + " by " + readList[i].author + +".It's have " + readList[i].pages + " pages.");
  }
}






// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

var puff = {
  title: "Puff the Magic Dragon",
  duration: 30,
  stars: [
    "puff",
    "Jackie",
    "Living Sneezes"
  ]
};

var displayMovie = function (movie) {
  var movieMessage = movie.title;
  movieMessage += " lasts for " + movie.duration + " minutes." ;
  movieMessage += "Stars: ";
  movieMessage += movie.stars.join(", ") + ".";
  console.log(movieMessage);

}

displayMovie(puff);






var movieStore = [
  { title: "X man",
    duration: 90,
    stars: ["Mike", "Joe", "Lily"]
  },
  { title: "Superman",
    duration: 88,
    stars: ["Emily", "Jack", "Mon"]
  },
  { title: "Antman",
    duration: 97,
    stars: ["Willam", "How", "Wat"]
  },
  { title: "Batman",
    duration: 108,
    stars: ["Kate", "Harry", "Ruby"]
  },
  { title: "Catwoman",
    duration: 90,
    stars: ["Sherey", "Gg", "Qiqi"]
  }
];

for (var i = 0; i < movieStore.length; i++) {
  console.log(movieStore[i].title + " last for " + movieStore[i].duration + " minutes. Stars: " + movieStore[i].stars + ".");
}
