

//we can give values however we like.


enum browser{
    chrome=89,
    safari=-45, 
    firefox,
    edge
}

console.log(browser.chrome) //89
console.log(browser.safari) //-45
console.log(browser.edge) //-43
console.log(browser.firefox) //-44

console.log(browser)

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
