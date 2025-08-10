//default param.
//it should not be the first parameter in function.
// here we are making both params default.

function setdetails(name:string='karan', age:number=324324.32434):string{
    return name + " " + age
}

var i7=setdetails()
console.log(i7) //karan 324324.32434

var i8=setdetails('t')
console.log(i8) //t 324324.32434

// var i9=setdetails(432432)
// //No overload matches this call.
// //   Overload 1 of 3, '(name?: string, age?: number): string', gave the following error.
// //     Argument of type 'number' is not assignable to parameter of type 'string'.
// //   Overload 2 of 3, '(name: string, age?: number): string', gave the following error.
// //     Argument of type 'number' is not assignable to parameter of type 'string'.ts(2769)
// console.log(i9)

var i9=setdetails('tiger', -32434324)
console.log(i9) //tiger -32434324