// variables

var a; //declared
var b = "b"; //declared and assigend 
b = "bb"; //reassignment
var a = "aa"; // redeclaration

// Global Scope
var fruit = "Banana"; //global

function bestFruit() {
  console.log(fruit); // local environment
}

bestFruit();