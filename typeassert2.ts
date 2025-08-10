//you tell ts that you know more about the data type.
//use <> or as for type assertions.

let s1:any="hello guys how are you"
let s2=s1 as string;
let s3= s2.length
console.log(s3) //22




let s4:any="hello guys how are you"
let len=(s4 as string).length
console.log(len) //22
