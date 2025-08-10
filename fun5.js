//call function directly inside if.
//boolean function.
function isuseractive(username) {
    if (username === 'jack') {
        console.log('titanic');
        return true;
    }
    else if (username === 'honey') {
        console.log('singh');
        return false;
    }
    else {
        console.log('daruwala');
        return false;
    }
}
if (isuseractive('jacky')) {
    console.log('login with jacky');
}
//daruwala
if (isuseractive('jacky')) {
}
