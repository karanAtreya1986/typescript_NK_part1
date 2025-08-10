//replacement to if else and faster than if else.
//if case doesnt match then goes to default.

let day1:string='Sunday'

switch (day1) {
    case 'monday':
        console.log('monday')
        break;
    case 'tuesday':
        console.log('tuesday')
        break;
    case 'wednesday':
        console.log('wednesday')
        break;
    case 'thursday':
        console.log('thursday')
        break;
    case 'friday':
        console.log('friday')
        break;
    case 'saturday':
        console.log('saturday')
        break;
    case 'sunday':
        console.log('sunday') 
        break;

    default:
        console.log('wrong day') //wrong day
        break;
}