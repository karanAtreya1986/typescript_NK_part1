//switch with boolean also allowed.
//boolean not allowed.
//see the compile error.

let flag:boolean=true;

switch (flag) {
    case false: //Type 'false' is not comparable to type 'true'.ts(2678)
        console.log('a grade') 
        break;

     case true:
        console.log('b grade') 
        break;

    default:
        console.log('no marks')
        break;
}