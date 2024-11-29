console.log("sum module");
var x = 20;
function calculateSum(s1,s2){
    var sum = s1 + s2;
    console.log(sum);
}

module.exports = {calculateSum, x};