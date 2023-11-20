// TODO: Include packages needed for this application
const inquireer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');
const { default: inquirer } = require('inquirer');

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
        name:'tableOfContents',
        message:'Provide a Table of Contents',
    },
    {
        type:'input',
        name:'installation',
        message:'What are the installation instructions?',
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
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) :console.log('README has been succesfully created'))
    
}

// TODO: Create a function to initialize app
//Created this function with help from the Xpert learning
//TO DO: comment on this function works ***********************
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile(markdown)
    })
}

// Function call to initialize app
init();
