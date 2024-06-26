{
    // Union and Intersection types
    // Union type
    type FrontendDeveloper='fakibazDeveloper'|'juniorDeveloper'
    type Developer='FrontendDeveloper'|'FullstackDeveloper'
    const newDeveloper:FrontendDeveloper='juniorDeveloper';
    type User={
        name:string;
        email:string;
        gender:'male'|'female';
        bloodGroup:'O+'|'A+'|"AB+"
    }
    // Intersection type
    type FrontDeveloper={
        skills:string[];
        designation1:'Frontend Developer'
    }
    type BackendDeveloper={
        skills:string[];
        designation2:'Backend Developer'
    }
    type FullstackDeveloper=FrontDeveloper & BackendDeveloper
    const fullstackDeveloper:FullstackDeveloper={
        skills:['HTML','CSS','Express'],
        designation1:'Frontend Developer',
        designation2:'Backend Developer'
    }
}