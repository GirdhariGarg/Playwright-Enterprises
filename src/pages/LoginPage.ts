import { Page } from "@playwright/test";
import HomePage  from "./HomePage";

export default class LoginPage{

private readonly username_Input_field = "#username";
private readonly password_Input_field ='#password';
private readonly login_button='#Login';

constructor(private page: Page){
    }

    async navigateToLoginPage(){
       await this.page.goto("/") ;
    }

    async enterCredentials(username:string, password:string){
await this.page.fill(this.username_Input_field, username);
await this.page.fill(this.password_Input_field, password);
await this.page.click(this.login_button);

const homepage= new HomePage(this.page);
return homepage;
    }
}

