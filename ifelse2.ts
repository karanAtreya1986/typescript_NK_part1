//keep the condition checker variable outside always.
//not allowing to use == or === checker here.

let flag:boolean=false;

if(flag===true){ //This comparison appears to be unintentional 
// because the types 'false' and 'true' have no overlap.ts(2367)
    console.log('pass')
}


if(flag==true){ //This comparison appears to be unintentional 
// because the types 'false' and 'true' have no overlap.ts(2367)
    console.log('pass')
}