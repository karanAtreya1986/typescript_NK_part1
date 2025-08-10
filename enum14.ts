//hetergenous enums.

enum status1{
    active="d1",
    deactive=-3434.32434,
    pending,
    // promotion=true
    //compile error when adding boolean.
    // Type 'boolean' is not assignable to type 'number' as required 
    // for computed enum member values.ts(18033)
}

console.log(status1)

// {
//   active: 'd1',
//   deactive: -3434.32434,
//   '-3434.32434': 'deactive',
//   pending: -3433.32434,
//   '-3433.32434': 'pending'
// }

console.log(status1.active) //d1
console.log(status1.deactive) //-3434.32434
console.log(status1.pending) //-3433.32434
