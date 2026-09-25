import { test, expect } from '@playwright/test';

test('All menu items are visible', async ({ page }) => {
  await page.goto('');
  await expect(page.locator('[aria-label="Espresso"]')).toContainText('espresso');
  await expect(page.getByTestId('Espresso_Macchiato')).toBeVisible();
  await expect(page.locator('[aria-label="Cappuccino"]')).toBeVisible();
  await expect(page.getByTestId('Mocha')).toBeVisible();
  await expect(page.locator('[aria-label="Flat White"]')).toBeVisible();
  await expect(page.getByTestId('Americano')).toBeVisible();
  await expect(page.locator('[aria-label="Cafe Latte"]')).toBeVisible();
  await expect(page.getByTestId('Espresso_Con Panna')).toBeVisible();
  await expect(page.locator('[aria-label="Cafe Breve"]')).toBeVisible();
});

