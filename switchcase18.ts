//switch case with enums.

enum browser{
    c13="chrome",
    f13='firefox',
    e13='edge',
    s13='safari'
}

//even like this using directly the name doesnt work.

switch (browser) {
    case "chrome": 
        console.log('firefox')
        break;
    case 'firefox':
        console.log('chrome')
        break;
    case 'edge':
        console.log('edge')
        break;
    case "safari": //Type 'string' is not comparable to type 'typeof browser'.ts(2678)
        console.log('safari')
        break;

    default:
        console.log('no browser')
        break;
}