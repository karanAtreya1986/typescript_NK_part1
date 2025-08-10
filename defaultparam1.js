//default param.
//it should not be the first parameter in function.
function setdetails(name, age) {
    if (age === void 0) { age = -34324.32432; }
    return name + " " + age;
}
var i3 = setdetails('karan');
console.log(i3);
var i4 = setdetails('karan', 33434234);
console.log(i4);
// let i5=setdetails( 33434234, 'tom')
// //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(i5)
