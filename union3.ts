//union with functions

//see if we try to return multiple values from function.
//compile error.
// Function lacks ending return statement and return type does not include 'undefined'.ts(2366)

function getuserinfo(customerid:(string|number)):(string|number){
    if(typeof(customerid==='number')){
        return customerid+"_karan"
    }
    else if(typeof(customerid==='string')){
        return "this is a string" + customerid
    }
}

let i1=getuserinfo(-34324.3244)
console.log(i1) 

let i2=getuserinfo('-324324.32434')
console.log(i2) 

console.log(getuserinfo(-324324.32432432)) 
console.log(getuserinfo('-324324.32432432')) 