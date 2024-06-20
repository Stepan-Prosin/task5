const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://qamid.tmweb.ru/client/index.php");
});

afterEach(() => {
  page.close();
});

describe("qamid.tmweb.ru tests", () => {

  test.only("positiv test1", async () => {
    await clickElement(page, "nav a + a");
    await clickElement(page,'[data-seance-id="217"]')
    await clickElement(page,'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(2) > span:nth-child(3)');
    await clickElement(page,'section  button');
    await page.waitForSelector("h2",{ timeout: 50000 });
    const title2 = await getText(page,"body > main > section > header > h2");
  expect(title2).toEqual('Вы выбрали билеты:');
  },50000);

  test.only("negativ1", async () => {
    await clickElement(page, "nav a + a + a + a");
    await clickElement(page,'[data-seance-id="190"]')
    await clickElement(page,'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(6)');
    await clickElement(page,'section  button');
    await clickElement(page,'section  button');
    await page.waitForSelector("h2",{ timeout: 50000 });
    const title2 = await getText(page,"h2");
  expect(title2).toEqual('Унесенные ветром.');
  },50000);

  test.only("positiv2", async () => {
    await clickElement(page, "nav a + a + a + a");
    await clickElement(page,'[data-seance-id="190"]')
    await clickElement(page,'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)');
    await clickElement(page,'section  button');

    await page.waitForSelector("h2",{ timeout: 50000 });
    const title2 = await getText(page,"p:nth-child(9)");
  expect(title2).toEqual('Приятного просмотра!');
  },50000);
});

