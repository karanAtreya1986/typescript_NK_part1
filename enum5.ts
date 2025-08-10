//give different value types and check.
//only boolean not allowed.


enum browser {
    chrome = 89,
    safari = -45,
    firefox = 'tiger',
    // edge=false 
    //compile error.
    // //Type 'boolean' is not assignable to type 'number' as required for 
    // computed enum member values.ts(18033)
    edge=-32434.32434
}

console.log(browser.chrome) //89
console.log(browser.safari) //-45
console.log(browser.edge) //-32434.32434
console.log(browser.firefox) //tiger

console.log(browser)

// {
//   '89': 'chrome',
//   chrome: 89,
//   safari: -45,
//   '-45': 'safari',
//   firefox: 'tiger',
//   edge: -32434.32434,
//   '-32434.32434': 'edge'
// }
