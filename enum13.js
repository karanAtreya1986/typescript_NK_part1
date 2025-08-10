//string enums
//brackets with quotes.
var environment;
(function (environment) {
    environment["dev1"] = "d1";
    environment["qa1"] = "qa1";
    environment["stage1"] = "s1";
    environment["prod1"] = "p1";
})(environment || (environment = {}));
console.log(environment); //{ dev: 'd1', qa: 'qa1', stage: 's1', prod: 'p1' }
console.log(environment['dev1']); //undefined
