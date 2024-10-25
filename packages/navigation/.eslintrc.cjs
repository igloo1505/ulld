/** @type {import("eslint").Linter.Config} */
module.exports = {
    extends: ["@ulld/eslint-config/next.js"],
    parser: "@typescript-eslint/parser",
    ignorePatterns: [
        "@ulld/tailwind/defaultStyles.scss"
    ],
    parserOptions: {
        project: true,
    },
};
