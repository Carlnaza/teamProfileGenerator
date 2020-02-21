const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(name, id, email, officeNum) {
        super(name, id, email)
        this.officeNum = officeNum
        this.title = 'Engineer'
    }

    getGithub() {
        return this.officeNum
    }

    getRole() {
        return this.title
    }
}

module.exports = Manager