// export class Navigation {
//     page: any;
//     activityTab: any;
//     accessLevel: any;
//     manageTab: any;
//     automations: any;
//     settingsTab: any;
//     accessPoint: any;
//     credentials: any;
//     inputsOutputs: any;
//     schedules: any;
// 	constructor(page) {
// 		this.page = page;

// 		this.activityTab = page.locator('#activity-log-outer');
// 		this.manageTab = page.locator('#manage');
// 		this.settingsTab = page.locator('#settings');
// 		this.accessLevel = page.getByRole('link', { name: 'Access Levels' });
// 		this.accessPoint = page.getByRole('link', { name: 'Access Points' });
// 		this.automations = page.getByRole('link', { name: 'Automations' });
// 		this.credentials = page.getByRole('link', { name: 'Credentials' });
// 		this.inputsOutputs = page.getByRole('link', { name: 'Inputs / Outputs' });
// 		this.schedules = page.getByRole('link', { name: 'Schedules' });
// 	}
// 	navigateToAccessLevels = async () => {
// 		await this.manageTab.click();
// 		await this.accessLevel.click();
// 	};
// }
