import { test, expect } from '@playwright/test';

test('changes theme', async ({ page }) => {
  await page.goto('file:///C:/Users/kitha/code/Practice-Website/index.html');
  const button = page.locator(`button[id = 'themeChange']`);

  await button.click();

  await expect(button).toContainText('Light');

  await button.click();

  await expect(button).toContainText('Dark');
});

test('render responsive design for tablet', async ({ page }) => {
  await page.setViewportSize ({
    width:  820,
    height: 1180,
  });
  await page.goto('file:///C:/Users/kitha/code/Practice-Website/index.html');

  const columnNumber = await page.locator(`div[class = columnList]`).evaluate((e) => {
    return window.getComputedStyle(e).getPropertyValue("column-count")
  });

  await expect(columnNumber).toBe("2");

});

test('render responsive design for mobile', async ({ page }) => {
  await page.setViewportSize ({
    width:  360,
    height: 740,
  });
  await page.goto('file:///C:/Users/kitha/code/Practice-Website/index.html');
  const columnNumber = await page.locator(`div[class = columnList]`).evaluate((e) => {
      return window.getComputedStyle(e).getPropertyValue("column-count")
  });

  await expect(columnNumber).toBe("1");
});

test('returns if string has vowels', async ({ page }) => {
  await page.goto('file:///C:/Users/kitha/code/Practice-Website/index.html');

  await page.locator(`input[name = "textInput"]`).fill('wafflecones');
  await page.locator(`button[name = "submitButton"]`).click();

  await expect(await page.locator(`output[id = "x"]`)).toContainText('true');

  await page.locator(`input[name = "textInput"]`).fill('hccdf');
  await page.locator(`button[name = "submitButton"]`).click();

  await expect(await page.locator(`output[id = "x"]`)).toContainText('false');
});
