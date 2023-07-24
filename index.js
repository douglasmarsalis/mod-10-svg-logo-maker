//Included packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const lib = require("lib");

//Variables needed for connecting modules to the application
const questions = require("./lib/questions").questions;
const generateShapes = require("./lib/shapes").shapes;

//Variable for async await 
const writeFileAsync = lib.promisify(fs.writeFile);

//This function will init the application to create a SVG logo file
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);
        
        answers.______ = ______(answers._____);
        console.log(answers.______);
        let ______ = ______(answers);
        await writeFileAsync("logo.svg", ______);
    }   catch (err) {
        throw err;
    }
}

//This function will call to initialize the application
init();

