const fs = require('fs');
const path = require('path');
const src = '/home/cloudsek/.gemini/antigravity/brain/ebe9a729-962d-4fd8-83e1-8ad239a19d28';
const dst = path.join(__dirname, 'public', 'images');
fs.copyFileSync(path.join(src, 'cripa_logo_1780214300060.png'), path.join(dst, 'logo.png'));
console.log('Logo copied!');
