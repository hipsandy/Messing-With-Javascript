/*
NOTES on Function, scope and "this":
* There is nothing like block-scope in Javascript. There is only a function-scope.
* All variables defined in function are visible throughout the function and are hoisted.
It is good practice to define all the variables at the top of the function.
* The value of "this" changes according to the way the function is used [i.e. whether
it is used as regular function, method or constructor]
* When used as regular function, this points to the Global object [Window in case of
the web-browser]
* When used as an object-method, this refers to the object containing the method.
* When used as a Constructor, this refers to the object that is being returned
from the constructor
*/

// Cat is a Constructor function for creating new cats
function Cat(name){
  this.name = name;
  console.log(this); // 'this' refers to the Cat object that is being created
}

Cat.prototype.talk = function(){
  console.log(this.name + " says Meooow");
};


// newCat is a factory function for creating new cats.
function newCat(name) {
  console.log(this); // this refers to the global-object i.e. Window
  return {
    name: name,
    talk: function() {
	    	console.log(this); // this refers to the object containing the "talk" method
	    	console.log(this.name + " says Meoow");
    	  },
   };
}

// Instantiate objects using the above two approaches:
var c1 = new Cat("tiger");
c1.talk();

var c2 = newCat("tom");
c2.talk();