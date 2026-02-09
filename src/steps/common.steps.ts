import { Given } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';

Given('user launches automation exercise site', async function (this: CustomWorld) {
  const homePage = this.poManager.getHomePage();
  await homePage.navigate();
});