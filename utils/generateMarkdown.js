// function to generate markdown for README
function generateMarkdown(data) {
     return `# ${data.title}

     ## Description:

       ${data.description}

     #Table of Contents
     
     - [Installation](#installation) 
     - [Usage](#usage) 
     - [License](#license)
     - [Contributing](#contributing)
     - [Tests])(#test) 
     - [Questions](#questions)

     ## Installation:
        ${data.installation}
     ## Usage:
        ${data.usage}
     ## License:
     ![License](https://img.shields.io/badge/License-${data.license}-blue.svg "License Badge")
     ## Contributing:
        ${data.contribution}
     ## Tests:
        ${data.test}
     ## Questions:
        For additional information about README generator you can go to my GitHub page at the
        following link:

     - [GitHub profile](https://github.com${data.username})

     For additional information please reach me at ${data.email}

`;
}

module.exports = generateMarkdown;
