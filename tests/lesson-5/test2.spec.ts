import { test } from "@playwright/test";

const webURL = "https://material.playwrightvn.com/";

const xpathProductPage = "//a[@href='02-xpath-product-page.html']";
const xpathProduct1btn = "//button[@data-product-id='1']";
const xpathProduct2btn = "//button[@data-product-id='2']";
const xpathProduct3btn = "//button[@data-product-id='3']";

test("Add products to cart", async ({ page }) => {
  await test.step("Navigate to Website", async () => {
    await page.goto(webURL);
  });
  await test.step("Click on 'Bài học 2: Product page", async () => {
    await page.locator(xpathProductPage).click();
  });

  await test.step("Add 2 Product 1 to cart", async () => {
    const product1 = 2;
    for (let i = 0; i < product1; i++) {
      await page.locator(xpathProduct1btn).click();
    }
  });

  await test.step("Add 3 Product 2 to cart", async () => {
    const product2 = 3;
    for (let i = 0; i < product2; i++) {
      await page.locator(xpathProduct2btn).click();
    }
  });

  await test.step("Add 1 Product 3 to cart", async () => {
    await page.locator(xpathProduct3btn).click();
  });
});
