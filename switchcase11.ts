//switch with boolean also allowed.
//boolean not allowed.
//see the compile error.

let flag:boolean=false;

switch (flag) {
    case false:
        console.log('a grade') 
        break;

     case true: //Type 'true' is not comparable to type 'false'.ts(2678)
        console.log('b grade') 
        break;

    default:
        console.log('no marks')
        break;
}