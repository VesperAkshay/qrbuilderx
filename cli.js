// cli.js
const generateQRCode = require('./generator');

if (process.argv.length < 5) {
    console.error('Usage: node cli.js <type> <data> <filename>');
    process.exit(1);
}

const [, , type, data, fileName] = process.argv;
generateQRCode(type, data, fileName);
