//see another way to use with functions only.


enum browser {
     firefox,
    edge,
    chrome = getversion('chrome'),
    safari= getversion('chrome')+10,
    
}


function getversion(browsername:string):number{
    if(browsername==="chrome"){
        return 123
    }
    return -1
}

console.log(browser.chrome) //123
console.log(browser.safari) //133
console.log(browser.edge) //1
console.log(browser.firefox) //0

console.log(browser)

// {
//   '0': 'firefox',
//   '1': 'edge',
//   '123': 'chrome',
//   '133': 'safari',
//   firefox: 0,
//   edge: 1,
//   chrome: 123,
//   safari: 133
// }