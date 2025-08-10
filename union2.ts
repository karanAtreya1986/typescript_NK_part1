//union with functions

function getuserinfo(customerid:(string|number)){
    if(typeof(customerid==='number')){
        return customerid+"_karan"
    }
    else if(typeof(customerid==='string')){
        return "this is a string" + customerid
    }
}

let i1=getuserinfo(-34324.3244)
console.log(i1) //-34324.3244_karan

let i2=getuserinfo('-324324.32434')
console.log(i2) //-324324.32434_karan

console.log(getuserinfo(-324324.32432432)) //-324324.32432432_karan
console.log(getuserinfo('-324324.32432432')) //-324324.32432432_karan