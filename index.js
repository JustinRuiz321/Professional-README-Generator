// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is going to be the name of your Project?'
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'How would you describe your Project?'
    },
    {
        type: 'input',
        name: 'projectInstalls',
        message: 'Which packages would need to be installed for your Project?'
    },
    {
        type: 'input',
        name: 'projectInstructions',
        message: 'How would you describe instructions on how to use your Project'
    },
    {
        type: 'list',
        name: 'projectLicense',
        message: 'Of the following, please choose an open source license. If no answer is provided, Apache will be chosen.',
        choices: ['Apache License 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GNU General Public License', 'MIT License', 'Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'projectGuidlines',
        message: 'If you would like to give another developer the oppurtunity to make any changes to your Project, please provide guidlines here:'
    },
    {
        type: 'input',
        name: 'projectTesting',
        message: 'How is your project being tested?'
    },
    {
        type: 'input',
        name: 'developerEmail',
        message: 'Please enter your email here'
    },
    {
        type: 'input',
        name: 'githubAccount',
        message: 'Please enter your Github account username here'
    }
]);
}

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
    .then((data) => {
 //       data.projectLicense = data.projectLicense.toUpperCase();
        fs.writeFileSync('README.md', generateMarkdown(data))
    })
    .then(() => console.log('Completed README.md file'))
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
