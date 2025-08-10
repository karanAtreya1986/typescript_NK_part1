//boolean function.

function isuseractive(username:string):boolean{
    if(username==='jack'){
        console.log('titanic')
        return true
    }else if(username==='honey'){
        console.log('singh')
        return false
    }else{
        console.log('daruwala')
        return false
    }
}

let u1=isuseractive('karan')
console.log(u1)

// daruwala
// false