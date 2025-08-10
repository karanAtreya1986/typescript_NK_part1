// for of with condition


let n2=[1,-323,324324.3243,-234324,true, 't', 'tiger']

for (const element of n2) {
    console.log(element)
    if(element===true){
        console.log('hi')
        break
        console.log('bye') //Unreachable code detected.ts(7027)
    }
    console.log('jack')
}
console.log('dawson')

// 1
// jack
// -323
// jack
// 324324.3243
// jack
// -234324
// jack
// true
// hi
// dawson