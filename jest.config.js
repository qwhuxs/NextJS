/** @type {import('jest').Config} */
const config = {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],

  coverageThreshold: {
    global: {
      branches: 40,
      functions: 40,
      lines: 40,
      statements: 40,
    },
  },
};

module.exports = config;