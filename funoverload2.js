//allowed in compile time.
//during run time get error.
function display(a) {
    console.log(a);
}
// function display(a:number):void{ 
//     //funoverload2.ts:7:10 - error TS2393: Duplicate function implementation.
//     console.log(a)
// }
display('tiger');
// display(-34324.3243) 
//Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)
