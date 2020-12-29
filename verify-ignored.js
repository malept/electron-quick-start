#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const outDir = path.resolve(__dirname, 'out', `electron-quick-start-${process.platform}-${process.arch}`)
const appDir = path.join(outDir, 'resources', 'app')

if (fs.existsSync(path.join(appDir, 'test'))) {
  console.error('ERROR: Root test/ folder should not exist')
  process.exit(1)
}

if (!fs.existsSync(path.join(appDir, 'foo', 'bar', 'test'))) {
  console.error('ERROR: nested test folder should exist')
  process.exit(1)
}

console.log('PASS')
