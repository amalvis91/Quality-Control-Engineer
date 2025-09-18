const { test, expect } = require('@playwright/test');
const RegistrationPage = require('../pages/RegistrationPage');

test('Completa el formulario de registro', async ({ page }) => {
  const registration = new RegistrationPage(page);

  // Navegar a la página de registro
  await registration.goto();

  // Completar el formulario con datos de ejemplo
  await registration.fillForm(
    'Alejandra',
    'Tester',
    `alejandra.tester${Date.now()}@example.com`,  // Email único por timestamp
    '3130000000',
    'Password123!'
  );

  // Enviar el formulario
  await registration.submit();

  // Verificar que aparece mensaje de confirmación
  await expect(page.locator('text=Congratulations! Your new account has been successfully created!')).toBeVisible();

});
