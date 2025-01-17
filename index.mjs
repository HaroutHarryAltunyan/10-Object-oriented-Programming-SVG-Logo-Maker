import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';
import generateSVG from './lib/generateSVG.js';

async function main() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to 3 characters):',
            validate: input => input.length <= 3 || 'Text must be 3 characters or less!',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter a color for the text (keyword or hex code):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Circle', 'Triangle', 'Square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter a color for the shape (keyword or hex code):',
        },
    ]);

    let shapeInstance;
    switch (answers.shape) {
        case 'Circle':
            shapeInstance = new Circle();
            break;
        case 'Triangle':
            shapeInstance = new Triangle();
            break;
        case 'Square':
            shapeInstance = new Square();
            break;
    }

    shapeInstance.setColor(answers.shapeColor);
    generateSVG(shapeInstance, answers.text, answers.textColor);
}

main();