//void and return cannot come together.

function getinfo(mess:string):void{
    return 1 //Type 'number' is not assignable to type 'void'.ts(2322)
}