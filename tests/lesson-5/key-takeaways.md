# DOM

## Overview


- Definition:
    - DOM = Document Object Model
    - Represents a document with a logical tree
- Node: **one item** in the DOM tree.
- Opening Tag: **Starts** an element. `<option value="1">`
- Closing Tag: **Ends** an element.  `</option>`
    
    `<option value="1">Apple</option>`
    
- Self-closing Tag: No closing tag needed, never have content inside `<img src="picture.jpg">`
- Structure: `<tag_name attribute="value">Content</close_tag_name>`
- https://www.ionos.co.uk/digitalguide/fileadmin/DigitalGuide/Schaubilder/dom-tree-graphic.png
- Common use HTML tag:
    
    
    | Tag / Element | Description |
    | --- | --- |
    | `<div>` | Divide sections on a webpage |
    | `<h1>`–`<h6>` | Headings, from largest to smallest |
    | `<form>` | Container for user input form |
    | `<input>` | Input field (text, email, radio, checkbox, file, color, range, date) |
    | `<textarea>` | Large text input area |
    | Radio button | Single-choice selection |
    | Checkbox | Multi-choice selection |
    | List / Dropdown | List or dropdown menu |
    | `<button>` | Clickable button |
    | `<table>` | Display tabular data |
    | `<thead>` | Table header section |
    | `<tr>` | Table row |
    | `<th>` | Table header cell (bold) |
    | `<tbody>` | Table body section |
    | `<td>` | Table data cell |
    | Date picker | Input for selecting date |
    | Slider | Sliding control |
    | `<iframe>` | Embed another webpage |
- Table Structure (Parent-Child)
```
    <table>
    ├─ <thead>          → Table heading section
    │     └─ <tr>      → Table row
    │           └─ <th> → Table header cell (bold text)
    │           └─ <th> → Table header cell
    │
    ├─ <tbody>          → Table body section
    └─ <tr>      → Table row
    └─ <td> → Table data cell
    └─ <td> → Table data cell
    └─ <tr>
    └─ <td>
    └─ <td>
    </table>
```   



# Selector

- Definition: used to **select HTML elements**
- Type:
    - XPath selector
    - CSS selector
    - Playwright selector

### XPath

- Definition: XML Path
- There are 2 types:
    - **Absolute:** follows the DOM tree directly
        - Starts with `/`
    - **Relative:** finds elements based on attributes or patterns (Recommend)
        - Starts with `//`
        - Example: `//tagName[@attribute="value"]`
- Find elements that match a specific text value
    
    ```csharp
    <div class="playwright">This is a text</div>
    
    //Xpath
    //div[text()='This is a text']
    ```
    
- Contain: extra spaces or values that are not fixed
    
    ```csharp
    <div> Bây giờ là: 08:07 </div>  
    
    //Xpath
    //div[contains(text(), 'Bây giờ là:')]
    ```
- Reference cheatsheet:
    - https://devhints.io/xpath
    - https://www.automatetheplanet.com/applications/most-exhaustive-xpath-locators-cheat-sheet/
    
    [Most-Exhaustive-XPath-Locators-Cheat-Sheet.pdf](attachment:21556a53-8608-4cfc-8368-8d33d970c0dd:Most-Exhaustive-XPath-Locators-Cheat-Sheet.pdf)

## Basic syntax

- **test**: Basic unit for declaring a test

```csharp
import { test } from '@playwright/test';

test('<test name>', async ({ page }) => {
// Code của test
});
```

- **step**: A unit smaller than a test, used to declare each step of a test case

```csharp
await test.step('step name', async () => {
// Code here
});
------

test('<test name>', async ({ page }) => {
await test.step('step name', async () => {
// Code here
});
});
```

- navigate

```csharp
await page.goto('https://pw-practice.playwrightvn.com/');
```

- click

```csharp
//Single click
await page.locator("//button").click();

//Double click
await page.locator("//button").dblclick();

//Right click
page.locator("//button").click({
button: 'right'
})

//Click with pressing another key
page.locator("").click({
modifiers: ['Shift'],
})
```

- input
    - fill: fill input
    
    ```csharp
    page.locator("//input").fill('Playwright Viet Nam');
    ```
    
    - pressSequentially: typing each letter into an input field one by one
    
    ```csharp
    page.locator("//input").pressSequentially('Playwright
    Viet Nam', {
    delay: 100,
    });
    ```
    
- Radio / Checkbox
    - Check if selected:
    
    ```
    const isChecked = await page.locator("//input").isChecked();
    ```
    
    Check:
    
    ```
    await page.locator("//input").check();
    ```
    
    Uncheck:
    
    ```
    await page.locator("//input").setChecked(false);
    ```
    
- Select Option
    - Select from dropdown:
    
    ```
    await page.selectOption('select#country', 'VN');
    ```
    
- Set Input File
    
    ```csharp
    //Upload file
    await page.setInputFiles('input[type="file"]', 'path/to/file.png');
    ```
    
- Hover over an element
    
    ```csharp
    await page.locator("<xpath here>").hover();
    
    ```
    
- Handle dialog
    - Handle dialog before action (ex: handle dialog before delete)
    - Global event: Test continues running without waiting for other dialog or the UI / DOM to update.
        
         ⇒ This causes race conditions and flaky tests.
        
    
    ```csharp
    // Global event listener
    page.on('dialog', async dialog => dialog.accept());
    ```
    
    ```csharp
       //Example: Run without waiting DOM update -> can't delete all odd case
        page.on("dialog", async (dialog) => dialog.accept());
    
        for (let i = 1; i <= todoItem; i++) {
          if (i % 2 !== 0) {
            await page.locator(xpathDelTaskbtn).nth(i).click();
          }
        }
    ```
    
    - Solution: When the popup shows up, automatically accept it
    
    ```csharp
    page.waitForEvent("dialog").then(d => d.accept())
    ```
    
- `Promise.all`: Do everything together and wait until all of them are done
    
    ```csharp
    // Start waiting for the dialog and click the button at the same time
    await Promise.all([
      page.waitForEvent("dialog").then(d => d.accept()),
      page.locator(deleteBtn).click(),
    ]);
    ```
    
- **`boundingBox()`:** Returns element position & size:
    - `null` if element is hidden or out of viewport
    - Used for clicking at a **specific position** (star rating, slider, range)

```tsx
{x, y, width, height} | null
```

- **`box!`**
    - TypeScript **non-null assertion**: `box!.width`
    - Means: “I’m sure box isn’t null”
    - Safe only if element is **visible**

```csharp
const box = await page.locator('#starRating').boundingBox();
await page.locator('#starRating').click({
  position: { x: box!.width * 0.8, y: box!.height / 2 }
});
```

- scrollIntoViewIfNeeded: used to scroll the page (or a scrollable container) just enough so that the element becomes visible in the viewport.
- `nth()`: Returns locator to the n-th matching element. It's **zero based**, `nth(0)` selects the first element.
    
    ```csharp
    const banana = await page.getByRole('listitem').nth(2);
    ```