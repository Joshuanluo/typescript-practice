class Department{
    // private id: string;
    // private name:string;
    private employees: string[]=[];

    constructor(private id:string,public name:string){
        // this.id = id;
        // this.name=n;
    }
    describe(this: Department){
        console.log(`Department (${this.id}): ${this.name}`);
        
    }
    
    addEmployees(employee:string){
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
        
    }
}

const accounting=new Department('d1',"Accounting");

accounting.addEmployees("Max");
accounting.addEmployees("Man");
accounting.name="new name";
// accounting.employees[2] = 'Anna';//private property

accounting.describe();
accounting.printEmployeeInformation();  

// const accountingCopy={name:'s',describe: accounting.describe}

// accountingCopy.describe();

