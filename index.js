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

// Function takes user input and and places it into a string
// Width and height are set for the logo size
// xmlns specifies the xml namespace for a document
// g element is a container element for grouping together related graphic elements
function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
        '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }

//Concantenates the strings to create the logo    
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

//if then to write file for generating the logo    
    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}


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
        if (answers.text.length > 3) {
            console.log("Sorry, please enter no more than 3 characters!");
            promptUser();
        }  else {
            fs.writeFile("logo.svg", answers);
        }
    });    

//This will call to initialize the application
init();

