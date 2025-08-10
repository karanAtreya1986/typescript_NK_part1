//if you dont want to move from top, then assign value to second one.

enum browser {
    chrome = getversion('chrome'),
    safari=1,
    firefox,
    edge,
    
}


function getversion(browsername:string):number{
    if(browsername==="chrome"){
        return 123
    }
    return -1
}

console.log(browser.chrome) //123
console.log(browser.safari) //1
console.log(browser.edge) //3
console.log(browser.firefox) //2

console.log(browser)

// {
//   '1': 'safari',
//   '2': 'firefox',
//   '3': 'edge',
//   '123': 'chrome',
//   chrome: 123,
//   safari: 1,
//   firefox: 2,
//   edge: 3
// }