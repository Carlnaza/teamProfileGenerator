const Employee = require('./Employee.js')

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.github = school
        this.title = 'Intern'
    }

    getGithub() {
        return this.school
    }

    getRole() {
        return this.title
    }
}

module.exports = Intern