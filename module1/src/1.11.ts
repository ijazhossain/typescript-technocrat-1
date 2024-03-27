{
    // Ternary, Optional Chaining & nullish Operator
    const age=18;
    if(age>=18){
        // console.log('adult');

    }else{
        // console.log('not adult   ');
    }
    // Ternary Operator
    const isAdult=age>=18?'adult':'not adult'
    // console.log({isAdult});
    // nullish coalescing operator
    const isAuthenticated='';
    const result1=isAuthenticated??'Guest';
    console.log({result1});
    const result2=isAuthenticated?isAuthenticated:"Guest"
    console.log({result2});

    type User={
        name:string;
        address:{
            city:string;
            road:string;
            presentAddress:string;
            permanentAddress?:string;
        }
    }
    const user:User={
        name:'Persian',
        address:{
            city:'ctg',
            road:'Awesome Road',
            presentAddress:'ctg town'
        }
    }
    const permanentAddress =user?.address?.permanentAddress ??'No permanent Address'
    console.log({permanentAddress});
}