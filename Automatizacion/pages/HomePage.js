class HomePage {
  constructor(page) {
    this.page = page;
    // Selecciona solo el primer enlace 'Laptops & Notebooks' con clase dropdown-toggle para evitar ambigüedad
    this.laptopsMenu = page.locator('a.dropdown-toggle:has-text("Laptops & Notebooks")').first();
    this.showAllLaptopsOption = page.locator('a.see-all:has-text("Show All Laptops & Notebooks")');
  }

  async navigateToLaptops() {
    await this.laptopsMenu.hover();
    await this.showAllLaptopsOption.click();
  }
}

module.exports = HomePage;
