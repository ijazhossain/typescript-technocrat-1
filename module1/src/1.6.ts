// Learning Function
// Normal Function

function add(num1:number,num2:number=10):number{
    return num1 + num2
}
add(2,4)
// arrow function
const addArrow=(num1:number, num2:number)=>{
    return num1 + num2;
}
// object function method
const poorUser={
    name:'Mezba',
    balance:0,
    addBalance(balance:number):string{
        return `My new balance is ${this.balance+balance}`
    }
}
const arr:number[]=[1,4,9];
const newArr: number[]=arr.map((element:number):number=>element*element)