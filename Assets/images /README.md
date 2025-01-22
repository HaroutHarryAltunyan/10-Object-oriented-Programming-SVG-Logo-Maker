# SVG Logo Maker

## Description

The SVG Logo Maker is a Node.js command-line application designed for freelance web developers and anyone in need of a simple logo. This tool generates SVG logo files based on user input, providing a quick and cost-effective alternative to hiring a graphic designer.

## Screenshot

## Features
	•	Generate an SVG logo based on user input.
	•	Select logo text (up to 3 characters) and its color.
	•	Choose a shape (circle, triangle, or square) and its color.
	•	Save the logo as a .svg file.
	•	Open the generated logo in any browser to view a 300x200 pixel SVG image.

## User Story  

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

## Installation

	1.	Clone the repository:

        git clone <repository-url>

    2.	Navigate to the project directory:

        cd svg-logo-maker

    3.	Install dependencies:

        npm install

## Usage  

    1.	Run the application:

        node index.js

    2.	Follow the prompts to:
	    •	Enter up to 3 characters for the logo text.
	    •	Choose a text color (e.g., color name or hex value).
	    •	Select a shape (circle, triangle, or square).
	    •	Choose a shape color (e.g., color name or hex value).
	    3.	View the generated SVG file named logo.svg in the project directory.

## Walkthrough Video

Click here to watch the walkthrough video.

This video demonstrates:
	•	Application setup and execution.
	•	Responding to user prompts.
	•	Generating a logo SVG file.
	•	Viewing the SVG file in a browser.
	•	Passing unit tests using Jest.

## Directory Structure

.
├── examples/           // Example SVG files created with the app
├── lib/                // Classes and supporting functions
    ├── shapes.js       // Triangle, Circle, and Square classes
    ├── shapes.test.js  // Jest tests for shapes
├── .gitignore          // Git ignore file
├── index.js            // Main application file
├── package.json        // Project configuration and dependencies
└── README.md           // Project description and usage instructions

## Tests

This application uses Jest for unit testing.

### Running Tests

Run the following command to execute tests:

npm test

Example test for the Triangle class:

const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

### Technologies Used

	•	Node.js: Back-end runtime environment.
	•	Inquirer: Collect user input from the command line.
	•	Jest: Unit testing framework.
	•	SVG: Scalable Vector Graphics for logo creation.

### Example Output

Example of a generated SVG file with:
	•	Text: SVG
	•	Text Color: white
	•	Shape: circle
	•	Shape Color: green

    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="150" cy="100" r="80" fill="green" />
  <text x="150" y="120" font-size="40" text-anchor="middle" fill="white">SVG</text>
</svg>

### License

This project is licensed under the MIT License.