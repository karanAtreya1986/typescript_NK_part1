//cant implement more than once.
function add(a, b) {
    return a + b;
}
function add(a) {
    return a + b;
}
var r1 = add(1, 2);
console.log(r1);
// let r2=add(3)
// //Expected 2 arguments, but got 1.ts(2554)
// // funoverload4.ts(5, 24): An argument for 'b' was not provided.
// console.log(r2)
