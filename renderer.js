// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const fs = require('fs-extra');
const path = require('path');

fs.readJson(path.join(__dirname, 'folder', 'data.json'))
  .then(data => window.alert(data.key));
