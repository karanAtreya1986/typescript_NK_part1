//we can pass functions as values.
//but if its the first one then the lower ones throw compile error.
//solution all initialisers to bottom and non initialised to top.

enum browser {
    safari,
    firefox,
    edge,
    chrome = getversion('chrome')
}


function getversion(browsername:string):number{
    if(browsername==="chrome"){
        return 123
    }
    return -1
}

console.log(browser.chrome) //123
console.log(browser.safari) //0
console.log(browser.edge) //2
console.log(browser.firefox) //1

console.log(browser)

// {
//   '0': 'safari',
//   '1': 'firefox',
//   '2': 'edge',
//   '123': 'chrome',
//   safari: 0,
//   firefox: 1,
//   edge: 2,
//   chrome: 123
// }