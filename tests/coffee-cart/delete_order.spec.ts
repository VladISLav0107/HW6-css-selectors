import { test, expect } from '@playwright/test';

test('Delete order', async ({ page }) => {
  await page.goto('');

  await page.getByTestId('Espresso').click();

  //await page.getByRole('link', { name: 'Cart page' }).click();
  await page.locator('[aria-label="Cart page"]').click();
  // await page.getByLabel('Cart page').click();
  
  await expect(
    page.locator('button.pay')
  ).toBeVisible();
  
  await page.locator('button.delete').click();
  
  await expect(
    page.locator('.list p:has-text("No coffee, go add some.")')
  ).toBeVisible();
});