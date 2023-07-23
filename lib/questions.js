//User will input answers to the questions so that a logo can be created, this is a data array
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: [
            'Circle', 'Square', 'Triangle', 'Star', 'Heart', 'Rectangle', 'Oval', 'Hexagon'
        ],
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please choose a (hexadecimal) color for the shape.', 
    },

    {
        type: 'input',
        name: 'text',
        message: 'What text would you like? You may enter 1-3 characters ONLY.',
    },

    {
        type: 'input',
        name: 'textColor',
        message: 'Please choose a (hexadecimal) color for the text.'
    },
];

module.exports = {
    questions: questions,
};