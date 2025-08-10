//we can pass functions as values.
//but if its the first one then the lower ones throw compile error.

enum browser {
    chrome = getversion('chrome')
    safari,
    firefox,
    edge
}
//compile error
// An enum member name must be followed by a ',', '=', or '}'.ts(1357)


function getversion(browsername:string):number{
    if(browsername==="chrome"){
        return 123
    }
    return -1
}

console.log(browser.chrome) //89
console.log(browser.safari) //-45
console.log(browser.edge) //-32434.32434
console.log(browser.firefox) //tiger

console.log(browser)