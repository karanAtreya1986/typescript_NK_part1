//never with functions.

function getinfo(mess:string):never{
    console.log("hello")
    return 123 //Type '123' is not assignable to type 'never'.ts(2322)
}

console.log(getinfo("titanic"))