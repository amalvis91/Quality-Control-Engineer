class LoginPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#input-email');
    this.passwordInput = page.locator('#input-password');
    this.loginButton = page.locator('input[value="Login"]');
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/login');
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}

module.exports = LoginPage;
