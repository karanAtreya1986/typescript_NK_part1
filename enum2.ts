//override default values.
//all values will then be in order of how its defined.


enum browser{
    chrome=987,
    safari, 
    firefox,
    edge
}

console.log(browser.chrome) //987
console.log(browser.safari) //988
console.log(browser.edge) //990
console.log(browser.firefox) //989

console.log(browser)

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
