import fs from "fs";
import { exec } from "child_process";

/**
 * This script is used to release an alpha version of the
 * web-components library with a custom tag.
 *
 * `pnpm release:alpha --tag=<tag name>`
 *
 * It will:
 * 1. Update the version in package.json to a new alpha version.
 * 2. Build the library.
 * 3. Publish the library to npm with the specified tag.
 */

// TO-DO: Proper versioning on alpha and subsequent alpha releases.
// Alpha releases are overwriting patch changes (0.0.2 -> (...alphas) -> 0.0.6)

const pkgJsonPath = "src/package.json";

const usage = () => {
  console.log(
    "Please supply a tag name. Usage: `pnpm release:alpha --tag=<tag name>`"
  );

  process.exit(1);
};

const tagName = process?.argv?.[2]?.split("=")?.[1];

try {
  if (!tagName) {
    usage();
  }

  exec("git rev-parse --short HEAD", (err, stdout) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    const commitHash = stdout.trim();

    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, "utf-8"));
    const oldVersion = pkg.version;
    const [major, minor, patch] = oldVersion.split(".");

    const patchValue = patch.split("-")[0];

    const newVersion = `${Number(major)}.${Number(minor)}.${
      Number(patchValue) + 1
    }-${tagName}.${commitHash}`;

    pkg.version = newVersion;

    const content = JSON.stringify(pkg, null, "\t") + "\n";
    const newContent = content.replace(
      new RegExp(`"@juriolli/\\*": "${oldVersion}"`, "g"),
      `"@juriolli/*": "${newVersion}"`
    );

    fs.writeFileSync(pkgJsonPath, newContent);

    console.log("Releasing alpha version with tag name:", tagName);

    exec("pnpm build", (err, stdout) => {
      if (err) {
        console.log("Build error:", err);
        process.exit(1);
      }

      console.log(stdout);

      exec(
        `pnpm publish ./src --access public --tag ${tagName} --no-git-checks`,
        (err, stdout) => {
          if (err) {
            console.log("Publish error:", err);
            process.exit(1);
          }

          console.log(stdout);
        }
      );
    });
  });
} catch (error) {
  console.error(error);
  process.exit(1);
}
