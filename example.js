const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('http://localhost:5000/')
  await page.screenshot({ path: 'ya.png' })
  await page.click('button')
  let element = await page.$('#inside3')

  console.log(element)
  // await browser.close()
})()
