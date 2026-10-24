import { test, expect } from '@playwright/test';
import { LoginPage, InventoryPage, CartPage, CheckoutStepOnePage, CheckoutStepTwoPage } from './registration-page';

const baseUrl = "https://www.saucedemo.com/";
const username = 'standard_user';
const password = 'secret_sauce';
const frname = 'First';
const lastname = 'Last';
const zip = '123456';

test.beforeEach(async ({ page }) => {
    await page.goto(baseUrl);

    const loginPage = new LoginPage(page);
    await loginPage.login(username, password);
});

test('Successful login and catalog is shown', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await expect(page).toHaveURL(/inventory/);
    await expect(inventoryPage.getTitle()).toHaveText('Products');
});

test('Added item has correct name and price in cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addToCartByTitle('Sauce Labs Backpack');
    await inventoryPage.openCartLink();

    await expect(cartPage.getNameByTitle('Sauce Labs Backpack')).toHaveText('Sauce Labs Backpack');
    await expect(cartPage.getPriceByTitle('Sauce Labs Backpack')).toHaveText('$29.99');
});

test('Remove item from cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.addToCartByTitle('Sauce Labs Backpack');
    await expect(inventoryPage.getCartBadge()).toHaveText('1');

    await inventoryPage.openCartLink();

    await cartPage.removeFromCartByTitle('Sauce Labs Backpack');
    await expect(cartPage.getCartBadge()).toBeHidden();
});

test('Remove item from catalog', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addToCartByTitle('Sauce Labs Backpack');
    await expect(inventoryPage.getCartBadge()).toHaveText('1');

    await inventoryPage.removeFromCartByTitle('Sauce Labs Backpack');
    await expect(inventoryPage.getCartBadge()).toBeHidden();
});

test('Return from cart to catalog', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);

    await inventoryPage.openCartLink();
    await expect(cartPage.getTitle()).toHaveText('Your Cart');

    await cartPage.continueShopping();
    await expect(inventoryPage.getTitle()).toHaveText('Products');
});

test('Successful checkout', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutStepOnePage = new CheckoutStepOnePage(page);
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page);

    await inventoryPage.addToCartByTitle('Sauce Labs Backpack');
    await inventoryPage.openCartLink();
    await cartPage.checkout();

    await checkoutStepOnePage.fillForm(frname, lastname, zip);
    await checkoutStepTwoPage.finishButton();

    await expect(page.getByTestId('complete-header')).toHaveText('Thank you for your order!');
});
