const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
     {
          type: "input",
          name: "title",
          message: "What is the name of  your project?",
     },
     {
          type: "input",
          name: "description",
          message: "Please enter description of project?",
     },
     {
          type: "input",
          name: "installation",
          message: "What are the installation instructions for this project?",
     },
     {
          type: "input",
          name: "usage",
          message: "How would you like your applicatio to be used?",
     },
     {
          type: "checkbox",
          name: "license",
          message: "please select license.",
          choices: ["Apache", "MIT", "ISC", "GNU GPLv3"],
     },
     {
          type: "input",
          name: "contribution",
          message: "Who contibuted on this project?",
     },
     {
          type: "input",
          name: "test",
          message: "What are the test instructions?",
     },
     {
          type: "input",
          name: "email",
          message: "What is your e-mail address?",
     },
];

//function prompts to user
function promptUser() {
     return inquirer.prompt(questions);
}

// function to write README file
async function writeToFile(fileName, data) {
     await writeFileAsync(fileName, data, (err) => {
          if (err) console.log(err);
     });
}

// function to initialize program
async function init() {
     try {
          const answers = await promptUser();
          const readMe = generateMarkdown(answers);
          await writeFileAsync("README.md", readMe);
          console.log("README.me generated successfully");
     } catch (err) {
          console.log(err);
     }
}

// function call to initialize program
init();
