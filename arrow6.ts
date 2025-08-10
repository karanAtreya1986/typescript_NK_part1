//parameters and return from arrow.
//when return is used then braces mandatory else compiler error.

let add2=(a:number, b:number):number=>return a+b //'{' expected.ts(1005)

let i1=add2(123123,-2322.231132)
console.log(i1) 