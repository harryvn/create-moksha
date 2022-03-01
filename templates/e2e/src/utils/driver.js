const { Builder } = require("selenium-webdriver");
const log = require("./logger");
const config = require("config");

const browser = config.get("browser");
const seleniumAddress = "http://localhost:4444";

let driver = new Builder()
  .forBrowser(browser)
  .usingServer(seleniumAddress)
  .build();

class Driver {
  constructor() {
    global.driver = driver;
    log.info("driver Initialized");
    log.info("Opening " + browser + " browser");
  }
}

module.exports = new Driver();
