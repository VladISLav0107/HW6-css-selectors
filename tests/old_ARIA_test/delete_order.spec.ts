import { test, expect } from '@playwright/test';

test('Delete order', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso_Macchiato"]').click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('Espresso Macchiato');
  await page.getByRole('button', { name: 'Remove all' }).click();
  await expect(page.getByRole('paragraph')).toContainText('No coffee, go add some.');
});