// Block Scope

function fruits() {
  if (true) {
    var fruitOne = "Apple";// function block
    let fruitTwo = "Banana";//block scope
    const fruitThree = "Kiwi";//block scope
    console.log(fruitTwo);
    console.log(fruitThree);
  }
  console.log(fruitOne);
}

fruits();// output: Banana, Kiwi, Apple