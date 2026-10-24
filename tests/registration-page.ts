import { Page } from "@playwright/test";

// export function RegistrationPage(page){
//     this.page = page;

//     this.fillUserName = async (username) => 
//         await page.getByTestId('username').fill(username);
//     this.fillPassword = async (password) => 
//         await page.getByTestId('password').fill(password);
//     this.loginButton = async () => 
//         await page.getByTestId('login-button').click();

//     this.register =  async (username, password) => {
//         await this.fillUserName(username);
//         await this.fillPassword(password);
//         await this.loginButton();
//     };
// }

export class BaseClass {
    page: Page;

    constructor(page: Page){
        this.page = page;
    }

    openCartLink = async () => {
        await this.page.getByTestId('shopping-cart-link').click();
    }

    getTitle = () =>
        this.page.getByTestId('title');

    getCartBadge = () =>
        this.page.getByTestId('shopping-cart-badge');
}

export class LoginPage extends BaseClass {

    fillUserName = async (username: string) => 
        await this.page.getByTestId('username').fill(username);
    fillPassword = async (password: string) => 
        await this.page.getByTestId('password').fill(password);
    loginButton = async () => 
        await this.page.getByTestId('login-button').click();

    login =  async (username: string, password: string) => {
        await this.fillUserName(username);
        await this.fillPassword(password);
        await this.loginButton();
    };
}

export class ProductListPage extends BaseClass {

    getItemFromList = (name: string) =>
        this.page.getByTestId('inventory-item').filter({ hasText: name });

    getNameByTitle = (name: string) =>
        this.getItemFromList(name).getByTestId('inventory-item-name');

    removeFromCartByTitle = async (name: string) =>
        await this.getItemFromList(name).getByRole('button', {name: 'Remove'}).click();

    getPriceByTitle = (name: string) =>
        this.getItemFromList(name).getByTestId('inventory-item-price');
}

export class InventoryPage extends ProductListPage {

    addToCartByTitle = async (name: string) =>
        await this.getItemFromList(name).getByRole('button', { name: 'Add to cart' }).click();
}

export class CartPage extends ProductListPage {

    checkout = async () => 
        await this.page.getByTestId('checkout').click(); 

    continueShopping = async () => 
        await this.page.getByTestId('continue-shopping').click();
}

export class CheckoutStepOnePage extends BaseClass {

    fillFirstName = async (frname: string) => 
        await this.page.getByTestId('firstName').fill(frname);
    fillLastName = async (lastname: string) => 
        await this.page.getByTestId('lastName').fill(lastname);
    fillZipCode = async (zip: string) => 
        await this.page.getByTestId('postalCode').fill(zip);
    continueButton = async () => 
        await this.page.getByTestId('continue').click();

    fillForm =  async (frname: string, lastname: string, zip: string) => {
        await this.fillFirstName(frname);
        await this.fillLastName(lastname);
        await this.fillZipCode(zip);
        await this.continueButton();
    };
}

export class CheckoutStepTwoPage extends BaseClass {
    finishButton = async () => 
        await this.page.getByTestId('finish').click();
}