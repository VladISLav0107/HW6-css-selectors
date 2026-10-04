import { test, expect } from '@playwright/test';

test('Check the operation of the cheque boxes – increase in number', async ({ page }) => {
  await page.goto('');


  await page.locator('//input[@data-testid="interactions-row-select-1"]').check();
  await page.locator('//input[@data-testid="interactions-row-select-2"]').check();
  await page.locator('//input[@data-testid="interactions-row-select-3"]').check();
  await page.locator('//input[@data-testid="interactions-row-select-4"]').check();

  await expect(
    page.locator('//span[@data-testid="interactions-selected-count"]')
  ).toContainText('Вибрано: 4');
});


test('Sorting and reordering', async ({ page }) => {
  await page.goto('');

  await page.locator('//button[@data-testid="interactions-sort-name"]').dblclick();

  await expect( 
    page.locator('(//tr[starts-with(@data-testid, "interactions-table-row-")])[1]')
  ).toHaveAttribute("data-testid", "interactions-table-row-1");

  await page.locator('//button[@data-testid="interactions-sort-status"]').click();

  await expect(
    page.locator('(//tr[starts-with(@data-testid, "interactions-table-row-")])[1]')
  ).toHaveAttribute("data-testid", "interactions-table-row-2")

  await page.locator('//button[@data-testid="interactions-sort-duration"]').click();
  
  await expect(
    page.locator('(//tr[starts-with(@data-testid, "interactions-table-row-")])[1]')
  ).toHaveAttribute("data-testid", "interactions-table-row-4");
});
