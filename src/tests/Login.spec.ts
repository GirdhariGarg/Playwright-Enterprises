import {test} from '@playwright/test';
import LoginPage  from '../pages/LoginPage';

test("verify user login successfully", async({page})=>{
const loginPage = new LoginPage(page);

await loginPage.navigateToLoginPage();

const homePage = await loginPage.enterCredentials("girdhari@gmail.sanbox", "Salesforce@12");
await homePage.expectedSetupLabel();

});