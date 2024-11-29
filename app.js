require("./xyz");
// const {calculateSum,x} = require("./sum"); //SyntaxError: Identifier 'x' has already been declared
// const {calculateSum} = require("./sum");
// import { calculateMin } from "./moduleSum.js";
const { calculateSum,calculateMultiply } = require("./calculate");
const data = require("./data.json");

var name = "Shraddha Mistry";
var a =10;
var b =20;
var x=100;
// calculateMin(a,b);
calculateSum(a,b);
calculateMultiply(a,b);
console.log(name);
console.log((data));

//op
// Another module
// sum module
// 30
// Shraddha Mistry
// 100