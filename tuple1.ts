//tuple has fixed size.
//cant add more elements.
//order also matters depends on data type.
//array order doesnt matter.

let p1:[string, number]=['naveen', 332434, -23443.23423 ]
//compile time error.
// Type '[string, number, number]' is not assignable to type '[string, number]'.
//   Source has 3 element(s) but target allows only 2.ts(2322)