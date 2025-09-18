const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Validar inicio de sesión con credenciales válidas', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login('alejandra.static@example.com', 'Password123!');

  // Cambiar el selector para seleccionar solo el primer elemento que coincide
  await expect(page.locator('text=My Account').first()).toBeVisible();
});
