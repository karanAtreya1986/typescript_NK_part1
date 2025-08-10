//switch case with enums.

enum browser{
    c11="chrome",
    f11='firefox',
    e11='edge',
    s11='safari'
}

let b1:string=browser.f11;
// Cannot redeclare block-scoped variable 'browsername'.ts(2451)
// switchcase14.ts(10, 5): 'browsername' was also declared here.

switch (b1) {
    case browser.f11:
        console.log('firefox') //firefox
        break;
    case browser.c11:
        console.log('chrome')
        break;
    case browser.e11:
        console.log('edge')
        break;
    case browser.s11:
        console.log('safari')
        break;

    default:
        console.log('no browser')
        break;
}