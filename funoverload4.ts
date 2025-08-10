//right way.

//first define the functions to overload.

function add4(a:string, b:string):string
function add4(a:number, b:number):number

//implement the function only once.
function add4(a:any, b:any):any{
    return a+b
}

let i1=add4(10,20)
console.log(i1) //30

let i2=add4('karan', 'tiger')
console.log(i2) //karantiger