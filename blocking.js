const crypto = require("node:crypto");

console.log("Blocking File !!");

var a = 1234;
var b = 49504;

// pbkdf2 -  Password Base Key Deravtive Function

// Synchronous Function - Will BLOCK THE MAIN THREAD - DON"T USE IT
console.log("==========");
crypto.pbkdf2Sync("password","salt",500000,50,"sha512");
console.log("First Key generated");

setTimeout(() => {
    console.log("call me right now !!!! ");
  }, 0); // it will only be called once call stack of main thread is empty

  // Async Function
crypto.pbkdf2("password", "salt", 5000000, 50, "sha512", (err, key) => {
    console.log("Second Key is generated");
  });
  

function multiply(x,y) {
    var res = x * y;
    return res;
}
 var c = multiply(a,b);
 console.log("Mutplication answer ", c);