import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",

  retries: 2,

  use: {
    baseURL: "http://localhost:3000",
    headless: true,
  },
});