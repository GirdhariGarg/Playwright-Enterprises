import {expect, Page} from '@playwright/test';

export default class HomePage{

 private  setupLabel="//*[@title='Setup']";


constructor(private page:Page){

}

async expectedSetupLabel(){
    await this.page.waitForSelector(this.setupLabel);
    await expect(await this.page.locator(this.setupLabel)).toBeVisible();
}

}