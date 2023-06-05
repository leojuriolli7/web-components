import fs from 'fs'
import { exec } from 'child_process'

/**
 * This script is used to release an alpha version of the
 * web-components library with a custom tag.
 *
 * `pnpm release:alpha --tag=<tag name>`
 *
 * It will:
 * 1. Build the library.
 * 2. Publish the library to npm with the specified tag.
 */

const pkgJsonPath = 'src/package.json'

const usage = () => {
  console.log(
    'Please supply a tag name. Usage: `pnpm release:alpha --tag=<tag name>`'
  )

  process.exit(1)
}

const tagName = process?.argv?.[2]?.split('=')?.[1]

try {
  if (!tagName) {
    usage()
  }

  exec('pnpm build', (err, stdout) => {
    if (err) {
      console.log('Build error:', err)
      process.exit(1)
    }

    console.log(stdout)

    exec(`pnpm changeset version --snapshot ${tagName}`, (err, stdout) => {
      if (err) {
        console.log('Changeset error:', err)
        process.exit(1)
      }

      console.log(stdout)

      exec(
        `pnpm changeset publish --no-git-tag --tag ${tagName}`,
        (err, stdout) => {
          if (err) {
            console.log('Publish error:', err)
            process.exit(1)
          }

          console.log(stdout)

          console.log('Released alpha version with tag name:', tagName)

          console.log(
            `You can install it with:`,
            `yarn add @juriolli/web-components@${tagName}`
          )
        }
      )
    })
  })
} catch (error) {
  console.error(error)
  process.exit(1)
}
