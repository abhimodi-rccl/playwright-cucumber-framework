import { Locator, Page } from '@playwright/test';
import { ElementActions } from '../core/ElementActions';

export class AccountInfoPage {
  private page: Page;
  private gender: Locator
  private passwordTxt: Locator;
  private daysDropdown: Locator;
  private monthDropdown: Locator;
  private yearDropdown: Locator;
  private firstName: Locator;
  private lastName: Locator;
  private company: Locator;
  private address: Locator;
  private countryDropdown: Locator;
  private state: Locator;
  private city: Locator;
  private zipcode: Locator;
  private mobileNo: Locator;
  private createAccountButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.gender = this.page.locator('#id_gender1');
    this.passwordTxt = this.page.locator('#password');
    this.daysDropdown = this.page.locator('#days');
    this.monthDropdown = this.page.locator('#months');
    this.yearDropdown = this.page.locator('#years');
    this.firstName = this.page.locator('#first_name');
    this.lastName = this.page.locator('#last_name');
    this.company = this.page.locator('#company')
    this.address = this.page.locator('#address1');
    this.countryDropdown = this.page.locator('#country');
    this.state = this.page.locator('#state');
    this.city = this.page.locator('#city');
    this.zipcode = this.page.locator('#zipcode');
    this.mobileNo = this.page.locator('#mobile_number');
    this.createAccountButton = this.page.getByRole('button', { name: 'Create Account' });
  }

  async fillAccountInfo(username: string, password: string): Promise<void> {

    await ElementActions.check(this.gender)
    await ElementActions.fill(this.passwordTxt, password)
    await ElementActions.selectByText(this.daysDropdown, '15');
    await ElementActions.selectByText(this.monthDropdown, 'May');
    await ElementActions.selectByText(this.yearDropdown, '1993');

    await ElementActions.fill(this.firstName, username);

    await ElementActions.fill(this.lastName, 'Modi');
    await ElementActions.fill(this.company, 'Globant');

    await ElementActions.fill(this.address, 'Pune');
    await ElementActions.selectByText(this.countryDropdown, 'India');

    await ElementActions.fill(this.state, 'Maharashtra');
    await ElementActions.fill(this.city, 'Pune');
    await ElementActions.fill(this.zipcode, '411030');
    await ElementActions.fill(this.mobileNo, '9999999999');

    await ElementActions.click(this.createAccountButton)
  }
}
