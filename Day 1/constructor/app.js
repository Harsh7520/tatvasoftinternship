var Users = /** @class */ (function () {
    function Users(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    Users.prototype.displayVal = function () {
        console.log(this.name, this.age, this.email);
    };
    return Users;
}());
var u1 = new Users("harsh", 20, "harsh.bhatt811@gmail.com");
u1.displayVal();
