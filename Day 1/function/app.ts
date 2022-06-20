export {}
function Calc(a:number,b?:number):number
{
    return b?a+b:a;
}

console.warn(Calc(100))