//never with functions.
function getinfo(mess) {
    throw new Error(mess);
}
var i1 = getinfo('titanic');
console.log(i1);
