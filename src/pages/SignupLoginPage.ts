import { Locator, Page } from '@playwright/test';
import { ElementActions } from '../core/ElementActions';
import { ElementChecks } from '../core/ElementChecks';
import { appConfig } from '../config/appConfig';

export class SignupLoginPage {
  private page:Page
  private nameText:Locator;
  private emailAddress:Locator;
  private signUpButton:Locator;
  private loginText:Locator
  private loginEmail:Locator
  private loginPassword:Locator
  private loginButton:Locator

  constructor( page: Page) {
    this.page=page;
    this.nameText=this.page.locator('[data-qa="signup-name"]');
    this.emailAddress=this.page.locator('[data-qa="signup-email"]');
    this.signUpButton=this.page.getByRole('button', { name: 'Signup' })
    this.loginText=this.page.locator('.login-form h2');
    this.loginEmail=this.page.locator('[data-qa="login-email"]');
    this.loginPassword=this.page.locator('[data-qa="login-password"]');
    this.loginButton=this.page.locator('[data-qa="login-button"]');
  }

  async enterSignupDetails(name: string, email: string):Promise<void> {
    await ElementActions.fill(this.nameText,name)
    console.log(email)
    await ElementActions.fill(this.emailAddress,email);
    await ElementActions.click(this.signUpButton);
  }

  async verifyLoginSection():Promise<void>
  {
    await ElementChecks.expectText(this.loginText,'Login to your account');
  }

  async enterLoginDetails():Promise<void>
  {
    await ElementActions.fill(this.loginEmail,appConfig.email);
    await ElementActions.fill(this.loginPassword,appConfig.password);
  
  } 

  async clickOnLoginButton():Promise<void>{
    await ElementActions.click(this.loginButton);
  }
}