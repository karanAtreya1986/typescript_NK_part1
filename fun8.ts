//void and return enemies.


function add2(a:number, b:number):void{
    console.log(a+b)
    return 12 //Type 'number' is not assignable to type 'void'.ts(2322)
}

add2(1,2) 