//fs module provides interaction with file system
const fs = require("fs");

//inquirer module prompts the user
const inquirer = require("inquirer");

//util module provides function to print formatted strings and
//some utility functions for debugging purpose
const util = require("util");

//util.promisify allows us to convert I/O functions
//that return callback into I/O functions
const writeFileAsync = util.promisify(fs.writeFile);

//generateMarkdown module to create markdown document
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
const promptUser = () => {
     return inquirer.prompt(questions);
};

// function to write README file
function writeToFile(fileName, data) {
     return writeFileAsync(fileName, data, (err) => {
          if (err) console.log(err);
     });
}

// function to initialize program
const init = async () => {
     //try block
     try {
          //store user's response in answers constant
          const answers = await promptUser();

          //store markdown document in readMe constant
          const readMe = generateMarkdown(answers);

          //write the readMe document to README.md file
          await writeToFile("README.md", readMe);

          //print the message to user on successful creation of README.md file
          console.log("README.md generated successfully");
     } catch (err) {
          //catch block to log the error if occured
          console.log(err);
     }
};

// function call to initialize program
init();
