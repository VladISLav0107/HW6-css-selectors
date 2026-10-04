import { test, expect } from '@playwright/test';

const baseUrl = "https://coffee-cart.app/";

test('Delete order', async ({ page }) => {
  await page.goto(baseUrl);

  const espressoLocator = page.getByTestId('Espresso');
  const cartPageLink = page.getByRole('link', { name: 'Cart page' });
  const payButton = page.locator('button.pay');
  const deleteButton = page.locator('button.delete');
  const emptyOrderListLocator = page.locator('.list p:has-text("No coffee, go add some.")');

  await espressoLocator.click();

  await cartPageLink.click();
  
  await expect(
    payButton
  ).toBeVisible();
  
  await deleteButton.click();
  await expect(emptyOrderListLocator).toBeVisible();
});