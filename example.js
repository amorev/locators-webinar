const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('http://localhost:5000/')
  await page.screenshot({ path: 'ya.png' })
  await page.click('button')
  let element = await page.$x('//div[@id="inside3"]')
  let value = await page.evaluate(el => el.classList, element[0])
  const zeroClass = value[0]
  console.log(zeroClass)
  if (zeroClass !== 'isActive') {
    console.log('error')
  } else {
    console.log('success')
  }
  // await browser.close()
})()
