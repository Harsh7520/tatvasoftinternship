export{}
class App {
    name:string="HelloWorld";
    constructor(name:string)
    {
        this.name=name
    }
    getName():string
    {
        return this.name
    }
}
let x = new App("harsh");

console.warn(x.getName());