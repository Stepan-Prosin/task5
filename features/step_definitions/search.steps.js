const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const {clickElement, putText, getText } = require("../../lib/commands.js");

Before(async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After(async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

Given("user is on main page", async function () {
  return await this.page.goto(`https://qamid.tmweb.ru/client/index.php`, {
    setTimeout: 20000,
  });
},20000);

When("user buy ticket on the chosen first film",{ timeout: 20000 }, async function () {
  await clickElement(this.page, "nav a + a");
  await clickElement(this.page,'[data-seance-id="217"]')
  await clickElement(this.page,'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(2) > span:nth-child(3)');
  await clickElement(this.page,'section  button');
},20000);

Then("user sees message {string}", async function (string) {
  await this.page.waitForSelector("h2",{ timeout: 50000 });
  const actual = await getText(this.page,"body > main > section > header > h2");
  const expected = await string;
  expect(actual).contains(expected);
},20000);
When("user buy ticket on the chosen second film",{ timeout: 20000 }, async function () {
  await clickElement(this.page, "nav a + a + a + a");
  await clickElement(this.page,'[data-seance-id="190"]')
  await clickElement(this.page,'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(5) > span:nth-child(6)');
  await clickElement(this.page,'section  button');
},20000);

Then("user sees new message {string}",{ timeout: 20000 }, async function (string) {
  await this.page.waitForSelector("h2",{ timeout: 50000 });
  const actual = await getText(this.page,"p:nth-child(9)");
  const expected = await string;
  expect(actual).contains(expected);
},20000);
When("user buy again ticket on the  second film but on purchased seat",{ timeout: 20000 }, async function () {
  await clickElement(this.page, "nav a + a + a + a");
  await clickElement(this.page,'[data-seance-id="190"]')
  await clickElement(this.page,'body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(4) > span:nth-child(6)');
  await clickElement(this.page,'section  button');
},20000);

Then("user sees wrong message {string}",{ timeout: 20000 }, async function (string) {
  await this.page.waitForSelector("h2",{ timeout: 50000 });
  const actual = await getText(this.page,"h2");
  const expected = await string;
  expect(actual).contains(expected);
},20000);
