const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const team = [];

// Questions to ask 
const managerQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's employee ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"

        }
    ])
        .then(managerAnswers => {
            const { name, id, email, officeNumber } = managerAnswers;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);
        })
};

const employeeQuestions = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is your employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the employee's ID?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the employee's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the employee's Github?",
            when: (input) => input.role === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Do you want to add anyone else?',
            default: false
        }
    ])
        .then(employeeAnswers => {
            let { name, id, email, role, github, school, confirm } = employeeAnswers;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
            }

            team.push(employee);

            if (confirm) {
                return employeeQuestions(team);
            } else {
                return team;
            }
        })
};

managerQuestions();