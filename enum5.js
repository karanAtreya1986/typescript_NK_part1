//give everyone random number.
//we can give values however we like.
var browser;
(function (browser) {
    browser[browser["chrome"] = 89] = "chrome";
    browser[browser["safari"] = -45] = "safari";
    browser["firefox"] = "tiger";
    // edge=false 
    // //Type 'boolean' is not assignable to type 'number' as required for 
    // computed enum member values.ts(18033)
    browser[browser["edge"] = -32434.32434] = "edge";
})(browser || (browser = {}));
console.log(browser.chrome); //89
console.log(browser.safari); //-45
console.log(browser.edge); //-43
console.log(browser.firefox); //-44
console.log(browser);
// {
//   '89': 'chrome',
//   chrome: 89,
//   safari: -45,
//   '-45': 'safari',
//   firefox: -44,
//   '-44': 'firefox',
//   edge: -43,
//   '-43': 'edge'
// }
