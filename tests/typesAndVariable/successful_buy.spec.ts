import { test, expect } from '@playwright/test';

const baseUrl = "https://coffee-cart.app/";

test('Successful buy', async ({ page }) => {
  await page.goto(baseUrl);

  const espressoLocator = page.locator('[aria-label="Espresso"]');
  const payButton = page.locator('button.pay');
  const paymentForm = page.locator('[aria-label="Payment form"]');
  const fieldName = page.locator('input#name');
  const fieldEmail = page.locator('input#email');
  const submiteButton = page.locator('button[type="submit"]');
  const successOrderLocator = page.locator('.snackbar.success');

  await espressoLocator.click();
  await payButton.click();

  await expect( paymentForm ).toBeVisible();
  
  await fieldName.fill('test');
  await fieldEmail.fill('test@test.com');
  await submiteButton.click();
  
  await expect( successOrderLocator ).toBeVisible();
});