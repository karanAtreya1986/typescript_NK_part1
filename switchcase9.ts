//switch case works with decimals also.
//case cannot have conditional statements.

let marks:number=100.3243;

switch (marks) {
    case 100.32433:
        console.log('a grade') 
        break;

     case 100.3243:
        console.log('b grade') //b grade
        break;

    default:
        console.log('no marks')
        break;
}