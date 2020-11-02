// function to generate markdown for README
function generateMarkdown(data) {
     return `# ${data.title}
## Description:
${data.description}
## TableofContents
- [Installation](#installation) 
- [Usage](#usage) 
- [License](#license)
- [Contributing](#contributing)
- [Tests](#test) 
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
For additional information please reach me at ${data.email}
`;
}

module.exports = generateMarkdown;
