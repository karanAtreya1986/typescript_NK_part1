//default param.
//it should not be the first parameter in function.
// lets try to pass null and undefined.
function setdetails(name, age) {
    if (name === void 0) { name = 'karan'; }
    if (age === void 0) { age = 324324.32434; }
    return name + " " + age;
}
// var v1=setdetails(null, 324334)
// No overload matches this call.
//   The last overload gave the following error.
//     Argument of type 'null' is not assignable to parameter of type 'string'.ts(2769)
// var v1=setdetails(undefined, 324334)
// console.log(v1) //karan 324334
// var v1=setdetails('null', 324334)
// console.log(v1) //null 324334
// var v1=setdetails('undefined', 324334)
// console.log(v1) //undefined 324334
// var v1=setdetails('jimmy', null)
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'number | undefined'.ts(2769)
// console.log(v1) 
// var v1=setdetails('jimmy', undefined)
// console.log(v1)  //jimmy 324324.32434
// var v1=setdetails('jimmy', 'null')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'string' is not assignable to parameter of type 'number'.ts(2769)
// console.log(v1)  
// var v1=setdetails('jimmy', 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'string' is not assignable to parameter of type 'number'.ts(2769)
// console.log(v1)  
// var v1=setdetails(null, null)
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
// var v1=setdetails('null', null)
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'number | undefined'.ts(2769)
// console.log(v1)  
// var v1=setdetails(null, 'null')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
// var v1=setdetails('null', 'null')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'string' is not assignable to parameter of type 'number'.ts(2769)
// console.log(v1)  
// var v1=setdetails(null, undefined)
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
// var v1=setdetails('null', undefined)
// console.log(v1)   //null 324324.32434
// var v1=setdetails(null, 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
// var v1=setdetails('null', 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'string' is not assignable to parameter of type 'number'.ts(2769)
// console.log(v1)  
// var v1=setdetails(undefined, undefined)
// console.log(v1)   //karan 324324.32434
// var v1=setdetails('undefined', undefined)
// console.log(v1)   //undefined 324324.32434
// var v1=setdetails(undefined, 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'undefined' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
// var v1=setdetails('undefined', 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'string' is not assignable to parameter of type 'number'.ts(2769)
// console.log(v1)  
// var v1=setdetails(undefined, null)
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'undefined' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
var v1 = setdetails('undefined', undefined);
console.log(v1);
// var v1=setdetails(null, 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'null' is not assignable to parameter of type 'string'.ts(2769)
// console.log(v1)  
// var v1=setdetails('null', 'undefined')
// // No overload matches this call.
// //   The last overload gave the following error.
// //     Argument of type 'string' is not assignable to parameter of type 'number'.ts(2769)
// console.log(v1)  
