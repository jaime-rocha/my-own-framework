var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var menu = require('../../pages/Menu.js');
var home = require('../../pages/Home.js');
var contacts = require('../../pages/Contacts.js');
var EC = protractor.ExpectedConditions;

describe("Escenario: Usuario puede solicitar fondos a un contacto BISAmigo", function () {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);


  });

  it("BNT-1662 - Verificar que se realice una nueva solicitud a un contacto BISA exitosamente seleccionando el contacto de la lista", function () {

    home.getRequestFunds();

  });
});
