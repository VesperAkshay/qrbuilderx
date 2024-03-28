// generator.js
const path = require('path');
const fs = require('fs').promises;
const QRCode = require('qrcode');

async function generateQRCode(type, data, fileName, options = {}, outputDir = 'qr_codes') {
    try {
        const outputFolderPath = path.resolve(__dirname, outputDir);
        await fs.mkdir(outputFolderPath, { recursive: true });

        let text = '';
        switch (type.toLowerCase()) {
            case 'text':
                text = data;
                break;
            case 'wifi':
                text = `WIFI:T:WPA;S:${data.ssid};P:${data.password};;`;
                break;
            case 'link':
                text = data.startsWith('http') ? data : `http://${data}`;
                break;
            // Add more cases for other types as needed
            default:
                throw new Error('Invalid QR code type');
        }

        const {
            size = 200,     // Default size is 200x200
            color = {       // Default color is black (#000000)
                dark: '#000000',
                light: '#ffffff'
            },
            errorCorrectionLevel = 'H' // Default error correction level is High
        } = options;

        const qrFilePath = path.join(outputFolderPath, fileName);

        await QRCode.toFile(qrFilePath, text, {
            width: size,
            color: {
                dark: color.dark,
                light: color.light
            },
            errorCorrectionLevel
        });

        console.log(`QR code generated and saved at: ${qrFilePath}`);
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
}

module.exports = generateQRCode;
