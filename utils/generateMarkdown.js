//Function to generate badges depending on the license selected
//links provided through google searces, and a repository of badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
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

//function to generate Links depending on the license selected
//links provided through google searches and xpert learning
function renderLicenseLink(license) {
  const licenseLink = {
    'Apache License 2.0': '[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)',
    'GNU General Public License v3.0': '[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)',
    'MIT License': '[MIT License](https://opensource.org/licenses/MIT)',
    'BSD 2-Clause "Simplified" License': '[BSD 2-Clause "Simplified" License](https://opensource.org/licenses/BSD-2-Clause)',
    'BSD 3-Clause "New" or "Revised" License': '[BSD 3-Clause "New" or "Revised" License](https://opensource.org/licenses/BSD-3-Clause)',
    'Boost Software License 1.0': '[Boost Software License 1.0](https://opensource.org/licenses/BSL-1.0)',
    'Creative Commons Zero v1.0 Universal': '[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)',
    'Eclipse Public License 2.0': '[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-2.0)',
    'GNU Affero General Public License v3.0': '[GNU Affero General Public License v3.0](https://www.gnu.org/licenses/agpl-3.0)',
    'GNU General Public License v2.0': '[GNU General Public License v2.0](https://www.gnu.org/licenses/gpl-2.0)',
    'Mozilla Public License 2.0': '[Mozilla Public License 2.0](https://opensource.org/licenses/MPL-2.0)',
    'The Unlicense': '[The Unlicense](http://unlicense.org/)',
    'None': ''
  }

  return licenseLink[license];
}

//function to generate the basic description of the licenses
//comments provided through google searches and chatGPT (for time sake in research)
function renderLicenseSection(license) {
  const licenseSection = {
    'Apache License 2.0': 'The Apache License 2.0 is a permissive free software license written by the Apache Software Foundation.',
    'GNU General Public License v3.0': 'The GNU General Public License is a series of widely used free software licenses that guarantee end users the freedom to run, study, share, and modify the software.',
    'MIT License': 'The MIT License is a permissive free software license originating at the Massachusetts Institute of Technology.',
    'BSD 2-Clause "Simplified" License': 'The 2-Clause BSD License is a permissive free software license written by the University of California.',
    'BSD 3-Clause "New" or "Revised" License': 'The 3-Clause BSD License is a permissive free software license written by the University of California.',
    'Boost Software License 1.0': 'The Boost Software License is a permissive free software license written by the Boost community.',
    'Creative Commons Zero v1.0 Universal': 'The Creative Commons Zero v1.0 Universal License is a public domain dedication intended to allow for maximum freedom to use, modify, and distribute works.',
    'Eclipse Public License 2.0': 'The Eclipse Public License 2.0 is a free software license written by the Eclipse Foundation.',
    'GNU Affero General Public License v3.0': 'The GNU Affero General Public License is a free software license published by the Free Software Foundation.',
    'GNU General Public License v2.0': 'The GNU General Public License v2.0 is a widely used free software license.',
    'Mozilla Public License 2.0': 'The Mozilla Public License 2.0 is a free software license written by the Mozilla Foundation.',
    'The Unlicense': 'The Unlicense is a public domain dedication intended to allow for maximum freedom to use, modify, and distribute works.',
    'None': ''
  }
  return licenseSection[license];
}

//function to generate the README
function generateMarkdown(data) {
  
  //based on the selected license, generate the information related to it
  const licenseBadge = renderLicenseBadge(data.license)

  //Generate the README using the information that was input, also creates a static Table of Contents
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
  If you have any questions or comments, my GitHub username is [${data.github}](https://github.com/${data.github}). Or, E-mail me at ${data.email}.
`;
}

module.exports = generateMarkdown;