var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var menu = require('../../pages/Menu.js');
var withoutcardbank = require('../../pages/WithoutCardBank.js');
var home = require('../../pages/Home.js');

var customfunction = require('../../util/CustomFunctions.js');

describe("Escenario: Usuario habilita cajero sin tarjeta", function() {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
  });

  it("BNT-1643 - Verificar que se pueda acceder a pantalla Cajero S/T correctamente", function () {

    menu.openCloseMenu();
    menu.getWithoutCardBank();
    let keyMobileTitle = customfunction.elementDisplayedByClassName("title ng-binding");
    expect(keyMobileTitle.getText()).toMatch("Clave Móvil");

    withoutcardbank.goBack();
    home.getWithoutCardBank();
    expect(keyMobileTitle.getText()).toMatch("Clave Móvil");
  });
});
