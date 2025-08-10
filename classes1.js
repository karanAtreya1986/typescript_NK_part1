var person = /** @class */ (function () {
    function person(firstname, age) {
        var _this = this;
        this.display = function () { return console.log(_this.firstname + " " + _this.age); };
        this.firstname = firstname;
        this.age = age;
    }
    return person;
}());
var p = new person("karan", -2343.3432);
console.log(p);
p.display();
