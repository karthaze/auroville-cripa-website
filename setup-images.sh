#!/bin/bash
SRC="/home/cloudsek/.gemini/antigravity/brain/ebe9a729-962d-4fd8-83e1-8ad239a19d28"
DST="/home/cloudsek/Desktop/auroville/cripa-website/public/images"

cp "$SRC/hero_background_1780210588963.png" "$DST/hero-bg.png"
cp "$SRC/production_tempest_1780210604648.png" "$DST/production-tempest.png"
cp "$SRC/production_godot_1780210619241.png" "$DST/production-godot.png"
cp "$SRC/production_milarepa_1780210800243.png" "$DST/production-milarepa.png"
cp "$SRC/production_sacrifice_1780210812368.png" "$DST/production-sacrifice.png"
cp "$SRC/gallery_auroville_1780210828831.png" "$DST/gallery-auroville.png"
cp "$SRC/gallery_rehearsal_1780210847678.png" "$DST/gallery-rehearsal.png"
cp "$SRC/philosophy_bg_1780210862383.png" "$DST/philosophy-bg.png"
cp "$SRC/gallery_stage_1780210877436.png" "$DST/gallery-stage.png"

echo "All images copied!"
ls -la "$DST"
