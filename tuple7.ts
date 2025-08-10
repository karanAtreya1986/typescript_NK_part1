//push method also works with tuple.
//it doenst work with tuple with arrays.

let t1:[string, number][]=[['karan', -324.2344], ['tom', 423.3243]]

t1.push('ravi', -343.23432)
//compile error.
// Argument of type 'string' is not assignable to parameter of type '[string, number]'.ts(2345)