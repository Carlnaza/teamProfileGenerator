const prompt = require('inquirer').createPromptModule()
const Manager = require('./employees/Manager.js')
const Engineer = require('./employees/Engineer.js')
const Employee = require('./employees/Employee.js')
const Intern = require('./employees/Intern.js')

const iniQues = [
    "Manager, what is your name?",
    "What is your ID#?",
    "What is your email?",
    "What is your office number?",
    "How many employees are on your team?",
    "How many interns are on your team?"
]

const empQues = [
    "What is your name?",
    "What is your ID#?",
    "What is your email?",
    "What is your GitHub username?",
    "What is your School Name?"
]

async function getManager() {
    await prompt([
        {
           type: "input",
           name: "manName",
           message: iniQues[0]
        },
        {
           type: "input",
           name: "manId",
           message: iniQues[1]
        },
        {
           type: "input",
           name: "manEmail",
           message: iniQues[2]
        },
        {
           type: "input",
           name: "manOffice",
           message: iniQues[3]
        },
        {
           type: "input",
           name: "manEmpNum",
           message: iniQues[4]
        },
        {
           type: "input",
           name: "manIntNum",
           message: iniQues[5]
        }
    ])
    .then(response => {
        console.log(response)

        for(let i = 0; i < response.manEmpNum; i++) {
            getEmp()
        }
    })
    .catch(e => console.error(e))
}

async function getEmp(empNum) {
    await prompt([
        {
            type: "input",
            name: "empName",
            message: `Employee#${empNum + 1} is your name?`
         },
        {
            type: "input",
            name: "empId",
            message: "What is your ID#?"
         },
        {
            type: "input",
            name: "empEmail",
            message: "What is your email?"
         },
        {
            type: "input",
            name: "empName",
            message: "What is your GitHub link/username?"
         },
    ])
    .then( response => {
        console.log(response)
    })
    .catch(e => console.error(e))
}

getManager()