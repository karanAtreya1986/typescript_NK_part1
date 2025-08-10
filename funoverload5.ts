//right way.

//first define the functions to overload.
//defined some more combinations.

function add5(a:string, b:string):string
function add5(a:number, b:number):number
function add5(a:number, b:boolean):any
function add5(a:string, b:number):string
function add5(a:boolean, b:boolean):boolean

//implement the function only once.
function add5(a:any, b:any):any{
    return a+b
}

let i3=add5(10,20)
console.log(i3) //30

let i4=add5('karan', 'tiger')
console.log(i4) //karantiger

let i5=add5(324324, false)
console.log(i5) //324324

let i6=add5('324324', 45)
console.log(i6) //32432445

let i7=add5(true, false)
console.log(i7) //1