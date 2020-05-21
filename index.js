//JavaScript Concepts

// JavaScript Scope Chain & Execution Context with Homer, Bart and Maggie.

function homer() {
  console.log(maggie);
}

function bart() {
  var maggie = 2;
  homer();
}

var maggie = 1;
bart();

// Explanation

// Line 15 says run bart.
// The bart function is on line 9 and runs.
// The bart function creates a variable local to it called maggie and asigns maggie a value of 2.
// The bart function then runs the homer function which is on line 5.
// The homer function logs to the console maggie. which is a value of 1.
// Why 1 and not 2 or undefined?
// homer console log's 1 because the variable maggie with the value of 1 is set in the global scope.
// maggie with the value of 2 only exists in the bart function context.  It doesnt exist outside of that.
// So when the bart function runs the homer function the homer function does not know about maggie with the value of 2.
// When homer looks for maggie (line 6) Therses no maggie locally (in the homer function).
// What JavaScript does is it then goes off to look for maggie exlsewhere in the execution stack.
// It then finds maggie on line 14 as maggie on line 14 does not exist locally maggie is in the global scope.

// Imediately Invoked Function Expressions (IIFEs)

// function statement
function greet(name) {
  console.log('Hello ' + name);
}
greet('Sideshow Bob');

// function expression
var greetFunc = function(name) {
  console.log('Hello ' + name);
};
greetFunc('Sideshow Mel');

// IIFE
var greeting = (function(name) {
  console.log('Hello ' + name);
})();
console.log(greeting);
