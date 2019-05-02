#!/usr/bin/env node

const packager = require('electron-packager')
const snap = require('electron-installer-snap')

packager({ dir: '.', overwrite: true, out: '/root/out', tmpdir: false })
  .then(paths => snap({ src: paths[0] }))
  .catch(err => {
    console.error(`FAIL: ${err.message || err}`)
    process.exit(1)
  })
