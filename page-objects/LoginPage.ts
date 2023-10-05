// export class LoginPage {
//     page: any;
//     emailInput: any;
//     nextButton: any;
//     passwordInput: any;
//     loginButton: any;
//     lunchButton: any;
// 	constructor(page: any) {
// 		this.page = page;
// 		this.emailInput = page.locator('#email');
// 		this.nextButton = page.getByRole('button', { name: 'Next' });
// 		this.passwordInput = page.locator('#password');
// 		this.loginButton = page.getByRole('button', { name: 'Sign In' });
// 		this.lunchButton = page.locator('#btn-launch-secos');
// 	}

// 	visit = async () => {
// 		await this.page.goto('/');
// 	};

// 	login = async (username: string, password: string) => {
// 		await this.emailInput.type(username);
// 		await this.nextButton.click();
// 		await this.passwordInput.type(password);
// 		await this.loginButton.click();
// 		await this.lunchButton.click();
// 	};
	
// }

import { Page } from '@playwright/test';

const credentials = {
  username: process.env.TEST_USER || '',
  password: process.env.TEST_PASS || '',
};

export class LoginPage {
  constructor(
    private page: Page,
    private url = '/' // private loginUrl = 'https://portal-dev.goilobby.com/Login/'
  ) {}

  private async submitLoginForm(username?: string) {
    await this.page.fill(
      'input[type="text"]',
      username || credentials.username
    );
    await this.page.getByText('Next').click();
    await this.page.fill('input[type="password"]', credentials.password);
    await this.page.click('text="Sign In"');
  }

  async login(username?: string) {
    await Promise.all([
      this.page.goto(this.url),
      this.page.waitForNavigation(),
    ]);

    await this.submitLoginForm(username);

    // if there's a redirect back to main page
    await this.page.waitForURL(
      (url: URL) => {
        return url.pathname === this.url;
      },
      {
        waitUntil: 'networkidle',
      }
    );
  }
}
