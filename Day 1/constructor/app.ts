class Users{
    constructor(public name,public age,public email)
    {
    }
    displayVal()
    {
        console.log(this.name,this.age,this.email);
    }
}
const u1 = new Users("harsh",20,"harsh.bhatt811@gmail.com");
u1.displayVal();