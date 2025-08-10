//cant implement more than once.
//compile time - throws error when calling function with one argument.
//run time - shows duplicate function.

function add7(a:any, b:any):any{
    return a+b
}


// function add7(a:any):any{
//     //funoverload7.ts:8:10 - error TS2393: Duplicate function implementation.
//     return a+b
// }

let r1=add7(1,2)
console.log(r1)

// let r2=add7(3)
// //Expected 2 arguments, but got 1.ts(2554)
// // funoverload4.ts(5, 24): An argument for 'b' was not provided.
// console.log(r2)