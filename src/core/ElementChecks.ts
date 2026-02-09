import { expect, Locator } from '@playwright/test';
import { TestConfig } from '../config/testConfig';

export class ElementChecks {

  static async expectVisible(
    element: Locator,
    description?: string
  ): Promise<void> {
    await expect(element).toBeVisible({
      timeout: TestConfig.timeouts.element
    });
    console.log(`Verified visible: ${description ?? 'element'}`);
  }

  static async expectText(
    element: Locator,
    expectedText: string,
    description?: string
  ): Promise<void> {
    await expect(element).toHaveText(expectedText, {
      timeout: TestConfig.timeouts.element
    });
    console.log(`Verified text: ${description ?? 'element'}`);
  }
}
