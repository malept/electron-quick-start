const packager = require('electron-packager')

async function main() {
  const paths = await packager({
    dir: __dirname,
    platform: 'darwin',
    arch: 'arm64',
    out: 'out',
    overwrite: true,
    osxSign: {
      /* please fill  me in appropriately */
      hardenedRuntime: true
    },
    osxNotarize: { /* please fill me in appropriately */ }
  })
  console.log(`\n\nSuccessfully built macOS/arm64 package in ${paths[0]}`)
}

main().catch(err => {
  console.error('Electron Packager failed to run:\n')
  console.error(err.message || err)
  console.error()
  process.exit(1)
})
