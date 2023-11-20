// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//I did learn about the format to link my github through stackoverflow
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  ${data.tableOfContents}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is ${data.license} licensed.

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, my GitHub username is [GitHub](https://github.com/${data.github}). Or, E-mail me at ${data.email}.
`;
}

module.exports = generateMarkdown;
