//switch case works with decimals also.
//case cannot have conditional statements.
var marks = 100.3243;
switch (marks) {
    case 100.32433:
        console.log('a grade');
        break;
    case 100.3243:
        console.log('b grade');
        break;
    default:
        console.log('no marks');
        break;
}
