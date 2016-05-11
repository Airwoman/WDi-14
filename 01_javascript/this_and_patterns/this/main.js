// "Global binding" || "default binding"
console.log(this);


var showThis = function () {
  console.log("This is this:", this );
};
showThis();


// "Implicit binding"
var person = {
  name: "Groucho",
  speak: function() {
    console.log(this);
    console.log("I am not " + this.name);
  }
};
person.speak();


var Serge = {
  respondsTo: function (question) {
    if (this.isSilent(question)) {
      console.log("speak up");
    }
  },
  isSilent: function (question) {
    return question.trim() === "";
  }
}

Serge.respondsTo("   ");


//"Explicit binding"

var sayHello = function () {
  console.log("Hello. " + this.name);
};

sayHello();


var person = {
  name: "Jane"
};

sayHello.call(person);
sayHello.apply(person);

var janeToSayHello = sayHello.bind(person);
janeToSayHello();





// "New binding"

var Person = function (name, age) {
  this.name = name;
  this.age = age;
  this.speak = function () {
    console.log("Hi");
  }
  return this;
}
var Billy = new Person("Billy", 10)
new Person("Billy", 10);
// new person("doug", 100)
