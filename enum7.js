//we can pass functions as values.
//but if its the first one then the lower ones throw compile error.
//solution all initialisers to bottom and non initialised to top.
var browser;
(function (browser) {
    browser[browser["safari"] = 0] = "safari";
    browser[browser["firefox"] = 1] = "firefox";
    browser[browser["edge"] = 2] = "edge";
    browser[browser["chrome"] = getversion('chrome')] = "chrome";
})(browser || (browser = {}));
function getversion(browsername) {
    if (browsername === "chrome") {
        return 123;
    }
    return -1;
}
console.log(browser.chrome); //89
console.log(browser.safari); //-45
console.log(browser.edge); //-32434.32434
console.log(browser.firefox); //tiger
console.log(browser);
