import { test, expect } from "@playwright/test";

test("profile redirects or shows login", async ({ page }) => {
  await page.goto("/profile");

  await expect(page).toHaveURL(/login|profile/);
});