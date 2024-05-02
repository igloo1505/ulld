module.exports = {
  // ...require("@repo/jest-presets/node"),
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: ".",
  moduleNameMapper: {
    "\\.module\\.css$": "identity-obj-proxy",
  },
  modulePathIgnorePatterns: [
        "<rootDir>/build/",
        "<rootDir>/dist/"
    ],
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
