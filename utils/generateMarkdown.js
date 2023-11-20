// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const licenseBadge = {
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Apache License 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License (GPL)': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'GNU Lesser General Public License (LGPL)': '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    'BSD 2-Clause License': '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-Clause License': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'Creative Commons Attribution License': '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0)',
    'The Unlicense': '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'ISC License': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    'Boost Software License 1.0': '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://opensource.org/licenses/BSL-1.0)',
    'Eclipse Public License 2.0': '[![License](https://img.shields.io/badge/License-EPL%202.0-red.svg)](https://opensource.org/licenses/EPL-2.0)',
    'None': ''
  }

  return licenseBadge[license];
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLink = {
    'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
    'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License (GPL)': '[GNU GPL](https://www.gnu.org/licenses/gpl-3.0.html)',
    'GNU Lesser General Public License (LGPL)': '[GNU LGPL](https://www.gnu.org/licenses/lgpl-3.0.html)',
    'BSD 2-Clause License': '[BSD 2-Clause License](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-Clause License': '[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)',
    'Mozilla Public License 2.0': '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)',
    'Creative Commons Attribution License': '[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)',
    'The Unlicense': '[The Unlicense](https://opensource.org/licenses/unlicense)',
    'ISC License': '[ISC License](https://opensource.org/licenses/ISC)',
    'Boost Software License 1.0': '[Boost Software License 1.0](https://opensource.org/licenses/BSL-1.0)',
    'Eclipse Public License 2.0': '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)',
    'None': ''
  }

  return licenseLink[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = {
    'MIT License': 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology.',
    'Apache License 2.0': 'The Apache License 2.0 is a permissive free software license written by the Apache Software Foundation.',
    'GNU General Public License (GPL)': 'The GNU General Public License is a series of widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software.',
    'GNU Lesser General Public License (LGPL)': 'The GNU Lesser General Public License is a free software license published by the Free Software Foundation.',
    'BSD 2-Clause License': 'The 2-Clause BSD License is a permissive free software license written by the University of California.',
    'BSD 3-Clause License': 'The 3-Clause BSD License is a permissive free software license written by the University of California.',
    'Mozilla Public License 2.0': 'The Mozilla Public License 2.0 is a free software license written by the Mozilla Foundation.',
    'Creative Commons Attribution License': 'The Creative Commons Attribution 4.0 International License is a widely-used license for creative works.',
    'The Unlicense': 'The Unlicense is a public domain dedication intended to allow for maximum freedom to use, modify, and distribute works.',
    'ISC License': 'The ISC License is a permissive free software license written by the Internet Systems Consortium.',
    'Boost Software License 1.0': 'The Boost Software License is a permissive free software license written by the Boost community.',
    'Eclipse Public License 2.0': 'The Eclipse Public License 2.0 is a free software license written by the Eclipse Foundation.',
    'None': ''
  }
  return licenseSection[license]
}

// TODO: Create a function to generate markdown for README
//I did learn about the format to link my github through stackoverflow
function generateMarkdown(data) {

  const licenseBadge = renderLicenseBadge(data.license)

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  This project is ${data.license} licensed.
  
  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, my GitHub username is [GitHub](https://github.com/${data.github}). Or, E-mail me at ${data.email}.
`;
}

module.exports = generateMarkdown;
