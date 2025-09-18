class ForgotPasswordPage {
  constructor(page) {
    this.page = page;
    this.emailInput = page.locator('#input-email');
    this.continueButton = page.locator('input[value="Continue"]');
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/forgotten');
  }

  async resetPassword(email) {
    await this.emailInput.fill(email);
    await this.continueButton.click();
  }
}

module.exports = ForgotPasswordPage;
