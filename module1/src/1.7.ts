{
    //Spread operator
    //Destructure

    //Learning Spread Operator

    const bros1:string[]=['Mir', 'Mizan','Firoz'];
    const bros2:string[]=['Tonmoy', 'Nahid','Rahat'];
    bros1.push(...bros2);
    const mentor1={
        typescript:'Nahid',
        redux:'Mir',
        dmbs:'Mizan',
    }
    const mentor2={
        prisma:'Firoz',
        redux:'Tanmoy',
        dmbs:'Nahid'
    }
    const mentorList={
        ...mentor1,
        ...mentor2
    }

    //Learn rest Operator
    

}