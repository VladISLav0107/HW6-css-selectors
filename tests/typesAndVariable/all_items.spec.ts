import { test, expect } from '@playwright/test';

const baseUrl = "https://coffee-cart.app/";

test('All menu items are visible', async ({ page }) => {
  await page.goto(baseUrl);

  const espressoLocator = page.locator('[aria-label="Espresso"]');
  const macchiatoLocator = page.getByTestId('Espresso_Macchiato');
  const cappuccinoLocator = page.locator('[aria-label="Cappuccino"]');
  const mochaLocator = page.getByTestId('Mocha');
  const fwLocator = page.locator('[aria-label="Flat White"]');
  const americanoLocator = page.getByTestId('Americano');
  const latteLocator = page.locator('[aria-label="Cafe Latte"]');
  const pannaLocator = page.getByTestId('Espresso_Con Panna');
  const braveLocator = page.locator('[aria-label="Cafe Breve"]');


  await expect(espressoLocator).toContainText('espresso');
  await expect(macchiatoLocator).toBeVisible();
  await expect(cappuccinoLocator).toBeVisible();
  await expect(mochaLocator).toBeVisible();
  await expect(fwLocator).toBeVisible();
  await expect(americanoLocator).toBeVisible();
  await expect(latteLocator).toBeVisible();
  await expect(pannaLocator).toBeVisible();
  await expect(braveLocator).toBeVisible();
});

