//override default values.
//numeric enum.
//Numeric values are by default assigned starting from zero to all the enum values.
var browser;
(function (browser) {
    browser[browser["chrome"] = 987] = "chrome";
    browser[browser["safari"] = 988] = "safari";
    browser[browser["firefox"] = 989] = "firefox";
    browser[browser["edge"] = 990] = "edge";
})(browser || (browser = {}));
console.log(browser.chrome); //0
console.log(browser.safari); //1
console.log(browser.edge); //3
console.log(browser.firefox); //2
console.log(browser);
