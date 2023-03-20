
var firstName; // undefined
firstName = "Oscar";

var lastName = "Wilfredo"; //declarar / asignar
lastName = "Aguirre"; // reasiganar

// se puede redeclara con la palabra reservada solo se puede con var
var secondName = "Willy";  // declare / assign
var secondName = "Wilfredo"; // declare / assign

// Let

let fruit = "apple";
fruit = "kiwi";
// let fruit = "apple";// no se puede redeclarar

//Const
const animal = "eagle";
animal = "dog"; // no puede reasignar con const
// const animal = "cat"; //tampoco puede ser readeclarada

//se puede mutar objetos
const vehicles = [];
vehicles.push("toyota"); //["toyota"]
vehicles.pop(); //
