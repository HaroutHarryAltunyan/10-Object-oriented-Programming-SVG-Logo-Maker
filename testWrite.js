const fs = require('fs');

try {
    fs.writeFileSync('test.svg', '<svg xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="blue"/></svg>');
    console.log('test.svg created successfully.');
} catch (error) {
    console.error('Error creating test.svg:', error);
}