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
var u1 = isuseractive('karan');
console.log(u1);
