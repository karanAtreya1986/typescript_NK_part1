//never with functions.

function getinfo(mess:string):never{
    console.log("hello")
}
//A function returning 'never' cannot have a reachable end point.ts(2534)

getinfo("titanic")