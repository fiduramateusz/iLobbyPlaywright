// import { expect } from '@playwright/test';

// export class ActivityPage {
//     page: any;
//     headingText: any;
// 	constructor(page) {
// 		this.page = page;
// 		this.headingText = page.getByRole('heading', { name: 'Activity Log' });
// 	}
// 	checkIfHeadingVisible = async () => {
// 		await this.headingText.waitFor();
// 		await expect(this.headingText).toHaveText('Activity Log');
// 	};

// }

import { Page } from '@playwright/test';

export class ActivityPage {
	constructor(private page: Page) {}

	async goToActivity() {
		await this.page.click('li[title="Activity Log"] a');
	}
}
