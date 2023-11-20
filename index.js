// TODO: Include packages needed for this application
const inquireer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of the Project?',
    },
    {
        type:'input',
        name:'description',
        message:'Provide a description of your project',
    },
    {
        type:'input',
        name:'table_of_contents',
        message:'Provide a Table of Contents',
    },
    {
        type:'input',
        name:'instillation',
        message:'What are the instillation instructions?',
    },
    {
        type:'input',
        name:'usage',
        message:'How do you use the project?',
    },
    {
        type:'list',
        name:'license',
        message:'Choose the license for your project',
        choices:['MIT','Apache 2.0','GNU 3.0','BSD 2','BSD 3','Boost Software License 1.0','Creative Commons Zero v1.0 Universal','Eclipse Public License 2.0', 'GNU 2.0', 'GNU 2.1', 'Mozilla Public License 2.0','None']
    },
    {
        type:'input',
        name:'contributing',
        message:'How can others contribute to the project',
    },
    {
        type:'input',
        name:'tests',
        message:'What would be the test instructions?',
    },
    {
        type:'input',
        name:'github',
        message:'What is your GitHub username?',
    },
    {
        type:'input',
        name:'email',
        message:'What is your e-mail address?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
