var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var menu = require('../../pages/Menu.js');
var home = require('../../pages/Home.js');

var customfunction = require('../../util/CustomFunctions.js');

describe("Escenario: Usuario habilita cajero sin tarjeta", function() {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
  });

  it("Perfil de Co")

}
