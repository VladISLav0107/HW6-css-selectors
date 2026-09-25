import { test, expect } from '@playwright/test';

test('Price Change for a discount item', async ({ page }) => {
  await page.goto('');

  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Espresso"]').click();

  await expect(
    page.locator('.promo')
  ).toBeVisible();

  await page.locator('.promo .buttons .yes').click();
  await page.locator('[aria-label="Cart page"]').click();
  await page.locator('[aria-label="Remove all Espresso"]').click();
  
  await expect(
    page.locator('button.delete[aria-label="Remove all (Discounted) Mocha"]')
  ).toBeVisible();
});

test('buy discount item', async ({ page }) => {
  await page.goto('');

  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Espresso"]').click();

  await page.locator('.promo .buttons .yes').click();
  await page.locator('[aria-label="Cart page"]').click();
  await page.locator('[aria-label="Remove all Espresso"]').click();
  
  await page.locator('button.pay').click();
  await page.locator('input#name').fill('test');
  await page.locator('input#email').fill('test@test.com');
  
  await expect(
    page.locator('input#name')
  ).toHaveValue('test');
  
  await expect(
    page.locator('input#email')
  ).toHaveValue('test@test.com');
  
  await page.locator('button[type="submit"]').click();
  await expect(page.locator('.snackbar.success')).toBeVisible();
})