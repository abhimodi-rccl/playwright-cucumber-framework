import { Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../world/CustomWorld";


Then('user should see home page successfully', async function (this: CustomWorld) {
    await this.poManager.getHomePage().verifyHomePage();
});

Then('user should see Login to your account section', async function (this: CustomWorld) {
    this.poManager.getSignupLoginPage().verifyLoginSection()
});

When('user enters valid email address and password', async function (this: CustomWorld) {
    this.poManager.getSignupLoginPage().enterLoginDetails();
});

When('user clicks Login button', async function (this: CustomWorld) {
    this.poManager.getSignupLoginPage().clickOnLoginButton();
});
Then('user should see Logged in as username', async function (this: CustomWorld) {
    this.poManager.getHomePage().verifyUserLoggedIn('AbhishekPlay')

});

When('user clicks Delete Account button', async function (this: CustomWorld) {
    await this.poManager.getAccountCreatedPage().deleteAccount();
});

Then('user should see Account Deleted message', async function (this: CustomWorld) {
    await this.poManager.getAccountCreatedPage().verifyAccountDeleted();
});