module.exports = {
  sampleTestDemo(browser) {
    browser
      .init()
      .waitForElementPresent('body')
      .end();
  }
}
