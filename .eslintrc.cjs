/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: [
      "./example/*/tsconfig.json",
      "./src/tsconfig.json",
      "./docs/tsconfig.json",
    ],
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
  },
  ignorePatterns: [
    "**/dist/**",
    "./scripts/*",
    "**/node_modules/**",
    ".eslintrc.cjs",
    "**/config.*",
  ],
};

module.exports = config;
