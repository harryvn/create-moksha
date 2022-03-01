const common = require("../utils/common");
const log = require("../utils/logger");
const config = require("config");

const username = config.get("username");
const password = config.get("password");

const USERNAME = "username";
const PASSWORD = "password";
const LOGIN = "//form/button[@type='submit']";
const LOGOUT = "//div[@class='example']/a";

class LoginPage {
  async loginToApp() {
    await common.getSendKeys(USERNAME, "id", "username textbox", username);
    await common.getSendKeys(PASSWORD, "id", "username textbox", password);
    await common.getClick(LOGIN, "xpath", "login button");
  }

  async logoutFromApp() {
    await common.getClick(LOGOUT, "xpath", "logout button");
  }
}

module.exports = new LoginPage();
