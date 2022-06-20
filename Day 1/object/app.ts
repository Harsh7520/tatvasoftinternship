export {}
interface usersTyped{
    name:string,
    age:number,
    address:any,
}


let users:usersTyped={
    name:'harsh',
    age:20,
    address:'Shyamal'
}

let user:any = {
    name:40,
    age:20,
    address:true
}

console.warn(users)
console.warn(user)