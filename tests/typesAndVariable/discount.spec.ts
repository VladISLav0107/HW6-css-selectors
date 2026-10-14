import { test, expect } from '@playwright/test';
import { addCountedItem, addDiscountItem } from './page-actions';

const baseUrl = "https://coffee-cart.app/";

test('have Discount', async ({ page }) => {
  await page.goto(baseUrl);

  const cartPageLink = page.locator('[aria-label="Cart page"]');
  const removeDiscountButton = page.getByRole('button', { name: 'Remove all (Discounted) Mocha'});

  await addCountedItem(page, 3);
  await addDiscountItem(page);

  await cartPageLink.click();
  await expect( removeDiscountButton ).toBeVisible();
});