//switch case with enums.

enum browser{
    c1="chrome",
    f1='firefox',
    e1='edge',
    s1='safari'
}

switch (browser) {
    case browser.c1: //Type 'browser' is not comparable to type 'typeof browser'.ts(2678)
    //cannot directly pass enum values.
        
        break;

    default:
        break;
}