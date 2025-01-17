const fs = require('fs');
const path = require('path');

function generateSVG(shapeInstance, text, textColor) {
    const svgContent = `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
            ${shapeInstance.render()}
            <text x="150" y="125" font-size="40" text-anchor="middle" fill="${textColor}">
                ${text}
            </text>
        </svg>
    `.trim();

    // Ensure the assets directory exists
    const outputDir = path.join(__dirname, '../assets');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
        console.log(`Created directory: ${outputDir}`);
    }

    // Write the file
    const filePath = path.join(outputDir, 'logo.svg'); // Save as logo.svg
    try {
        fs.writeFileSync(filePath, svgContent);
        console.log(`Generated SVG file at ${filePath}`);
    } catch (error) {
        console.error('Error generating SVG file:', error);
    }
}

module.exports = generateSVG;