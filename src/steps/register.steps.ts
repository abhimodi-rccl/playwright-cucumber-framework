import { When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';
import { appConfig } from '../config/appConfig';


When('user clicks Signup Login', async function (this: CustomWorld) {
  await this.poManager.getHomePage().clickSignupLogin();
});

When('user enters signup details', async function (this: CustomWorld) {
  await this.poManager.getSignupLoginPage().enterSignupDetails(
    'AbhishekPlay',
    `test${Date.now()}@gmail.com`
  );
});

When('user fills account information', async function (this: CustomWorld) {
  await this.poManager
    .getAccountInfoPage()
    .fillAccountInfo('AbhishekPlay', appConfig.password);
});

Then('account should be created successfully', async function (this: CustomWorld) {
  const accountCreatedPage = this.poManager.getAccountCreatedPage();
  await accountCreatedPage.verifyAccountCreated();
  await accountCreatedPage.clickContinue();
});

Then('user deletes account', async function (this: CustomWorld) {
  const accountCreatedPage = this.poManager.getAccountCreatedPage();
  await accountCreatedPage.deleteAccount();
  await accountCreatedPage.verifyAccountDeleted();
  await accountCreatedPage.clickContinue();
});