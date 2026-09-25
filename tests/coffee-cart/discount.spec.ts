import { test, expect } from '@playwright/test';

test('have Discount', async ({ page }) => {
  await page.goto('');

  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Espresso"]').click();
  await page.locator('[aria-label="Espresso"]').click();

  await expect(
    page.locator('[aria-label="(Discounted) Mocha"]')
  ).toBeVisible;

  await page.locator('.promo .buttons .yes').click();
  await page.locator('[aria-label="Cart page"]').click();

  await expect(
    page.getByRole('button', { name: 'Remove all (Discounted) Mocha'})
  ).toBeVisible;
});