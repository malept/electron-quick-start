#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const copyFilterPath = path.join(__dirname, 'node_modules', 'electron-packager', 'src', 'copy-filter.js')
const contents = fs.readFileSync(copyFilterPath).toString()

const functionStart = 'filterByRegexes (file) {';
fs.writeFileSync(copyFilterPath, contents.replace(functionStart, `${functionStart} debug(file)`))
