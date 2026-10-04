import { test, expect } from '@playwright/test';

const baseUrl = "https://coffee-cart.app/";

test('have Discount', async ({ page }) => {
  await page.goto(baseUrl);

  const espressoLocator = page.locator('[aria-label="Espresso"]');
  const mochaLocator = page.locator('[aria-label="(Discounted) Mocha"]');
  const yesButtonLocator = page.locator('.promo .buttons .yes');
  const cartPageLink = page.locator('[aria-label="Cart page"]');
  const removeDiscountButton = page.getByRole('button', { name: 'Remove all (Discounted) Mocha'});

  await espressoLocator.click();
  await espressoLocator.click();
  await espressoLocator.click();

  await expect( mochaLocator ).toBeVisible();

  await yesButtonLocator.click();
  await cartPageLink.click();

  await expect( removeDiscountButton ).toBeVisible();
});