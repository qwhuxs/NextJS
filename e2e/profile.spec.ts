import { test, expect } from "@playwright/test";

test("unauthorized user sees login option", async ({ page }) => {
  await page.goto("/profile");

  await expect(
    page.getByRole("link", { name: /увійти/i })
  ).toBeVisible();
});