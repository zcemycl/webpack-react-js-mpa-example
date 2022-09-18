module.exports = {
    roots: ['<rootDir>'],
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      // "\\.ts$": ['ts-jest']
    },
    collectCoverageFrom: [
      '<rootDir>/src/**/*.{js,jsx}'
    ],
    verbose: true,
    // testEnvironment: 'node',
    // transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
    preset: 'jest-puppeteer', 
    "setupFilesAfterEnv": [
      "jest-puppeteer-istanbul/lib/setup"
    ],
};