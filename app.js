const prompt = require('inquirer').createPromptModule()
const Manager = require('./employees/Manager.js')
const Engineer = require('./employees/Engineer.js')
const Employee = require('./employees/Employee.js')
const Intern = require('./employees/Intern.js')
const fs = require('fs')

const employees = []

const iniQues = [
    "Manager, what is your name?",
    "What is your ID#?",
    "What is your email?",
    "What is your office number?",
    "How many employees are on your team?",
    "How many interns are on your team?"
]

const empQues = [
    "Employee, what is your name?",
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
        employees.push(new Manager(response.manName, response.manId, response.manEmail, response.manOffice))
        console.log(employees)
        getEmp(response.manEmpNum, response.manIntNum)
    })
    .catch(e => console.error(e))
}

async function getEmp(empNum, intNum) {
    for(let i = 0; i < empNum; i++) {
       await prompt([
        {
            type: "input",
            name: "empName",
            message: empQues[0]
         },
        {
            type: "input",
            name: "empId",
            message: empQues[1]
         },
        {
            type: "input",
            name: "empEmail",
            message: empQues[2]
         },
        {
            type: "input",
            name: "gitHubName",
            message: empQues[3]
         },
    ])
    .then(response => {
        employees.push(new Engineer(response.empName, response.empId, response.empEmail, response.gitHubName))
    })
    .catch(e => console.error(e))
    }

    if(intNum > 0) {
        getInt(intNum)
    } else {
        console.log('There are no Interns to enter')
    }
    
}

async function getInt(intVal) {
    for(let j = 0; j < intVal; j++ ) {
        await prompt([
            {
                type: "input",
                name: "intName",
                message: 'Intern, what is your name?'
            },
            {
                type: "input",
                name: "intId",
                message: empQues[1]
            },
            {
                type: "input",
                name: "intEmail",
                message: empQues[2]
            },
            {
                type: "input",
                name: "schoolName",
                message: empQues[4]
            },
        ])
        .then(response => {
            employees.push(new Intern(response.intName, response.intId, response.intEmail, response.schoolName))
        })
        .catch(e => console.error(e))
    }
    console.log(employees)
}

getManager()