//switch case with enums.
var browser;
(function (browser) {
    browser["c11"] = "chrome";
    browser["f11"] = "firefox";
    browser["e11"] = "edge";
    browser["s11"] = "safari";
})(browser || (browser = {}));
var b1 = browser.f11;
// Cannot redeclare block-scoped variable 'browsername'.ts(2451)
// switchcase14.ts(10, 5): 'browsername' was also declared here.
switch (b1) {
    case browser.f11:
        console.log('firefox');
        break;
    case browser.c11:
        console.log('chrome');
        break;
    case browser.e11:
        console.log('edge');
        break;
    case browser.s11:
        console.log('safari');
        break;
    default:
        console.log('no browser');
        break;
}
