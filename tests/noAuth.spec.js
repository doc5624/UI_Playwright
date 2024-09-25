const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', "doc5623@yandex.ru");

  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');

  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', "11111111");

  // Click [data-testid="login-submit-btn"]
    await page.click('[data-testid="login-submit-btn"]');
    await expect(
      page.locator("[data-testid='login-error-hint']")
    ).toContainText("Вы ввели неправильно логин или пароль.");
});
