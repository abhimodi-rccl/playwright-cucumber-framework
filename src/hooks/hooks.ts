import { Before, After, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { CustomWorld } from '../world/CustomWorld';

setDefaultTimeout(60 * 1000)
Before(async function (this: CustomWorld) {
  await this.launchBrowser();
});

After(async function (this: CustomWorld,scenario) {

  if(scenario.result?.status===Status.FAILED){
    const screnshot = await this.page.screenshot();
    await this.attach(screnshot,'image/png');

  }
  await this.closeBrowser();
});
