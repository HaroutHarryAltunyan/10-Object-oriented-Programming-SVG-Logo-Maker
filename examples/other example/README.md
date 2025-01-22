# SVG Logo Maker

## Screenshot

![Image showing a blue triangle with red text that reads "SVG."](./Assets/images/Screenshot%202025-01-17%20at%202.19.48%20AM.png)

![Image of walkthrough."](./Assets/images/Screenshot%202025-01-17%20at%2011.07.19%20AM.png)

---

## Description

The SVG Logo Maker is a Node.js command-line application that allows users to generate simple SVG logos based on user input. Users can customize the text, text color, shape, and shape color. The generated SVG is saved to a `.svg` file and can be viewed in any browser.

---

## Features

- Accepts up to three characters of text for the logo.
- Prompts the user to enter a text color using either a color keyword or a hexadecimal value.
- Offers three shapes: circle, triangle, and square.
- Allows the user to specify a color for the shape using either a color keyword or a hexadecimal value.
- Generates a `logo.svg` file based on the user’s input.
- Outputs a message to the command line confirming successful generation.
- Includes Jest tests for validating shape classes.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd svg-logo-maker
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

---

## Usage

1. Run the application:
   ```bash
   node index.js
   ```

2. Follow the prompts to:
   - Enter text for the logo (up to three characters).
   - Specify the text color (color keyword or hexadecimal value).
   - Select a shape (circle, triangle, or square).
   - Specify the shape color (color keyword or hexadecimal value).

3. View the generated `logo.svg` file in your browser or any SVG viewer.

---

## Example Walkthrough

### Example Input
- **Text**: `SVG`
- **Text Color**: `white`
- **Shape**: `circle`
- **Shape Color**: `green`

### Example Output
![Image showing a green circle with white text that reads "SVG."](./Images/10-oop-homework-demo.png)

---

## Tests

The application includes unit tests for the shape classes:

- To run tests:
  ```bash
  npm test
  ```

- Example test case:
  ```javascript
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  ```

---

## File Structure

```plaintext
.  
├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── ...             // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions
```

---

## Walkthrough Video

A walkthrough video demonstrating the application's functionality and passing tests can be found [here](<video-link>).

---

## Sample SVG Files

At least one example SVG file generated using this application is included in the `examples/` directory.

---

## Resources

- [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
- [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
- [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)
- [Inquirer package](https://www.npmjs.com/package/inquirer/v/8.2.4)
- [Jest package](https://www.npmjs.com/package/jest)

---

## Contributions

Contributions are welcome! Please fork the repository and submit a pull request for any updates or improvements.

---

## License

This project is licensed under the MIT License.

