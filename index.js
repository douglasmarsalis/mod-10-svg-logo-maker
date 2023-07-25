//Included packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./lib/questions");
const {Triangle, Square, Circle} = require("./lib/shapes");

//Variables needed for connecting modules to the application
//const questions = require("./lib/questions").questions;
//const generateShapes = require("./lib/shapes").shapes;

//Variable for async await 
//const writeFileAsync = lib.promisify(fs.writeFile);

//This function will init the application to create a SVG logo file
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log(answers);

        colorCheck(answers.shapeColor);
        colorCheck(answers.textColor);

        let svgData = JSON.stringify(answers);
        fs.writeFile("logo.svg", svgData, (err) => {
            if (err) throw err;
            console.log('It\'s saved!');
        });
    }   catch (err) {
        throw err;
    }
}

//This function will check to make sure the user enters the correct hexadecimal code
function colorCheck(color) {
    var valid = true
    var hexa = "0123456789abcdefABCDEF";
    if (color[0] === "#") {
        color = color.split("#")[1];
    }
    if (color.length !== 6) {
        valid = false;
    }
    for (let i = 0; i < color.length; i++) {
        if (!hexa.includes(color[i])) {
            valid = false;
        }
    }
    if (!valid) {
        console.log(`${color} is not a valid hexadecimal code!`)
        process.exit();
    }
    
};

//This function will check the character length for the logo.svg
    .then((answers) => {
    function text(length) {
        if (answers.text.length > 3) {
            console.log("Sorry, please enter no more than 3 characters!");
            promptUser();
        }  else {
            fs.writeFile("logo.svg", answers);
        }
        });    
}

//This function will call to initialize the application
init();

