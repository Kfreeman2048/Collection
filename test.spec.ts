import { test, expect } from '@playwright/test';

test('changes theme', async ({ page }) => {
  await page.goto('file:///C:/Users/kitha/code/website/index.html');
  const button = page.locator(`button[id = 'themeChange']`);

  await button.click();

  await expect(button).toContainText('Light');

  await button.click();

  await expect(button).toContainText('Dark');
});
