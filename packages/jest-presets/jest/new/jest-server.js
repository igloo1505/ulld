module.exports = {
    ...require("./jest-common"),
    testEnvironment: 'node',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: [
        'js',
        'ts',
        'json'
    ],
    transform: {
        '^.+\\.tsx?$': 'esbuild-jest',
        '^.+\\.jsx?$': 'esbuild-jest',
    },
    coveragePathIgnorePatterns: [],
    collectCoverageFrom: ['./src/**/*.{ts,js}'],
    coverageThreshold: null
}
