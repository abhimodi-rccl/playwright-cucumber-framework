import { Locator, Page, expect } from '@playwright/test';
import { ElementActions } from '../core/ElementActions';
import { ElementChecks } from '../core/ElementChecks';
import { appConfig } from '../config/appConfig';

export class HomePage {
  private page: Page;
  private homePageText: Locator;
  private signupLoginLink: Locator;
  private loggedInUserName:Locator;

  constructor(page: Page) {
    this.page = page;
    this.homePageText = this.page.locator('img[alt="Website for automation practice"]')
    this.signupLoginLink = this.page.locator('a[href="/login"]')
    this.loggedInUserName=this.page.locator('a b');

  }
  async navigate(): Promise<void> {
    await this.page.goto(appConfig.appUrl)

  }
  async verifyHomePage(): Promise<void> {
    await ElementChecks.expectVisible(this.homePageText)
  }

  async clickSignupLogin(): Promise<void> {
    await ElementActions.click(this.signupLoginLink)
  }

  async verifyUserLoggedIn(username:string):Promise<void>
  {
    await ElementChecks.expectText(this.loggedInUserName,username,'Logged in username')
  }

}