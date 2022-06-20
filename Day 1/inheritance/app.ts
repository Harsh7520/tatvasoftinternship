export{}
class Parent{
    name:string;
    setName(name):void
    {
        this.name=name
    }

}
class Child extends Parent{
    getName():string
    {
        return this.name
    }
}
let c1 = new Child();
c1.setName("harsh");

console.log(c1.getName());