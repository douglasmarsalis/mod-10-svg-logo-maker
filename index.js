//Included packages for this application
const fs = require("fs");
const inquirer = require("inquirer");
const lib = require("lib");

//Variables needed for connecting modules to the application
const questions = require("./lib/questions").questions;
const shapesTest = require("./lib/shapes-test").shapesTest;
const generateShapes = require("./lib/shapes").shapes;

//Variable for async await 
const writeFileAsync = lib.promisify(fs.writeFile);

//This function will init the application to create a SVG logo file


