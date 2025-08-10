//numeric enum.

//Numeric values are by default assigned starting from zero to all the enum values.


enum browser{
    chrome,
    safari, 
    firefox,
    edge
}

console.log(browser.chrome) //0
console.log(browser.safari) //1
console.log(browser.edge) //3
console.log(browser.firefox) //2

console.log(browser)
// {
//   '0': 'chrome',
//   '1': 'safari',
//   '2': 'firefox',
//   '3': 'edge',
//   chrome: 0,
//   safari: 1,
//   firefox: 2,
//   edge: 3
// }