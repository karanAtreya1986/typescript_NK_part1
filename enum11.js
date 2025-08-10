//string enums
var environment;
(function (environment) {
    environment["dev"] = "d1";
    environment["qa"] = "qa1";
    environment["stage"] = "s1";
    environment["prod"] = "p1";
})(environment || (environment = {}));
console.log(environment);
console.log(environment.dev);
