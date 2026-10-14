import type { Page } from "@playwright/test";


export async function openBin(
    page: Page
) {
    const cartPageLink = page.getByRole('link', { name: 'Cart page' });
    await cartPageLink.click();
}

export async function deleteAllItems(
    page: Page) {
    
    const deleteButton = page.locator('button.delete');
    const cartPageLink = page.getByRole('link', { name: 'Cart page' });

    await cartPageLink.click();
    
    while (await deleteButton.count() > 0){
    await deleteButton.first().click();
    }
}

export async function openPaymentForm(
    page: Page) {

    const payButton = page.locator('button.pay');
    await payButton.click();
}

export async function fillPaymentForm(
    page: Page,
    name: string,
    email: string,
) {
    
    const fieldName = page.locator('input#name');
    const fieldEmail = page.locator('input#email');
    const submitButton = page.locator('button[type="submit"]');
      
    await fieldName.fill(name);
    await fieldEmail.fill(email);
    await submitButton.click();
}

export async function addCountedItem(
    page: Page,
    count: number,
) {
    
    const espressoLocator = page.locator('[aria-label="Espresso"]');

    for (let i = 0; i < count; i++){
        await espressoLocator.click();
    }
}

export async function addDiscountItem(
    page: Page
) {  
    const yesButtonLocator = page.locator('.promo .buttons .yes');
    await yesButtonLocator.click();
}


