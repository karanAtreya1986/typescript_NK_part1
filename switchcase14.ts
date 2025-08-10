//switch case with enums.

enum browser{
    c1="chrome",
    f1='firefox',
    e1='edge',
    s1='safari'
}

let browsername:string=browser.f1; //Cannot redeclare block-scoped variable 'browsername'.ts(2451)

switch (browsername) {
    case browser.c1:
        console.log("hello")
        break;

    default:
        break;
}