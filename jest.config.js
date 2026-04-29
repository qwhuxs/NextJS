const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jsdom",

  testPathIgnorePatterns: ["/node_modules/", "/e2e/"],

  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  coverageThreshold: {
    global: {
      branches: 20,
      functions: 20,
      lines: 20,
      statements: 20,
    },
  },
};

module.exports = createJestConfig(customJestConfig);