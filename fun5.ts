//call function directly inside if.
//see when we write something then the return is not printed.

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

if(isuseractive('jacky')){
    console.log('login with jacky')
}

//daruwala


if(isuseractive('jacky')){
}

//daruwala