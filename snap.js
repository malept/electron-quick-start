#!/usr/bin/env node

const packager = require('electron-packager')
const snap = require('electron-installer-snap')

packager({ dir: '.', overwrite: true, out: '/packager' })
  .then(paths => snap({ src: paths[0] }))
