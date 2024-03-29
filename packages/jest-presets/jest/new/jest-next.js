module.exports = {
    ...require("./jest-common"),
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    collectCoverageFrom: ['./src/**/*.{ts,js,tsx,jsx}'],
    moduleFileExtensions: [
        'js',
        'ts',
        'jsx',
        'tsx',
        'json'
    ],
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest',
        '^.+\\.jsx?$': 'esbuild-jest',
    },
    coveragePathIgnorePatterns: [],
    coverageThreshold: null
}
