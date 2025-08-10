class person{

    firstname:string
    age:number

    constructor(firstname:string, age:number){
        this.firstname=firstname
        this.age=age
    }


    display=()=>console.log(this.firstname+ " " + this.age)
}

let p=new person("karan", -2343.3432)
console.log(p)
p.display() //karan -2343.3432


// person {
//   display: [Function (anonymous)],
//   firstname: 'karan',
//   age: -2343.3432
// }
