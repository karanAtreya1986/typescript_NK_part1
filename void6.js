//blank return allowed.
function getinfo(mess) {
    console.log("hello");
    return;
    console.log("byee"); //Unreachable code detected.ts(7027)
}
getinfo("tara");
