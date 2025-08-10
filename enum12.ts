//string enums

//another way to access using brackets
//quotes mandatory else compile error.

enum environment{
    dev="d1",
    qa='qa1',
    stage='s1',
    prod='p1'
}

console.log(environment) //{ dev: 'd1', qa: 'qa1', stage: 's1', prod: 'p1' }
console.log(environment[dev]) //compile error
//Cannot find name 'dev'.ts(2304)