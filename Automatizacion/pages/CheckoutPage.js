class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.billingContinueButton = page.locator('#button-payment-address');
    this.shippingContinueButton = page.locator('#button-shipping-address');
    this.shippingMethodContinueButton = page.locator('#button-shipping-method');
    this.paymentMethodContinueButton = page.locator('#button-payment-method');
    this.confirmOrderButton = page.locator('#button-confirm');
  }

  async fillBillingDetails() {
    // Si quieres agregar más acciones en este paso, agrega los campos aquí
    await this.billingContinueButton.click();
  }

  async fillShippingDetails() {
    await this.shippingContinueButton.click();
  }

  async selectShippingMethod() {
    await this.shippingMethodContinueButton.click();
  }

  async selectPaymentMethod() {
    await this.paymentMethodContinueButton.click();
  }

  async confirmOrder() {
    await this.confirmOrderButton.click();
  }
}

module.exports = CheckoutPage;
