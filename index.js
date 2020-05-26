//JavaScript Concepts

// 1) JavaScript Scope Chain & Execution Context with Homer, Bart and Maggie.

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
// The bart function creates a variable local to it called maggie and assigns maggie a value of 2.
// The bart function then runs the homer function, which is on line 5.
// The homer function logs to the console maggie. Which is a value of 1.
// Why 1 and not 2 or undefined?
// homer console log's 1 because the variable maggie with the value of 1 is set in the global scope.
// maggie with the value of 2 only exists in the bart function context.  It doesn't exist outside of that.
// So when the bart function runs the homer function the homer function does not know about maggie with the value of 2.
// When homer looks for maggie (line 6) There's no maggie locally (in the homer function).
// What JavaScript does is it then goes off to look for maggie elsewhere in the execution stack.
// It then finds maggie on line 14 as maggie on line 14 does not exist locally maggie is in the global scope.

// 2) Immediately Invoked Function Expressions (IIFEs) with Krusty The Clown, Sideshow Bob and Sideshow Mel

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

//IIFE

var firstname = 'Krusty';

(function(name) {
  var familyname = 'The Clown';
  console.log(name + ' ' + familyname);
})(firstname);

// Explanation

// The firstname variable of Krusty is set in line 48.
// An unnamed function is created on line 50, taking in a name as an argument.
// The unnamed functions first action is to set the value of familyname to The Clown.
// Next up the unnamed function logs out the name it took in and the familyname it set.
// The significant part of IIFE is next at the end of the unnamed function on line 53.
// Here the unnamed function is immediately invoked using ().
// When the function is immediately invoked using () firstname which was set on line 48 is also passed in.
// That needs to be done because the unnamed function is expecting an argument.
// You could have the function not expect an argument and invoke without passing anything in.
// Summary - when this block of code is run the function is seen and then immediately run.
// If you do this familyname is not publicly available which may be a security benefit.

// 3) JavaScript Hoisting with Marge and Lisa

//  Scenario A

var lisa = 'Lisa Simpson';

function marge() {
  console.log('Marge Simpson');
}

marge();
console.log(lisa);

// Scenario B

hoistedMarge();
console.log(hoistedLisa);

var hoistedLisa = 'Hoisted Lisa Simpson';

function hoistedMarge() {
  console.log('Hoisted Marge Simpson');
}

// Scenario A behaves in the way most other languages behave.
// Lisa Simpson is created on line 73.
// The marge function is created on line 75.
// On line 79 the marge function is called and returns Marge Simpson
// On line 80 the lisa variable is logged out displaying Lisa Simpson on the log.
// Scenario B behaves in a way most other languages do not because of Hoisting.
// On line 84 hoistedMarge is called BEFORE the hoistedMarge function is created.
// hoistedMarge still returns 'Hoisted Marge Simpson' because it's been 'Hoisted' by JavaScript
// JavaScript 'hoists' functions.
// On line 85 the console.log for lisa returns undefined because JavaScript does not 'hoist' variables.
// It's worth noting that JavaScript still acknowledges hoistedLisa
// which is why you get a value (undefined) instead of an error
// This all happens because of JavaScripts execution context.
// When JavaScript initially runs a file, it has a 'creation phase'.
// This is when it goes through all the code and puts the variables and functions into its memory.
// So it knows the variables and functions are there before it tries to run the JavaScript function.
// This is the 'hoisting' process.
// This is why in scenario B it knows about Hoisted Marge.
// Because before running the file it's already been through the code and stored Hoisted Marge
// Lisa is undefined because variable values aren't stored in the 'creation phase'.
// JavaScript knows there's a hoistedLisa variable during the creation phase, but it does not know the value of hoistedLisa until the next phase.
// The second phase is the execution phase.  This is when the code is executed.
// At line 85 the variable has not been defined yet which is why it returns undefined.
