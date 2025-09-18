class ProductPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('#button-cart');
    this.searchInput = page.locator('input[name="search"]');
    this.searchButton = page.locator('.input-group-btn button[type="button"]');
  }

  async goto() {
    await this.page.goto('https://opencart.abstracta.us/');
  }

  async gotoProduct(productUrl) {
    await this.page.goto(productUrl);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async search(productName) {
    await this.searchInput.fill(productName);
    await this.searchButton.click();
  }

  async selectProductByName(productName) {
    await this.page.locator(`a:has-text("${productName}")`).first().click();
  }
}

module.exports = ProductPage;
