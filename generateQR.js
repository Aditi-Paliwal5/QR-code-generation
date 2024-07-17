const QRCode = require('qrcode');
const fs = require('fs');

// The data you want to encode in the QR code
const data = 'Hello, this is some info to store in the QR code';

// Generate QR code and save as PNG file
QRCode.toFile('qrcode.png', data, function (err) {
  if (err) {
    console.error('Error generating QR code:', err);
  } else {
    console.log('QR code saved as qrcode.png');
  }
});

// If you want to generate the QR code as a data URL and print it
QRCode.toDataURL(data, function (err, url) {
  if (err) {
    console.error('Error generating QR code:', err);
  } else {
    console.log('QR code data URL:', url);
  }
});
