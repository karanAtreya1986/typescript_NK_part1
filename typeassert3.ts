//you tell ts that you know more about the data type.
//use <> or as for type assertions.

let flag:any=true;
if(flag as boolean){
    console.log("hello world") //hello world
}
