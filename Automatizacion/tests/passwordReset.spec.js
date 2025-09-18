const { test, expect } = require('@playwright/test');
const ForgotPasswordPage = require('../pages/ForgotPasswordPage');

test('Validar mensaje de error en restablecer contraseña con email NO registrado', async ({ page }) => {
  const forgotPasswordPage = new ForgotPasswordPage(page);

  await forgotPasswordPage.goto();
  await forgotPasswordPage.resetPassword('alejandra.static@example.com');

  // Valida el mensaje de advertencia de email no encontrado
  await expect(page.locator('.alert-danger')).toBeVisible();
});
