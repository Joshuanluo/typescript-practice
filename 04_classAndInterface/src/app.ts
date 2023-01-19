abstract class Department {
    static fiscalYear = 2023;
    // private readonly id: string;
	// private name:string;
	protected employees: string[] = [];
    
	constructor(protected readonly id: string, public name: string) {
        // this.id = id;
		// this.name=n;
        //console.log(Department.fiscalYear);
        
	}

    static createEmployee(name: string){
        return{name:name}
    }

	abstract describe(this: Department): void; 

	addEmployee(employee: string) {
		// this.id='';//readonly
		this.employees.push(employee);
	}

	printEmployeeInformation() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
		this.admins = admins;
	}

    describe() {
        console.log('IT Department - ID: ' + this.id);
        
    }
}

class AccountingDepartment extends Department {
    private lastReport: string;
    
	get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
		}
		throw new Error("No report found.");
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error("Please pass in a val");
		}
		this.addReport(value);
	}

	constructor(id: string, private reports: string[]) {
		super(id, "Accounting");
		this.lastReport = reports[0];
	}

    describe(){
        console.log('Accounting Department - ID: '+ this.id);
        
    }

	addEmployee(name: string) {
		if (name === "Max") {
			return;
		}
		this.employees.push(name);
	}

	addReport(text: string) {
		this.reports.push(text);
		this.lastReport = text;
	}

	printReports() {
		console.log(this.reports);
	}
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment("d1", ["Max"]);



it.addEmployee("Max");
it.addEmployee("Man");
// it.employees[2] = 'Anna';//private property

it.describe();
it.name = "new name";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);
accounting.mostRecentReport="val";
console.log(accounting.mostRecentReport);

accounting.addReport("second report");
accounting.addEmployee("jane");

accounting.addEmployee("Max");
accounting.addEmployee("Josh");

accounting.printReports();
console.log(accounting);
accounting.printEmployeeInformation();

accounting.describe();

// const accountingCopy={name:'s',describe: accounting.describe}

// accountingCopy.describe();
