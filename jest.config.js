module.exports = {
    verbose: true,
    modulePaths: ['<rootDir>/src/'],
    collectCoverageFrom: ['src/**/*.js'],
    testMatch: ['<rootDir>/__tests__/*/*.js'],
    testURL: 'http://localhost',
    testPathIgnorePatterns: ['node_modules', '.cache'],
    transformIgnorePatterns: [
        '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts|tsx)$'
    ],
    moduleFileExtensions: ['js', 'json'],
    coverageThreshold: {
        global: {
            statements: 80,
            branches: 80,
            functions: 80,
            lines: 80
        }
    },
    transform: {
        '^.+\\.js$': 'babel-jest'
    }
};
