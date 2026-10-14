import { test, expect } from '@playwright/test';
import { openPaymentForm, fillPaymentForm, addCountedItem } from './page-actions';

const baseUrl = "https://coffee-cart.app/";

test('Successful buy', async ({ page }) => {

  const paymentForm = page.locator('[aria-label="Payment form"]');
  const successOrderLocator = page.locator('.snackbar.success');
  const name = 'Test Name';
  const email = 'test@gmail.com';

  await page.goto(baseUrl);

  await addCountedItem(page, 3);
  await openPaymentForm(page);
  await expect( paymentForm ).toBeVisible();
  
  await fillPaymentForm(page, name, email);
  
  await expect( successOrderLocator ).toBeVisible();
});