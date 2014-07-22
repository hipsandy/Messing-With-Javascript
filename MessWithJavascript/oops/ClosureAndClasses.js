/**
 * Example of closure. An inner function [of any given-function] that closes over [i.e has access
 * to] other variables declared inside the given-function is called a Closure. Every time we write
 * inner functions, we are creating closures. Very useful in the concept of data-hiding and
 * enforcing privacy constraints on properties/variables
 */

var counter = function() {
	var count = 0; // private variable accessible only to code within the function

	return function() { // The inner function closes over the count variable - closures !
		return count++;
	};
}(); // () operator executes the function and sets 'count' with the result of execution

console.log(counter()); // prints 0
console.log(counter()); // prints 1

// The count variable is only visible within the function where it is declared and is visible to the
// inner functions even after the function/method in which it is declared completes executing.
// The use of the () operator soon after the function definition makes it like a singleton-class
// that gets instantiated immediately after it's definition.

/**
 * Here's an example of how to create/instantiate counter objects using a factory method
 */

function createCounter() {
	var n = 0;

	// returns an object containing count and reset method that closes over variable 'n'.
	// There is no block-scope in Javascript.
	return {
		count : function() {
			return n++;
		},
		reset : function() {
			n = 0;
		}
	};
}

var c1 = createCounter();
var c2 = createCounter();
console.log(c1.count()); // 0
console.log(c2.count()); // 0
console.log(c2.count()); // 1
console.log(c1.reset()); // resets the counter1
console.log(c2.reset()); // resets the counter 2
console.log(c1.count()); // 0
console.log(c2.count()); // 0

