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

console.log(hoistedLisa);

// Scenario A behaves in the way most other languages behave.
// The variable  'lisa' which  is set to a value of 'Lisa Simpson' on line 73.
// The marge function is created on line 75.
// On line 79 the marge function is called and returns 'Marge Simpson'
// On line 80 the lisa variable is logged out displaying 'Lisa Simpson' on the log.
// Scenario B behaves in a way most other languages do not because of "Hoisting".
// On line 84 hoistedMarge is called BEFORE the hoistedMarge function is created.
// However hoistedMarge still returns 'Hoisted Marge Simpson' from line 90 because it's been 'Hoisted'.
// JavaScript 'hoists' functions. But it does not hoist variable values.
// On line 85 the console.log for lisa returns undefined because JavaScript does not 'hoist' variable values.
// It's worth noting that JavaScript still acknowledges hoistedLisa as a variable.
// It just hasn't assined a value to the hoistedLisa variable yet.
// Which is why you get a value (undefined) instead of an error.
// This all happens because of JavaScripts execution context.
// When JavaScript initially runs a file, it has a 'creation phase'.
// This is when it goes through all the code and puts the variables and functions into its memory.
// So JavaScript knows the variables and functions are there before it tries to run the JavaScript function.
// This is when the 'hoisting' process happens.
// This is why in scenario B it knows about hoistedMarge.
// Because before running the file it's already been through the code and stored hoistedMarge in memory.
// hoistedLisa is undefined in Sscenario B because variable values aren't stored in the 'creation phase'.
// JavaScript knows there's a hoistedLisa variable during the creation phase.
// But it does not know the value of hoistedLisa until the next phase.
// The next phase is the execution phase.  This is when the code is executed.
// At line 85 the hoistedLisa variable has not been assined a value yet.
// But JavaScript does know hoistedLisa exists because it saw it in the creation phase.
// This is why JavaScript returns undefined instead of an error.
// On line 93 the console.log of hoisted lisa does return 'Lisa Simpson'.
// Because by this point in the execution phase a value has been set for the variable hoistedLisa.

// 4) JavaScript Prototypes and Inheretance with the Springfiled Mafia

var mafiaMember = {
  firstname: 'X',
  lastname: 'X',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
};

var boss = {
  firstname: 'Tony',
  lastname: "D'Amico"
};

boss.__proto__ = mafiaMember;
console.log(boss.firstname);
console.log(boss.getFullName());

var johnnyTightlips = {
  firstname: 'Johnny'
};

johnnyTightlips.__proto__ = mafiaMember;
console.log(johnnyTightlips.getFullName());

//  On line 127 the variable mafiaMember is set.
//  Inside that object it creates firstname and lastname both with the value of X.
//  it also sets getFullName as a function that returns firstname and lastname.
//  Nothing has happened at this point its all just in memory.
//  Next up on line 135 the variable boss is set with the firstname and last name values set.
//  So you now have two variables set in memory.
//  On line 140 we set __proto__ on the boss variable to equal mafiaMember.
//  That means the mafiaMember object is now a prototype of boss.
//  This is prototype inheritance comes in to play.  This is demonstrated on lines 141 and 142
//  On line 141 it returns Tony.  That's because firstname exists in boss and has been set to Tony.
//  On line 142 'Tony D'Amico' is logged out to the console.
//  Thats because boss.getFullName() means the boss variable is calling the getFullName method and running it.
//  Whats interesting here is that getFullName doesn't exist in the boss object.
//  However because on line 140 we made mafiaMember a prototype of boss the JavaScript engine can see mafiaMember.
//  This is boss inheriting the properties of mafiaMember because it's been set as a prototype.
//  Kind of similar to how the scope chain works (I think).
//  On line 144 we create johnnyTightlips with the value for firstname: set to "Johny"
//  On line 148 we again use __proto__.  This time to set mafiaMember as a prototype for johnnyTightlips.
//  This means mafiaMember now inherits from johnnyTightlips and boss.
//  On line 149 johnnyTightlips calls getFullName.
//  getFullName does not exist in the johnnyTightlips object.
//  But as we now know because of line 148 the JavaScript engine will look elsewhere including mafiaMember.
//  In mafiaMember getFullName does exist.  So line 149 returns Johny X.
//  This is slightly different from the boss example.
//  In the boss example, it returned the firstname and lastname given in boss.
//  In the johnyTightlips example, no lastname was set within the johnyTightlips object.
//  However the inherited object mafiaMember does have a lastname object with a value.
//  That value is is X, so it uses that which is why line 149 returns Johnny X.
