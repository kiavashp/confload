'use strict';

const fs = require('fs');
const path = require('path');
const assetFiles = fs.readdirSync(__dirname);
const assets = {};

for (let f in assetFiles) {
    let file = assetFiles[f];
    assets[file] = path.join(__dirname, file);
}

module.exports = assets;
