const fs = require("node:fs");
const https = require("https");

console.log("Hello World of Async");

var a = 1234;
var b = 49504;

// Synchronous
fs.readFileSync("./file.txt","utf8")
    console.log("This will execute only after file read");

https.get("https://dummyjson.com/products/1",(res) => {
    console.log("Fetch Data successfully");
});

setTimeout(() => {
    console.log("setTimeout called after 5 seconds");
},5000);

// Async function
fs.readFile("./file.txt","utf8",(err,data) => {
    console.log("File Data : ",data);
});

function multiply(x,y) {
    var res = x * y;
    return res;
}
 var c = multiply(a,b);
 console.log("Mutplication answer ", c);