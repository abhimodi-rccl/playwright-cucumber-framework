import { Locator, Page, expect } from '@playwright/test';
import { ElementChecks } from '../core/ElementChecks';
import { ElementActions } from '../core/ElementActions';

export class AccountCreatedPage {

  private page:Page;
  private createDeleteText:Locator;
  private continueButton:Locator;
  private accountDeleteLink:Locator;

  constructor( page: Page) {
    this.page=page
    this.createDeleteText=this.page.locator('.title b');
    this.continueButton=this.page.locator('[data-qa="continue-button"]');
    this.accountDeleteLink=this.page.locator('a[href="/delete_account"]');
  }

  async verifyAccountCreated():Promise<void> {
    await ElementChecks.expectText(this.createDeleteText,'Account Created!')
  }

  async clickContinue() :Promise<void>{
    await ElementActions.click(this.continueButton);
  }

  async deleteAccount():Promise<void> {
    await ElementActions.click(this.accountDeleteLink);
  }

  async verifyAccountDeleted():Promise<void> {
    await ElementChecks.expectText(this.createDeleteText,'Account Deleted!');
  }
}
