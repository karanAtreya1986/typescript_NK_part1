//optional parameters.
//?
function getinformation(fname, age) {
    return fname + " " + age;
}
var i1 = getinformation('tom');
console.log(i1);
// let i2=getinformation(10,'riddle')
// //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(i2)
var i2 = getinformation('tom', -2334.32434);
console.log(i2);
