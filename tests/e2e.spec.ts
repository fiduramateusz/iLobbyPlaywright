// import { test } from '@playwright/test';
// import { LoginPage } from './../page-objects/LoginPage.js';
// import { ActivityPage } from '../page-objects/ActivityPage.js';
// import { Navigation } from '../page-objects/Navigation.js';
// import { AccessLevelsPage } from '../page-objects/AccessLevelsPage.js';

// test.only('Login to the portal', async ({ page }) => {
// 	const loginPage = new LoginPage(page);
// 	const activityPage = new ActivityPage(page);
// 	const navigation = new Navigation(page);
// 	const accessLevelPage = new AccessLevelsPage(page);
// 	await loginPage.visit();
// 	await loginPage.login('mateusz.fidura@itmagination.com', 'we!come2iLobby');
// 	await activityPage.checkIfHeadingVisible();
// 	await navigation.navigateToAccessLevels();
// 	await accessLevelPage.checkIfHeadingVisible();
// 	await page.pause();
// });

import { test, expect, Page } from '@playwright/test';
import { LoginPage } from './../page-objects/LoginPage';
import { ActivityPage } from './../page-objects/ActivityPage';

test.describe('Activity Log page', () => {
  let page: Page;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    const loginPage = new LoginPage(page);
    await loginPage.login();
  });

  test('Activity Log - header text', async () => {
    await new ActivityPage(page).goToActivity();
    await expect(page.locator('div.header-title')).toHaveText('Activity Log');
    await page.getByPlaceholder('Search...').fill('may');
    await expect(page.locator('tbody tr')).toContainText('may', {
      ignoreCase: true,
      timeout: 5000,
    });
  });

  test.skip('deliveries - has admin menu', async () => {
    await new ActivityPage(page).goToActivity();
    await expect(page.locator('div.menu-list span.text')).toHaveText([
      'Activity Log'
    ]);
  });
});