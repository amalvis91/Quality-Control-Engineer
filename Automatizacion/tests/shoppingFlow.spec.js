const { test, expect } = require('@playwright/test');
const HomePage = require('../pages/HomePage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');
const CheckoutPage = require('../pages/CheckoutPage');

test('Flujo completo de compra', async ({ page }) => {
  const homePage = new HomePage(page);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  // Navegar a la página principal
  await homePage.goto();

  // 1. Ve a la sección "Laptops & Notebooks" y selecciona "Show All"
  await homePage.navigateToLaptops();

  // 2. Agrega al carrito el portátil "MacBook Pro"
  await productPage.selectProductByName('MacBook Pro');
  await productPage.addToCart();

  // 3. Usa la barra de búsqueda para buscar "Samsung Galaxy"
  await productPage.goto(); // vuelve a home para buscar
  await productPage.search('Samsung Galaxy');

  // 4. Selecciona el producto "Samsung Galaxy Tab"
  await productPage.selectProductByName('Samsung Galaxy Tab');
  await productPage.addToCart();

  // 5. Navega al carrito
  await cartPage.goto();

  // 6. Elimina el producto "MacBook Pro" del carrito
  await cartPage.removeItemByName('MacBook Pro');

  // 7. Incrementa la cantidad de "Samsung Galaxy Tab" a 2 unidades
  await cartPage.updateQuantity('Samsung Galaxy Tab', 2);

  // 8. Procede con el proceso de compra
  await cartPage.proceedToCheckout();

  // 9. Completa las etapas del checkout
  await checkoutPage.fillBillingDetails();
  await checkoutPage.fillShippingDetails();
  await checkoutPage.selectShippingMethod();
  await checkoutPage.selectPaymentMethod();

  // 10. Confirma la orden
  await checkoutPage.confirmOrder();

  // 11. Verifica que la compra fue completada con el mensaje
  await expect(page.locator('text=Your order has been placed!')).toBeVisible();
});
