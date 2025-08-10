//any return type
function print1() {
    return 12;
}
function print2() {
    return '12';
}
function print3() {
    return false;
}
function print4() {
    return -33434.32434;
}
console.log(print1); //[Function: print1]
console.log(print2); //[Function: print1]
console.log(print3); //[Function: print3]
console.log(print4); //[Function: print4]
var p1 = print1();
console.log(p1);
var p2 = print2();
console.log(p2);
var p3 = print3();
console.log(p3);
var p4 = print4();
console.log(p4);
