import { test, expect } from '@playwright/test';

test('have Discount', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await page.locator('[data-test="Espresso"]').click();
  await expect(page.locator('#app')).toContainText('It\'s your lucky day! Get an extra cup of Mocha for $4.');
  await page.getByRole('button', { name: 'Yes, of course!' }).click();
  await page.getByRole('link', { name: 'Cart page' }).click();
  await expect(page.locator('#app')).toContainText('(Discounted)');
});