//right way.

//first define the functions to overload.
//defined some more combinations.

function add6(a:string, b:string):string
function add6(a:number, b:number):number
function add6(a:number, b:boolean):any
function add6(a:string, b:number):string
function add6(a:boolean, b:boolean):boolean
// function add6(a:boolean):boolean
//funoverload6.ts:11:10 - error TS2394: This overload signature 
// is not compatible with its implementation signature.
// function add6(a:number):number
//funoverload6.ts:14:10 - error TS2394: 
// This overload signature is not compatible with its implementation signature.

//implement the function only once.
function add6(a:any, b:any):any{
    return a+b
}

let q1=add6(10,20)
console.log(q1) //30

let q11=add6('karan', 'tiger')
console.log(q11) //karantiger

let q111=add6(324324, false)
console.log(q111) //324324

let q1111=add6('324324', 45)
console.log(q1111) //32432445

let q11111=add6(true, false)
console.log(q11111) //1

// let q111111=add6(true)
// console.log(q111111) 

// let q1111111=add6(34435)
// console.log(q1111111) 