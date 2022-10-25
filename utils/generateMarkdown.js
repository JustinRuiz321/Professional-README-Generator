// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license === "APACHE LICENSE 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
    } else if (license === "BSD 3-CLAUSE") {
        return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
    } else if(license === "BSD 2-CLAUSE") {
        return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]";
    } else if (license === "GNU GENERAL PUBLIC LICENSE") {
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    } else if (license === "MIT LICENSE") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license === "MOZILLA PUBLIC LICENSE 2.0") {
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
    } else {
        return "N/A";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if(license === "APACHE LICENSE 2.0") {
        return "(https://opensource.org/licenses/Apache-2.0)";
    } else if (license === "BSD 3-CLAUSE") {
        return "(https://opensource.org/licenses/BSD-3-Clause)";
    } else if(license === "BSD 2-CLAUSE") {
        return "(https://opensource.org/licenses/BSD-2-Clause)";
    } else if (license === "GNU GENERAL PUBLIC LICENSE") {
        return "(https://opensource.org/licenses/gpl-license)";
    } else if (license === "MIT LICENSE") {
        return "(https://opensource.org/licenses/MIT)";
    } else if (license === "MOZILLA PUBLIC LICENSE 2.0") {
        return "(https://opensource.org/licenses/MPL-2.0)";
    } else {
        return "N/A";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log(data, "generateMarkdown data")
  return `# ${data.projectTitle}

  ## Project Description
 ${data.projectDescription}

 ## Project Installs
 ${data.projectInstalls}

 ## Project Instructions
 ${data.projectInstructions}

 ## Project License
 ${renderLicenseBadge(data.projectLicense)}
 ${renderLicenseLink(data.projectLicense)}

 ## Project Guidlines
 ${data.projectGuidlines}

 ## Project Testing
 ${data.projectTesting}

 ## Email
 ${data.developerEmail}

 ## Github Account
 ${data.githubAccount}
`;
}

module.exports = generateMarkdown;
