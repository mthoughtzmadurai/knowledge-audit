export class LookupData{
    Categories : [CategoryData]
}
export class CategoryData{
    CategoryName : string
    Id : number
    SubCategories : [SubCategoryData]
}

export class SubCategoryData{
    SubCategoryName : string
    Id: number
    Type:string
    Data : [Data]
}

export class Data{
    Value:string
    Id:number
}

export class Employees{
    Employees : [EmployeeData]
}

export class EmployeeData{
    ID : string
    FirstName : string
    LastName : string
    JobTitle : string
    Office : string
}