var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var Menu = require('../../pages/Menu.js');
describe("Escenario: Usuario puede acceder a todas las opciones del menu", function() {

  beforeAll(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
  });
  beforeEach(function () {

    Menu.openCloseMenu();

  });

  it("Verificar usuario puede ingresar a Tu Perfil ", function () {

    expect(Menu.getProfile()).toMatch("Perfil");

  });

  it("Verificar usuario puede ingresar a Contactos", function () {

    expect(Menu.getContacts()).toMatch("Contactos");

  });

  it("Verificar usuario puede ingresar a Ultimos Movimientos", function () {

    expect(Menu.getLastMovements()).toMatch("Últimos Movimientos");

  });

  it("Verificar usuario puede ingresar a Solicitar Fondos", function () {

    expect(Menu.getRequestFunds()).toMatch("Solicitudes");

  });

  it("Verificar usuario puede ingresar a Transferencias", function () {

    expect(Menu.getTransfers()).toMatch("Transferencias");

  });

  it("Verificar usuario puede ingresar a Giro Movil", function () {

    expect(Menu.getMobileOrder()).toMatch("Giro Móvil");

  });

});
