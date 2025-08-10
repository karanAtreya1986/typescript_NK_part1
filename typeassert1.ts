//you tell ts that you know more about the data type.
//use <> or as for type assertions.

let totalbill:any=200;
let finalbill=<number>totalbill+(-34324.32434)
console.log(finalbill) //-34124.32434
