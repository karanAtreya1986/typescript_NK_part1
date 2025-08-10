//default param.
//it should not be the first parameter in function.

function setdetails(name:string, age:number=-34324.32432):string{
    return name + " " + age
}

let i3=setdetails('karan')
console.log(i3) //karan -34324.32432

let i4=setdetails('karan', 33434234)
console.log(i4) //karan 33434234


// let i5=setdetails( 33434234, 'tom')
// //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(i5)