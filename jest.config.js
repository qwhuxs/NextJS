const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],

  testEnvironment: "jsdom",

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

module.exports = createJestConfig(customJestConfig);