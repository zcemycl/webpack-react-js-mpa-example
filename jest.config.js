module.exports = {
    transform: {
      "^.+\\.(js|jsx)$": "babel-jest",
      "\\.ts$": ['ts-jest']
    },
    verbose: true,
    // testEnvironment: 'node',
    // transformIgnorePatterns: ['<rootDir>/node_modules/'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testEnvironment: 'jsdom',
    preset: 'jest-puppeteer'
  };