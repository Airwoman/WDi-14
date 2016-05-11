// Factory Pattern
var animalFactory = function () {
  var animal = {};
  animal.alive = true;
  animal.breathing = function () {
    console.log("In through the snout, out through the mouth.");
  }
  return animal;
}

var DogFactory = function (name, breed) {
  var dog = animalFactory();

  dog.name = name;
  dog.breed = breed;
  dog.bark = function () {
    console.log("woof");
  }
  return dog;
}

var tammy = DogFactory("Tammy", "Tamaskan");

var buddy = DogFactory("buddy", "labour");
console.log(tammy);




var personFactory = function (name, age) {
  var person = {};
  person.age = age;
  person.name = name;
  person.speak = function () {
    console.log("Hi !");
  }
  return person;
}

var alexander = personFactory("peter", 22);


// constractor

var goldfish = function (name, color, alive) {
  this.name = name;
  this.color = color;
  this.alive = alive;
  this.isCreepy = function () {
    console.log("Definityly");
  }
  return this;
};

var goldy = new goldfish("Goldy", "gold", false);


//OLOO- objects linked to other objects

var animal = {
  living: true,
  die: function () {
    console.log("I am now dead.");
  }
};

var Wolf = Object.create(animal);
Wolf.howl = function () {
  console.log("Extremely cute when pup");
};

//A Specific Wolf
var tamaskan = Object.create(Wolf);
tamaskan.breed = "Tamaskan";
