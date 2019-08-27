var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var Menu = require('../../pages/Menu.js');
describe("Escenario: Usuario sale de la aplicacion", function() {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
  });

  it("BNT-2655 - Verificar usuario puede salir correctamente de la aplicacion", function () {

    Menu.openCloseMenu();
    Menu.logoutFromApp("Sí");
    var elementHome = element(by.className("bisa-neo-login"));
    expect(elementHome.isPresent()).toEqual(true);
  });
});
