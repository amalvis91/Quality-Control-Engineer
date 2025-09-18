const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');

test('Navegar a Show all laptops & notebooks', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto('https://opencart.abstracta.us/');

  await homePage.navigateToLaptops();

  await expect(page).toHaveURL(/.*route=product\/category&path=18/);
  await expect(page.locator('h2')).toHaveText('Laptops & Notebooks');
});
