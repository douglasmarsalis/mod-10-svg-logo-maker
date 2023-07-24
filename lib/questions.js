const { Rectangle } = require("./shapes");

//User will input answers to the questions so that a logo can be created, this is a data array
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: [
            'Circle', 'Square', 'Triangle'
        ],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please choose a (hexadecimal) color for the shape. visit: https://www.w3schools.com/colors/colors_picker.asp', 
        validate: function (color) {
            colorCheck(color) || "Please enter a valid hexadecimal color!"
        },
    },

    {
        type: 'input',
        name: 'text',
        message: 'What text would you like? You may enter 1-3 characters ONLY.',
        validate: function(text) {
            text.length <= 3 || "Sorry, please enter no more than 3 characters!"
        },
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a (hexadecimal) color for the text. visit: https://www.w3schools.com/colors/colors_picker.asp',
        validate: function(color) {
            colorCheck(color) || "Please enter a valid hexadecimal color!"
        },
    },
];

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
  return valid;  
};

module.exports = questions;