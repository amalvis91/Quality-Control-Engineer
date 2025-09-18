class RegistrationPage {
  constructor(page) {
    this.page = page;
    this.firstNameInput = page.locator('#input-firstname');
    this.lastNameInput = page.locator('#input-lastname');
    this.emailInput = page.locator('#input-email');
    this.telephoneInput = page.locator('#input-telephone');
    this.passwordInput = page.locator('#input-password');
    this.confirmPasswordInput = page.locator('#input-confirm');
    this.privacyPolicyCheckbox = page.locator('input[name="agree"]');
    this.continueButton = page.locator('input[type="submit"][value="Continue"]');
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=account/register');
  }

  async fillForm(firstName, lastName, email, telephone, password) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.emailInput.fill(email);
    await this.telephoneInput.fill(telephone);
    await this.passwordInput.fill(password);
    await this.confirmPasswordInput.fill(password);
    await this.privacyPolicyCheckbox.check();
  }

  async submit() {
    await this.continueButton.click();
  }
}

module.exports = RegistrationPage;
