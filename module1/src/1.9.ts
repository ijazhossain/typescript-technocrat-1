{
// Type alias
type Student={
    name:string;
    age:number;
    gender:string;
    contactNo?:string;
    address:string;
}
const student1:Student={
    name:'Mezba',
    age:50,
    gender:'male',
    address:'ctg',
    contactNo:'017000000',
}
const student2:Student={
    name:'Mir',
    age:30,
    gender:'male',
    address:'dk',
    contactNo:'0171111111',
}
type UserName=string;
type IsAdmin=boolean;
const userName:UserName='Persian'
const isAdmin:IsAdmin=true

// type alias for function
// const add =(num1:number,num2:number):number=>num1+num2;
type Add =(num1:number,num2:number)=>number
const add:Add =(num1,num2)=>num1+num2;
}

