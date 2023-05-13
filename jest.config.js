module.exports = {
    automock: false,
    testRegex: '(/test/.*|(\\.|/)(test|spec))\\.(jsx?)$',
    transform: {
        '\\.jsx?$': 'babel-jest',
    },
    setupFiles: ['./tools/unhandled.js'],
    setupFilesAfterEnv: ['./tools/regenerator.js'],
    moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.js'],
    rootDir: __dirname,
    testEnvironment: 'node',
    testPathIgnorePatterns: ['lib/'],
    coveragePathIgnorePatterns: ['lib/'],
    coverageReporters: [
        'json',
        'text',
        'clover',
        ['lcov', { projectRoot: __dirname }],
    ],
};
