// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

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
        choices:['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL)', 'GNU Lesser General Public License (LGPL)', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'Creative Commons Attribution License', 'The Unlicense', 'ISC License', 'Boost Software License 1.0', 'Eclipse Public License 2.0', 'None']
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
        const fileName = 'README.md';
        const markdown = generateMarkdown(answers);
        writeToFile(fileName, markdown)
    })
}

// Function call to initialize app
init();
