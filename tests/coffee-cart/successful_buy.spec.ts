import { test, expect } from '@playwright/test';

test('Successful buy', async ({ page }) => {
  await page.goto('');

  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('button.pay').click();

  await expect(
    page.locator('[aria-label="Payment form"]')
  ).toBeVisible();
  
  await page.locator('input#name').fill('test');
  await page.locator('input#email').fill('test@test.com');
  await page.locator('button[type="submit"]').click();
  
  await expect(
    page.locator('.snackbar.success')
  ).toBeVisible();
});