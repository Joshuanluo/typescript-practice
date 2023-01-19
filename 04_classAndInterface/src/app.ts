class Department{
    // private readonly id: string;
    // private name:string;
    protected employees: string[]=[];

    constructor(private readonly id:string,public name:string){
        // this.id = id;
        // this.name=n;
    }
    describe(this: Department){
        console.log(`Department (${this.id}): ${this.name}`);
        
    }
    
    addEmployee(employee:string){
        // this.id='';//readonly
        this.employees.push(employee)
    }

    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);
        
    }
}

class ITDepartment extends Department{
    constructor(id:string,public admins:string[]){
        super(id,'IT')
        this.admins=admins;
    }
}

class AccountingDepartment extends Department{
    constructor(id:string,private reports:string[]){
        super(id,'IT');
    }

    addEmployee(name: string){
        if(name==='Max'){
            return;
        }
        this.employees.push(name);
    }

    addReport(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
        
    }
}

const it=new ITDepartment('d1',["Max"]);

it.addEmployee("Max");
it.addEmployee("Man");
// it.employees[2] = 'Anna';//private property

it.describe();
it.name="new name";
it.printEmployeeInformation();  

console.log(it);

const accounting = new AccountingDepartment('d2',['first report'])
accounting.addReport('second report');
accounting.addEmployee('jane');

accounting.addEmployee('Max');
accounting.addEmployee('Josh');


accounting.printReports();
console.log(accounting);
accounting.printEmployeeInformation()

// const accountingCopy={name:'s',describe: accounting.describe}

// accountingCopy.describe();

