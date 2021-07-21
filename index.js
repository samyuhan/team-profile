const inquirer = require('inquirer');
const fs = require('fs');

// Questions to ask 
const questions = () => {
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
            name: 'office',
            message: "What is the manager's office number?"

        }
    ])
}

questions();