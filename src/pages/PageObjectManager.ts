import { Page } from '@playwright/test';

import { HomePage } from './HomePage';
import { SignupLoginPage } from './SignupLoginPage';
import { AccountInfoPage } from './AccountInfoPage';
import { AccountCreatedPage } from './AccountCreatedPage';

export class PageObjectManager {
  private page: Page;

  private homePage?: HomePage;
  private signupLoginPage?: SignupLoginPage;
  private accountInfoPage?: AccountInfoPage;
  private accountCreatedPage?: AccountCreatedPage;

  constructor(page: Page) {
    this.page = page;
  }

  getHomePage(): HomePage {
    if (!this.homePage) {
      this.homePage = new HomePage(this.page);
    }
    return this.homePage;
  }

  getSignupLoginPage(): SignupLoginPage {
    if (!this.signupLoginPage) {
      this.signupLoginPage = new SignupLoginPage(this.page);
    }
    return this.signupLoginPage;
  }

  getAccountInfoPage(): AccountInfoPage {
    if (!this.accountInfoPage) {
      this.accountInfoPage = new AccountInfoPage(this.page);
    }
    return this.accountInfoPage;
  }

  getAccountCreatedPage(): AccountCreatedPage {
    if (!this.accountCreatedPage) {
      this.accountCreatedPage = new AccountCreatedPage(this.page);
    }
    return this.accountCreatedPage;
  }
}
