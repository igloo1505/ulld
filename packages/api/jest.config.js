module.exports = {
  // ...require("@repo/jest-presets/node"),
  // preset: "esbuild-jest",
  testEnvironment: "jsdom",
  rootDir: ".",
  // moduleNameMapper: {
  //   "\\.module\\.css$": "identity-obj-proxy",
  // },

  testPathIgnorePatterns: ["fixtures"],
  setupFilesAfterEnv: ["./jest.setup.ts"],
  setupFiles: ["./setupTests.js"],
  moduleFileExtensions: ["js", "ts", "jsx", "tsx", "mjs", "json"],
  transform: {
    // "(next-mdx-remote|bail|trough|vfile|vfile-message|unist-util-stringify-position|remark-mdx|estree-util-visit|decode-named-character-reference|character-entities|ccount)/.+\\.(j|t)sx?$": "ts-jest",
    "\\.m?[jt]sx?$": [
      "esbuild-jest",
      {
        sourcemap: true,
        loaders: {
          ".mjs": "jsx",
        },
      },
    ],
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@mdx-js|rehype-video|emoticon|rehype-slug|rehype-parse|github-slugger|rehype-autolink-headings|shiki|@shiki|rehype-pretty-code|whatwg-url|hastscript|next-mdx-remote|remark-math|longest-streak|escape-string-regexp|markdown-table|rehype-mathjax|web-namespaces|unist-|devlop|unified|bail|is-plain-obj|trough|vfile|remark-|micromark-|micromark|estree-util-|parse-entities|character-entities|mdast-util-|character-reference-invalid|is-|stringify-entities|periscopic|hast-util-|comma-separated-tokens|property-information|space-separated-tokens|zwitch|ccount|decode-named-character-reference|trim-lines))",
  ],
  modulePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/dist/"],
  moduleNameMapper: {
    "next-mdx-remote/serialize": "<rootDir>/mocks/useless.js",
    "rehype-pretty-code": "<rootDir>/../../node_modules/rehype-pretty-code/dist/index.js",
    "remark-emoji": "<rootDir>/../../node_modules/remark-emoji/index.js",
  },
  // collectCoverageFrom: ['./src/**/*.{ts,js,tsx,jsx}'],
  reporters: [
    "default",
    [
      "summary",
      {
        openReport: true,
        darkTheme: true,
      },
    ],
  ],
};
