//void and blank return allowed.

function printhello(): void {
    console.log("hello")
    return
    console.log("hello1") //Unreachable code detected.ts(7027)
}

printhello() //hello