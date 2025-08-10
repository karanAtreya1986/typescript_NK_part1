//switch case works with numbers also.
//case cannot have conditional statements.

let marks:number=100;

switch (marks) {
    case marks>90: //Type 'boolean' is not comparable to type 'number'.ts(2678)
        console.log('a grade') //a grade
        break;

     case 50:
        console.log('b grade')
        break;

    default:
        console.log('no marks')
        break;
}