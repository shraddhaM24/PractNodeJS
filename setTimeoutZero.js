console.log("Setimeout Zero !!");

var a = 1234;
var b = 49504;

// This callback will only be pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("call asap");
},0); // Trust issues with setTimeout

setTimeout(() => {
    console.log("call me after 3 seconds");
  }, 3000);

function multiply(x,y) {
    var res = x * y;
    return res;
}
 var c = multiply(a,b);
 console.log("Mutplication answer ", c);