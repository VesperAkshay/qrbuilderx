# QR Genius

QR Genius is a versatile npm package for generating QR codes with advanced customization options, including custom logo overlay and QR code scanning functionality.

## Features

- Generate QR codes for various data types such as text, URLs, Wi-Fi credentials, and more.
- Customize QR code appearance with options for size, color, and error correction level.
- Overlay custom logos on generated QR codes to enhance branding and recognition.
- Scan QR codes from images to extract data using built-in QR code scanning functionality.

## Installation

To install QR Genius, use npm:

```bash
npm install qrbuilderx
```
## Usage
# Generating QR Codes
```javascript
const qrGenius = require('qr-genius');

// Generate QR code for text
qrGenius.generate('text', 'Hello, World!', 'text_qr_code.png', { size: 300, color: { dark: '#ff0000', light: '#ffffff' }, errorCorrectionLevel: 'H' });

// Generate QR code for a link
qrGenius.generate('link', 'https://www.example.com', 'link_qr_code.png');
```
## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your enhancements.

## License
QR Genius is licensed under the MIT License.
