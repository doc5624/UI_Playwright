const { test, expect } = require("@playwright/test");
const { email, password } = require("../usser");

test("test", async ({ page }) => {
  // Go to https://netology.ru/?modal=sign_in
  await page.goto("https://netology.ru/?modal=sign_in");

  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  await page.pause();

  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', email);
await page.pause();
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
await page.pause();
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', password);
await page.pause();
  // Click [data-testid="login-submit-btn"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/profile/8435054' }*/),
    page.click('[data-testid="login-submit-btn"]'),
  ]);

  await expect(page).toHaveURL("https://netology.ru/profile/8435054");

  // Click [data-testid="profile-programs-content"] >> text=Моё обучение
  await page.click(
    '[data-testid="profile-programs-content"] >> text=Моё обучение'
  );
  await expect(
    page.locator(
      "[class='src-components-pages-Profile-Programs--title--Kw5NH']"
    )
  ).toContainText("Моё обучение");
});
