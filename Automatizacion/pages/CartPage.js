class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.table-responsive tbody tr');
    this.removeButtons = page.locator('.table-responsive tbody tr td .btn-danger');
    this.quantityInputs = page.locator('.table-responsive tbody tr input[type="text"]');
    this.updateButtons = page.locator('.table-responsive tbody tr button[data-original-title="Update"]');
    this.checkoutButton = page.locator('a:has-text("Checkout")');
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/index.php?route=checkout/cart');
  }

  async removeItemByName(itemName) {
    const count = await this.cartItems.count();
    for (let i = 0; i < count; i++) {
      const row = this.cartItems.nth(i);
      const productName = await row.locator('td:nth-child(2) a').innerText();
      if (productName.includes(itemName)) {
        await row.locator('.btn-danger').click();
        break;
      }
    }
  }

  async updateQuantity(itemName, quantity) {
    const count = await this.cartItems.count();
    for (let i = 0; i < count; i++) {
      const row = this.cartItems.nth(i);
      const productName = await row.locator('td:nth-child(2) a').innerText();
      if (productName.includes(itemName)) {
        await row.locator('input[type="text"]').fill(quantity.toString());
        await row.locator('button[data-original-title="Update"]').click();
        break;
      }
    }
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}

module.exports = CartPage;
