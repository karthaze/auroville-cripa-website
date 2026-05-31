const fs = require('fs');
const path = require('path');
const src = '/home/cloudsek/.gemini/antigravity/brain/ebe9a729-962d-4fd8-83e1-8ad239a19d28';
const dst = path.join(__dirname, 'public', 'images');
const files = {
  'hero_background_1780210588963.png': 'hero-bg.png',
  'production_tempest_1780210604648.png': 'production-tempest.png',
  'production_godot_1780210619241.png': 'production-godot.png',
  'production_milarepa_1780210800243.png': 'production-milarepa.png',
  'production_sacrifice_1780210812368.png': 'production-sacrifice.png',
  'gallery_auroville_1780210828831.png': 'gallery-auroville.png',
  'gallery_rehearsal_1780210847678.png': 'gallery-rehearsal.png',
  'philosophy_bg_1780210862383.png': 'philosophy-bg.png',
  'gallery_stage_1780210877436.png': 'gallery-stage.png',
};
Object.entries(files).forEach(([from, to]) => {
  try {
    fs.copyFileSync(path.join(src, from), path.join(dst, to));
    console.log(`✓ ${to}`);
  } catch(e) { console.error(`✗ ${to}: ${e.message}`); }
});
console.log('Done!');
