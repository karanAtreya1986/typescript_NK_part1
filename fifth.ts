//null and undefined
//compile errors.

let city:null=null
let c1:null='tiger' //Type '"tiger"' is not assignable to type 'null'.ts(2322)
let c2:null=-324.23434 //Type '-324.23434' is not assignable to type 'null'.ts(2322)
let c3:null=false //Type 'false' is not assignable to type 'null'.ts(2322)