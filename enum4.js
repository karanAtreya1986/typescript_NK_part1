//what if we give our value randomly in between.
//we also tried with negative values.
var browser;
(function (browser) {
    browser[browser["chrome"] = 89] = "chrome";
    browser[browser["safari"] = -45] = "safari";
    browser[browser["firefox"] = -44] = "firefox";
    browser[browser["edge"] = -43] = "edge";
})(browser || (browser = {}));
console.log(browser.chrome); //0
console.log(browser.safari); //-45.34534
console.log(browser.edge); //-43.34534
console.log(browser.firefox); //-44.34534
console.log(browser);
// {
//   '0': 'chrome',
//   chrome: 0,
//   safari: -45.34534,
//   '-45.34534': 'safari',
//   firefox: -44.34534,
//   '-44.34534': 'firefox',
//   edge: -43.34534,
//   '-43.34534': 'edge'
// }
