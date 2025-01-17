const fs = require('fs');

function generateSVG(shapeInstance, text, textColor) {
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeInstance.render()}
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">
                ${text}
            </text>
        </svg>
    `.trim();

    try {
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg successfully.');
    } catch (error) {
        console.error('Error generating logo.svg:', error);
    }
}

module.exports = generateSVG;