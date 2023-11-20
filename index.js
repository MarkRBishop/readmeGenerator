//Imports necessary modules/packages
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

//array of question to be used with inquirer
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
    
    //list of licenses to be used, in order that GitHub lists when choosing a license
    {
        type:'list',
        name:'license',
        message:'Choose the license for your project',
        choices:[
            'Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'Mozilla Public License 2.0',
            'The Unlicense',
            'None'
        ]
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

//function to write the data to a file
function writeToFile(fileName, data) {
    //write data to specific file, check for errors, give response when created/or if error is triggered
    fs.writeFile(fileName, data, (err) => err ? console.error(err) :console.log('README has been succesfully created'))
}

//Created this function with help from the Xpert learning
//initialize the application
function init() {
    //Prompt the user with questions
    inquirer.prompt(questions).then((answers) => {
        //set file name
        const fileName = 'README.md';
        //Using the answers from the prompted questions, run the generateMarkdown()
        const markdown = generateMarkdown(answers);
        //write the .md generated to the specific file name
        writeToFile(fileName, markdown)
    })
}

// Function call to initialize the application
init();
