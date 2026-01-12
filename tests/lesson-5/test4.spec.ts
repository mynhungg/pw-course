import { test } from "@playwright/test";

const webURL = "https://material.playwrightvn.com/";
const paperURL = "https://vnexpress.net/khoa-hoc-cong-nghe";
const xpathPersonalNotePage = "//a[@href='04-xpath-personal-notes.html']";

const xpathSearchInput = "//input[@id='search']";
const xpathTitleInput = "//input[@id='note-title']";
const xpathContentInput = "//textarea[@id='note-content']";
const xpathAddNotebtn = "//button[@id='add-note']";

test("Add paper to Personal Notes and Search notes", async ({ page }) => {
  await test.step("Navigate to VnExpress - Khoa hoc website", async () => {
    await page.goto(paperURL);
  });

  //collect url
  const paperLocator = page.locator(
    "//article/*[contains(@class,'title-news')]/a[contains(@href, 'vnexpress')]"
  );

  const paperTotal = await paperLocator.count();
  const paperItem = Math.min(paperTotal, 10);

  const urlArr = [];
  for (let i = 0; i < paperItem; i++) {
    const url = (await paperLocator.nth(i).getAttribute("href")) ?? "";
    urlArr.push(url);
  }

  //get title and first 3 line content
  interface Paper {
    title: string;
    content: string;
  }

  const paperArr: Paper[] = [];

  for (const url of urlArr) {
    await page.goto(url, { waitUntil: "domcontentloaded" });
    const titlePaper = await page.locator("//h1").innerText();
    const contentPaper = await page
      .locator("//article[@class='fck_detail ']//p")
      .allInnerTexts();

    //get first 3 line content, base on (.)
    const sentences = contentPaper.join(" ").split(".");
    const first3Lines = sentences.slice(0, 3).join(". ") + ".";
    paperArr.push({ title: titlePaper, content: first3Lines });
  }

  await test.step("Go to page Personal Notes page to add and search note", async () => {
    await test.step("Navigate to Website Playwright", async () => {
      await page.goto(webURL);
    });
    await test.step("Click on 'Bài học 4: Personal Notes", async () => {
      await page.locator(xpathPersonalNotePage).click();
    });

    await test.step("Add note from title and caption paper", async () => {
      for (const data of paperArr) {
        await page.locator(xpathTitleInput).fill(data.title);
        await page.locator(xpathContentInput).fill(data.content);
        await page.locator(xpathAddNotebtn).click();
      }
    });
    const searchKeyword = "Thay đổi";
    await test.step("Search title paper", async () => {
      await page.locator(xpathSearchInput).fill(searchKeyword);
    });
  });
});
