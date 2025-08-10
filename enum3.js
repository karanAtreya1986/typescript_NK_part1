var browser;
(function (browser) {
    browser[browser["chrome"] = 0] = "chrome";
    browser[browser["safari"] = -45.34534] = "safari";
    browser[browser["firefox"] = -44.34534] = "firefox";
    browser[browser["edge"] = -43.34534] = "edge";
})(browser || (browser = {}));
console.log(browser.chrome); //987
console.log(browser.safari); //988
console.log(browser.edge); //990
console.log(browser.firefox); //989
console.log(browser);
// {
//   '987': 'chrome',
//   '988': 'safari',
//   '989': 'firefox',
//   '990': 'edge',
//   chrome: 987,
//   safari: 988,
//   firefox: 989,
//   edge: 990
// }
