import { test, expect } from '@playwright/test';

test('All menu items are visible', async ({ page }) => {
  await page.goto('https://coffee-cart.app/');
  await expect(page.locator('#app')).toContainText('Espresso $10.00');
  await expect(page.locator('#app')).toContainText('Espresso Macchiato $12.00');
  await expect(page.locator('#app')).toContainText('Cappuccino $19.00');
  await expect(page.locator('#app')).toContainText('Mocha $8.00');
  await expect(page.locator('#app')).toContainText('Flat White $18.00');
  await expect(page.locator('#app')).toContainText('Americano $7.00');
  await expect(page.locator('#app')).toContainText('Cafe Latte $16.00');
  await expect(page.locator('#app')).toContainText('Espresso Con Panna $14.00');
  await expect(page.locator('#app')).toContainText('Cafe Breve $15.00');
});

//test for pr in git

