import { test, expect } from '@playwright/test';
import { addCountedItem, addDiscountItem, fillPaymentForm, openPaymentForm } from './page-actions';

const baseUrl = "https://coffee-cart.app/";

test('Price Change for a discount item', async ({ page }) => {
  await page.goto(baseUrl);

  const cartPageLink = page.locator('[aria-label="Cart page"]');
  const removeButtonLocator = page.locator('[aria-label="Remove all Espresso"]');
  const removeDiscountButton = page.getByRole('button', { name: 'Remove all (Discounted) Mocha'});

  await addCountedItem(page, 3);
  await addDiscountItem(page);

  await cartPageLink.click();
  await removeButtonLocator.click();
  
  await expect( removeDiscountButton ).toBeVisible();
});

test('buy discount item', async ({ page }) => {
  await page.goto(baseUrl);


  const successOrderLocator = page.locator('.snackbar.success');
  const name = 'Test2';
  const email = 'test2@email.com';

  await addCountedItem(page, 3);
  await addDiscountItem(page);

  await openPaymentForm(page);
  await fillPaymentForm(page, name, email);  
  
  await expect(successOrderLocator).toBeVisible();
});