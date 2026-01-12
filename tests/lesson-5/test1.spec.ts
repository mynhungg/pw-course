import { test } from "@playwright/test";

const webURL = "https://material.playwrightvn.com/";

const xpathRegisterPage = "//a[@href='01-xpath-register-page.html']";

const xpathUsernameInput = "//input[@id='username']";
const xpathEmailInput = "//input[@id='email']";
const xpathGenderRadio = "//input[@value='female']";
const xpathHobbiesCheckbox = "//input[@id='reading']";
const xpathInterestList = "//select[@id='interests']";
const xpathCountryDropdown = "//select[@id='country']";
const xpathBirthDatepicker = "//input[@id='dob']";
const xpathProfileBtn = "//input[@id='profile']";
const xpathBiographyTxtarea = "//textarea[@id='bio']";
const xpathRateSlider = "//input[@id='rating']";
const xpathFavoriteColorpicker = "//input[@id='favcolor']";
const xpathNewsletterCheckbox = "//input[@id='newsletter']";
const xpathFeatureToggle =
  "//input[@id='toggleOption']/following-sibling::span";
const xpathRating = "//div[@id='starRating']";
const xpathRegisterbtn = "//button[@type='submit']";

//1. Fill in Register page
test("Register with all valid info", async ({ page }) => {
  await test.step("Navigate to Website", async () => {
    await page.goto(webURL);
  });
  await test.step("Click on 'Bài học 1: Register page", async () => {
    await page.locator(xpathRegisterPage).click();
  });

  //Fill in Register form
  await test.step("Input Username", async () => {
    await page.locator(xpathUsernameInput).fill("My Nhung");
  });
  await test.step("Input Email", async () => {
    await page.locator(xpathEmailInput).fill("mynhungttm.work@gmail.com");
  });
  await test.step("Check Gender radio button", async () => {
    await page.locator(xpathGenderRadio).check();
  });
  await test.step("Check Hobbies checkbox", async () => {
    await page.locator(xpathHobbiesCheckbox).check();
  });
  await test.step("Select interest", async () => {
    await page.locator(xpathInterestList).selectOption("science");
  });

  await test.step("Select Country", async () => {
    await page.locator(xpathCountryDropdown).selectOption("australia");
  });
  await test.step("Input Date of Birth", async () => {
    await page.locator(xpathBirthDatepicker).fill("2002-10-20");
  });
  await test.step("Upload Profile picture", async () => {
    await page.locator(xpathProfileBtn).scrollIntoViewIfNeeded();
    await page.setInputFiles(xpathProfileBtn, "testdata/images.jpg");
  });
  await test.step("Input Biography", async () => {
    await page.locator(xpathBiographyTxtarea).fill("QC Engineer");
  });
  await test.step("Input Rate", async () => {
    await page.locator(xpathRateSlider).fill("9");
  });
  await test.step("Input Color", async () => {
    await page.locator(xpathFavoriteColorpicker).fill("#00ccff");
  });
  await test.step("Check Newsletter", async () => {
    await page.locator(xpathNewsletterCheckbox).check();
  });
  await test.step("Check Enable Feature", async () => {
    await page.locator(xpathFeatureToggle).check();
  });
  await test.step("Click Start Rating", async () => {
    const box = await page.locator(xpathRating).boundingBox();
    await page
      .locator(xpathRating)
      .click({ position: { x: box!.width * 0.8, y: box!.height / 2 } });
  });
  await test.step("Click Register button", async () => {
    await page.locator(xpathRegisterbtn).click();
  });
});
