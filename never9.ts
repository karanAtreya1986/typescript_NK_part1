//never with functions.

function getinfo(mess:string):never{
    throw new Error(mess)
}

let i1=getinfo('titanic')
console.log(i1)