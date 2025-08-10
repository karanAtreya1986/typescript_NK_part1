//error cases of functional overload.

//not allowed in ts.

function display1(a:string, b:string):void{ //Duplicate function implementation.ts(2393)
    console.log(a)
}

function display1(a:number):number{ //Duplicate function implementation.ts(2393)
    console.log(a)
}