const fs = require('fs');
const path = require('path');
const src = '/home/cloudsek/.gemini/antigravity/brain/ebe9a729-962d-4fd8-83e1-8ad239a19d28/media__1780209165483.jpg';
const dst = path.join(__dirname, 'public', 'images', 'logo.png');
fs.copyFileSync(src, dst);
console.log('Original logo copied!');
