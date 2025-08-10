//any return type

function print1():any{
    return 12
}


function print2():any{
    return '12'
}


function print3():any{
    return false
}


function print4():any{
    return -33434.32434
}

console.log(print1) //[Function: print1]
console.log(print2) //[Function: print1]
console.log(print3) //[Function: print3]
console.log(print4) //[Function: print4]


let p1=print1()
console.log(p1) //12


let p2=print2()
console.log(p2) //12


let p3=print3()
console.log(p3) //false


let p4=print4()
console.log(p4) //-33434.32434