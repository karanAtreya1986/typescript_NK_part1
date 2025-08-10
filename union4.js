//union with functions
//see if we try to return multiple values from function.
//compile error.
// Function lacks ending return statement and return type does not include 'undefined'.ts(2366)
//add return undefined.
function getuserinfo(customerid) {
    if (typeof (customerid === 'number')) {
        return customerid + "_karan";
    }
    else if (typeof (customerid === 'string')) {
        return "this is a string" + customerid;
    }
    // return null //compile error
    //Type 'null' is not assignable to type 'string | number'.ts(2322)
    return 'null';
}
var i1 = getuserinfo(-34324.3244);
console.log(i1);
var i2 = getuserinfo('-324324.32434');
console.log(i2);
console.log(getuserinfo(-324324.32432432));
console.log(getuserinfo('-324324.32432432'));
