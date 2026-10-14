import { test, expect } from '@playwright/test';
import { addCountedItem, deleteAllItems, openBin } from './page-actions';

const baseUrl = "https://coffee-cart.app/";

test('Delete order', async ({ page }) => {
  await page.goto(baseUrl);

  const emptyOrderListLocator = page.locator('.list p:has-text("No coffee, go add some.")');

  await addCountedItem(page, 1);
  await openBin(page);
  await deleteAllItems(page);  

  await expect(emptyOrderListLocator).toBeVisible();
});