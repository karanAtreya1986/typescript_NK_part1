//string enums

//brackets with quotes.

enum environment{
    dev1="d1",
    qa1='qa1',
    stage1='s1',
    prod1='p1'
}

console.log(environment) //{ dev: 'd1', qa: 'qa1', stage: 's1', prod: 'p1' }
console.log(environment['dev1']) //d1
