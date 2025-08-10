//only in plain tuple we can add using push.
//push gives new length of array after addition.

let t1:[string, number]=['karan', -324.2344]
let i1 = t1.push('jack',-233.32432)
console.log(t1) //[ 'karan', -324.2344, 'jack', -233.32432 ]
console.log(i1) //4