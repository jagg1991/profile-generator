const inquirer = require('inquirer');
const fs = require('fs');


const userInput = () => {
    inquirer
        .prompt([
            {
                type: "input",
                name: "Name",
                message: "What is the name of your employee?"
            },
            {
                type: "number",
                name: "ID",
                message: "What is your employees ID number?"
            },
            {
                type: "input",
                name: "Email",
                message: "What is your employees email address?"
            },
            {
                type: "input",
                name: "Email",
                message: "What is your employees email address?"
            },
            {
                type: "list",
                name: "Role",
                message: "What is the role of the employee?",
                choices: ['Manager', 'Engineer', 'Intern'],
            },
        ])
        .then((answer) => {
            console.log(answer.email)
        })
}

userInput();
