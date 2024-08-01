/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@ulld/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfigLint.json",
    tsconfigRootDir: __dirname,
  },
};
