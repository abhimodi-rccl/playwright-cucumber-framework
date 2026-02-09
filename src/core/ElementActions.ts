import { Locator, Page } from '@playwright/test';
import { TestConfig } from '../config/testConfig';

export class ElementActions {
  constructor(private page: Page) {
    this.page=page
  }

  // ---------- BASIC ACTIONS ----------

  static async click(element: Locator, description?: string): Promise<void> {
    await element.waitFor({
      state: 'visible',
      timeout: TestConfig.timeouts.element
    });
    await element.click();
    console.log(`Clicked: ${description ?? 'element'}`);
  }

  static async fill(
    element: Locator,
    value: string,
    description?: string
  ): Promise<void> {
    await element.waitFor({
      state: 'visible',
      timeout: TestConfig.timeouts.element
    });
    await element.fill(value);
    console.log(`Filled ${description ?? 'element'} with value: ${value}`);
  }

  // ---------- CHECK / UNCHECK ----------

  static async check(element: Locator, description?: string): Promise<void> {
    await element.waitFor({
      state: 'attached',
      timeout: TestConfig.timeouts.element
    });

    if (!(await element.isChecked())) {
      await element.check();
      console.log(`Checked: ${description ?? 'checkbox'}`);
    }
  }

  static async uncheck(element: Locator, description?: string): Promise<void> {
    await element.waitFor({
      state: 'attached',
      timeout: TestConfig.timeouts.element
    });

    if (await element.isChecked()) {
      await element.uncheck();
      console.log(`Unchecked: ${description ?? 'checkbox'}`);
    }
  }

  // ---------- SELECT OPTION ----------

  static async selectByValue(
    element: Locator,
    value: string,
    description?: string
  ): Promise<void> {
    await element.waitFor({
      state: 'visible',
      timeout: TestConfig.timeouts.element
    });

    await element.selectOption({ value });
    console.log(
      `Selected value "${value}" from ${description ?? 'dropdown'}`
    );
  }

  static async selectByText(
    element: Locator,
    text: string,
    description?: string
  ): Promise<void> {
    await element.waitFor({
      state: 'visible',
      timeout: TestConfig.timeouts.element
    });

    await element.selectOption({ label: text });
    console.log(
      `Selected text "${text}" from ${description ?? 'dropdown'}`
    );
  }

 static async selectByIndex(
    element: Locator,
    index: number,
    description?: string
  ): Promise<void> {
    await element.waitFor({
      state: 'visible',
      timeout: TestConfig.timeouts.element
    });

    await element.selectOption({ index });
    console.log(
      `Selected index "${index}" from ${description ?? 'dropdown'}`
    );
  }
}
