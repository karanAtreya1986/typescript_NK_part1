//switch case with enums.

enum browser{
    c12="chrome",
    f12='firefox',
    e12='edge',
    s12='safari'
}

//we try to use the enum name in strings.
//doesnt work.

switch (browser) {
    case "c12": //Type 'string' is not comparable to type 'typeof browser'.ts(2678)
        console.log('firefox')
        break;
    case 'f12':
        console.log('chrome')
        break;
    case 'e12':
        console.log('edge')
        break;
    case "s12":
        console.log('safari')
        break;

    default:
        console.log('no browser')
        break;
}