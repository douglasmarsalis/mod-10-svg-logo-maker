const { Rectangle } = require("./shapes");

//User will input answers to the questions so that a logo can be created, this is a data array
//User can visit https://www.w3schools.com/colors/colors_picker.asp to help them choose a color
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
    },

    {
        type: 'input',
        name: 'text',
        message: 'What text would you like? You may enter 1-3 characters ONLY.',
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a (hexadecimal) color for the text. visit: https://www.w3schools.com/colors/colors_picker.asp',
    },
];

module.exports = questions;