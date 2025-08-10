//optional parameters.
//?
//when you dont pass we get undefined.

function getinformation(fname:string, age?:number):string{
    return fname + " " + age
}

let i1=getinformation('tom')
console.log(i1) //tom undefined

// let i2=getinformation(10,'riddle')
// //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(i2)

let i2=getinformation('tom', -2334.32434)
console.log(i2) //tom -2334.32434