import { test, expect } from "@playwright/test";

test("login page has form", async ({ page }) => {
  await page.goto("/login");

  await expect(page.getByPlaceholder("Email")).toBeVisible();
  await expect(page.getByPlaceholder("Пароль")).toBeVisible();
  await expect(page.getByText("Увійти")).toBeVisible();
});