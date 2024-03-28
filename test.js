// test.js
const generateQRCode = require('./generator');


async function testQRCodeGenerator() {
    try {
        // Generate QR code for text
        await generateQRCode('text', 'Hello, World!', 'text_qr_code.png', {}, 'qr_codes');
        console.log('QR code for text generated successfully!');

        // Generate QR code for Wi-Fi
        const wifiData = { ssid: 'MyWiFiNetwork', password: 'MySecretPassword' };
        await generateQRCode('wifi', wifiData, 'wifi_qr_code.png', {}, 'qr_codes');
        console.log('QR code for Wi-Fi generated successfully!');

        // Generate QR code for a link
        await generateQRCode('link', 'https://www.example.com', 'link_qr_code.png', {}, 'qr_codes');
        console.log('QR code for link generated successfully!');
        
        // Add more test cases for other types as needed
    } catch (error) {
        console.error('Error generating QR code:', error);
    }
}

testQRCodeGenerator();
