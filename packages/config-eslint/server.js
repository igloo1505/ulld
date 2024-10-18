const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use server side
 * typescript packages.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
    extends: [
        "@vercel/style-guide/eslint/node",
        "@vercel/style-guide/eslint/typescript",
    ].map(require.resolve),
    parserOptions: {
        project,
    },
    env: {
        node: true,
        es6: true,
    },
    plugins: ["only-warn", "eslint-plugin-tsdoc"],
    settings: {
        "import/resolver": {
            typescript: {
                project,
            },
        },
    },
    overrides: [
        {
            files: ["**/__tests__/**/*"],
            env: {
                jest: true,
            },
        },
    ],
    ignorePatterns: ["node_modules/", "dist/", "tsup.config.ts"],
    // add rules configurations here
    rules: {
        "import/no-default-export": "off",
        "unicorn/filename-case": "off",
        "unicorn/prefer-node-protocol": "off",
    },
};
