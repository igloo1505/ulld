module.exports = {
    verbose: true,
    transform: {
    "^.+\\.tsx?$": "ts-jest",
    },

    preset: "ts-jest",
    testEnvironment: "node",
    rootDir: ".",
    // moduleNameMapper: {
    //   "\\.module\\.css$": "identity-obj-proxy",
    // },
    modulePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/dist/"],
    // reporters: [
    //   "default",
    //   [
    //     "summary",
    //     {
    //       openReport: true,
    //       darkTheme: true,
    //     },
    //   ],
    // ],
};
