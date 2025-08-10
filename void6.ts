//blank return allowed.

function getinfo(mess:string):void{
    console.log("hello")
    return
    console.log("byee") //Unreachable code detected.ts(7027)
}


getinfo("tara") //hello