//default param.
//it should not be the first parameter in function.
//here we are making it first params.

function setdetails(name:string='karan', age:number):string{
    return name + " " + age
}

let i5=setdetails('john', 32434)
console.log(i5) //john 32434


let i6=setdetails('', 32434)
console.log(i6) // 32434


// let i7=setdetails(32434)
// //Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
// console.log(i7)