let passcode = 'select code'

class Employee {
    private _fullName: string
    get fullName(): string {
        return this._fullName
    }

    set fullName(newName: string) {
        if (passcode && passcode == 'select code') {
            this._fullName = newName
        } else {
            console.log("Error: Unauthorized update of employee!")
        }
    }
}

let employee = new Employee()
employee.fullName = 'Bob Jeiss'
if (employee.fullName) {
    console.log(employee.fullName)
}