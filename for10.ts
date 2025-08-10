//for in with strings.
//for in doesnt work with strings properly.

let i2="hello world"

for (const key in i2) {
    //The right-hand side of a 'for...in' statement must be of type 
    // 'any', an object type or a type parameter, but here has type 'string'.ts(2407)
   console.log(key)
}


