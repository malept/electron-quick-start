#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const outDir = path.resolve(__dirname, 'out', `electron-quick-start-${process.platform}-${process.arch}`)

function generateAppDir() {
  if (process.platform === 'darwin') {
    return path.join(outDir, 'electron-quick-start.app', 'Contents', 'Resources', 'app')
  } else {
    return path.join(outDir, 'resources', 'app')
  }
}

const appDir = generateAppDir()
const root = path.join(appDir, 'test')
if (fs.existsSync()) {
  console.error('ERROR: Root test/ folder should not exist', root)
  process.exit(1)
}

const nested = path.join(appDir, 'foo', 'bar', 'test')
if (!fs.existsSync(nested)) {
  console.error('ERROR: nested test folder should exist:', nested)
  process.exit(1)
}

console.log('PASS')
