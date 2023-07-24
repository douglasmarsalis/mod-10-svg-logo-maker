//User will input answers to the questions so that a logo can be created, this is a data array
const questions = [
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like?',
        choices: [
            'Circle', 'Square', 'Triangle', 'Heart', 'Rectangle', 'Oval', 'Hexagon'
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

//This function will check to make sure that charaters entered are 3 characters or less
//Also will announce an error if not.  Will then create file logo.svg.
.then((answers) => {
    if(answers.text.length > 3) {
        console.log("Sorry, please enter no more than 3 characters!");
        questions();
    }   else {
        writeToFile("logo.svg", answers);
    }
});

module.exports = {
    questions: questions,
};