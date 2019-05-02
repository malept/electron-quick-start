#!/usr/bin/env node

const packager = require('electron-packager')
const snap = require('electron-installer-snap')

packager({ dir: '.', overwrite: true, out: '/root/out' })
  .then(paths => snap({ src: paths[0] }))
