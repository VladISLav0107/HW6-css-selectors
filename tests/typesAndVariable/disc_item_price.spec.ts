import { test, expect } from '@playwright/test';

const baseUrl = "https://coffee-cart.app/";

test('Price Change for a discount item', async ({ page }) => {
  await page.goto(baseUrl);

  const espressoLocator = page.locator('[aria-label="Espresso"]');
  const promoTextLocator = page.locator('.promo');
  const yesButtonLocator = page.locator('.promo .buttons .yes');
  const cartPageLink = page.locator('[aria-label="Cart page"]');
  const removeButtonLocator = page.locator('[aria-label="Remove all Espresso"]');
  const removeDiscountButton = page.getByRole('button', { name: 'Remove all (Discounted) Mocha'});

  await espressoLocator.click();
  await espressoLocator.click();
  await espressoLocator.click();

  await expect( promoTextLocator ).toBeVisible();

  await yesButtonLocator.click();
  await cartPageLink.click();
  await removeButtonLocator.click();
  
  await expect( removeDiscountButton ).toBeVisible();
});

test('buy discount item', async ({ page }) => {
  await page.goto(baseUrl);

  const espressoLocator = page.locator('[aria-label="Espresso"]');
  const yesButtonLocator = page.locator('.promo .buttons .yes');
  const cartPageLink = page.locator('[aria-label="Cart page"]');
  const removeButtonLocator = page.locator('[aria-label="Remove all Espresso"]');
  const payButton = page.locator('button.pay');
  const fieldName = page.locator('input#name');
  const fieldEmail = page.locator('input#email');
  const submitButton = page.locator('button[type="submit"]');
  const successOrderLocator = page.locator('.snackbar.success');

  await espressoLocator.click();
  await espressoLocator.click();
  await espressoLocator.click();

  await yesButtonLocator.click();
  await cartPageLink.click();
  await removeButtonLocator.click();
  
  await payButton.click();
  await fieldName.fill('test');
  await fieldEmail.fill('test@test.com');
  
  await expect( fieldName ).toHaveValue('test');
  await expect( fieldEmail ).toHaveValue('test@test.com');
  
  await submitButton.click();
  await expect(successOrderLocator).toBeVisible();
})