//see another way to use with functions only.
//we cannot have non initialiser at bottom with this also.

enum browser {
    chrome = getversion('chrome'),
    safari= getversion('chrome')+10,
    firefox,
    edge,
    // compile error
    // Enum member must have initializer.ts(1061)
    
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