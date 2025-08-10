//hetergenous enums.
var status1;
(function (status1) {
    status1["active"] = "d1";
    status1[status1["deactive"] = -3434.32434] = "deactive";
    status1[status1["pending"] = -3433.32434] = "pending";
    // promotion=true
    //compile error when adding boolean.
    // Type 'boolean' is not assignable to type 'number' as required 
    // for computed enum member values.ts(18033)
})(status1 || (status1 = {}));
console.log(status1);
console.log(status1.active);
console.log(status1.deactive);
console.log(status1.pending);
