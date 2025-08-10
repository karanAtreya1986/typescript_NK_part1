//default param.
//it should not be the first parameter in function.
//here we are making it first param.s
function setdetails(name, age) {
    if (name === void 0) { name = 'karan'; }
    return name + " " + age;
}
var i5 = setdetails('john', 32434);
console.log(i5);
var i6 = setdetails('', 32434);
console.log(i6);
// let i7=setdetails(32434)
// //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(i7)
