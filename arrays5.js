//iterate array using index based for loop.
// let e1:Array<string>=['tata', 't', null, undefined]
//Type 'null' is not assignable to type 'string'.ts(2322)
//Type 'undefined' is not assignable to type 'string'.ts(2322)
var e1 = ['tata', 't', 'john', 'cena'];
for (var index = 0; index < e1.length; index++) {
    console.log(e1[index]);
}
