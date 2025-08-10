//switch case with enums.

enum browser{
    c1="chrome",
    f1='firefox',
    e1='edge',
    s1='safari'
}

let browsername:string=browser.f1; //Cannot redeclare block-scoped variable 'browsername'.ts(2451)

switch (browsername) {
    case c1: //Cannot find name 'c1'.ts(2304)
    //cannot directly pass enum values.
        
        break;

    default:
        break;
}