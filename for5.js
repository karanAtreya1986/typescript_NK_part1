// for of with condition
var n2 = [1, -323, 324324.3243, -234324, true, 't', 'tiger'];
for (var _i = 0, n2_1 = n2; _i < n2_1.length; _i++) {
    var element = n2_1[_i];
    console.log(element);
    if (element === true) {
        console.log('hi');
        break;
        console.log('bye'); //Unreachable code detected.ts(7027)
    }
    console.log('jack');
}
console.log('dawson');
