// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'project title',
        message: 'What is going to be the name of your Project?'
    },
    {
        type: 'input',
        name: 'project description',
        message: 'How would you describe your Project?'
    },
    {
        type: 'input',
        name: 'project installs',
        message: 'Which packages would need to be installed for your Project?'
    },
    {
        type: 'input',
        name: 'project instructions',
        message: 'How would you describe instructions on how to use your Project'
    },
    {
        type: 'list',
        name: 'project license',
        message: 'Of the following, please choose an open source license. If no answer is provided, Apache will be chosen.',
        choices: ['Apache License 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU General Public License', 'MIT License', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'project guidlines',
        message: 'If you would like to give another developer the oppurtunity to make any changes to your Project, please provide guidlines here:'
    },
    {
        type: 'input',
        name: 'project testing',
        message: 'How is your project being tested?'
    },
    {
        type: 'input',
        name: 'developer email',
        message: 'Please enter your email here'
    },
    {
        type: 'input',
        name: 'github account',
        message: 'Please enter your Github account username here'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
