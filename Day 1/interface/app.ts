export {}
interface usersTyped{
    name:string,
    age:number,
    getName:()=>string
}


let users:usersTyped={
    name:'harsh',
    age:20,
    getName:function()
    {
        return "harsh"
    }
}
console.warn(users.getName());
