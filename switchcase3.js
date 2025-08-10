//replacement to if else and faster than if else.
//if case doesnt match then goes to default.
//change to lower or upper case
var day1 = 'Sunday';
switch (day1.toLowerCase()) {
    case 'monday':
        console.log('monday');
        break;
    case 'tuesday':
        console.log('tuesday');
        break;
    case 'wednesday':
        console.log('wednesday');
        break;
    case 'thursday':
        console.log('thursday');
        break;
    case 'friday':
        console.log('friday');
        break;
    case 'saturday':
        console.log('saturday');
        break;
    case 'sunday':
        console.log('sunday');
        break;
    default:
        console.log('wrong day'); //wrong day
        break;
}
