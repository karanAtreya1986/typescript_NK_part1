//see another way to use with functions only.
var browser;
(function (browser) {
    browser[browser["firefox"] = 0] = "firefox";
    browser[browser["edge"] = 1] = "edge";
    browser[browser["chrome"] = getversion('chrome')] = "chrome";
    browser[browser["safari"] = getversion('chrome') + 10] = "safari";
})(browser || (browser = {}));
function getversion(browsername) {
    if (browsername === "chrome") {
        return 123;
    }
    return -1;
}
console.log(browser.chrome); //123
console.log(browser.safari); //1
console.log(browser.edge); //3
console.log(browser.firefox); //2
console.log(browser);
