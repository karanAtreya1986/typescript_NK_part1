//if you dont want to move from top, then assign value to second one.
var browser;
(function (browser) {
    browser[browser["chrome"] = getversion('chrome')] = "chrome";
    browser[browser["safari"] = 1] = "safari";
    browser[browser["firefox"] = 2] = "firefox";
    browser[browser["edge"] = 3] = "edge";
})(browser || (browser = {}));
function getversion(browsername) {
    if (browsername === "chrome") {
        return 123;
    }
    return -1;
}
console.log(browser.chrome); //123
console.log(browser.safari); //0
console.log(browser.edge); //2
console.log(browser.firefox); //1
console.log(browser);
// {
//   '0': 'safari',
//   '1': 'firefox',
//   '2': 'edge',
//   '123': 'chrome',
//   safari: 0,
//   firefox: 1,
//   edge: 2,
//   chrome: 123
// }
