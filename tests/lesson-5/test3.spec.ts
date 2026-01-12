import { test } from "@playwright/test";

const webURL = "https://material.playwrightvn.com/";

const xpathTodoPage = "//a[@href='03-xpath-todo-list.html']";
const xpathTaskInput = "//input[@id='new-task']";
const xpathAddTaskbtn = "//button[@id='add-task']";
const xpathDelTaskbtn = "//button[contains(@onclick, 'deleteTask')]";

const todoItem = 100;

test("Add and remove odd todo item", async ({ page }) => {
  await test.step("Navigate to Website", async () => {
    await page.goto(webURL);
  });
  await test.step("Click on 'Bài học 3: Todo page", async () => {
    await page.locator(xpathTodoPage).click();
  });

  await test.step("Add 100 todo item", async () => {
    for (let i = 0; i < todoItem; i++) {
      await page.locator(xpathTaskInput).fill(`To do ${i}`);
      await page.locator(xpathAddTaskbtn).click();
    }
  });

  for (let i = todoItem; i >= 0; i--) {
    if (i % 2 !== 0) {
      await Promise.all([
        page.waitForEvent("dialog").then((dialog) => dialog.accept()),
        page.locator(xpathDelTaskbtn).nth(i).click(),
      ]);
    }
  }
});
