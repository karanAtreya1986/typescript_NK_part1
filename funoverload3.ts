//here also at run time we come to know not at compile time.

function display3(a:string, b:string):void{ 
    console.log(a)
}

// function display(a:number):any{ 
//     //funoverload3.ts:7:10 - error TS2393: Duplicate function implementation.
//     //run time error.
//     console.log(a)
// }


display3('tiger', 'lion')
// display(-32434.32434)
//Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)