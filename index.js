function homer() {
  console.log(maggie);
}

function bart() {
  var maggie = 2;
  homer();
}

var maggie = 1;
bart();

// Line 11 says run bart.
// The bart function is on line 5 and runs.
// The bart function creates a variable local to it called maggie and asigns maggie a value of 2.
// The bart function then runs the homer function which is on line 1.
// The homer function logs to the console maggie. which is a value of 1.
// homer console log's 1 because the variable maggie with teh value of 1 is set in the global context.
// The variable of 1 for maggie set in bart is local to bart so homer doesnt know about that even though homer was called in to action by bart.
