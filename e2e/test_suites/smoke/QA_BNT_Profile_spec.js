var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var Menu = require('../../pages/Menu.js');
var Profile = require('../../pages/Profile.js')
describe("Escenario: Perfil de usuario", function() {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
  });

  it("Verificar usuario puede ver su perfil de usuario", function () {

    Menu.openCloseMenu();
    Menu.getProfile();
    var elementProfile = element(by.id("profile-picture"));
    expect(elementProfile.isPresent()).toEqual(true);
  });

  it("Deshabilitar Visibilidad", function () {

    Menu.openCloseMenu();
    Menu.getProfile();
    browser.sleep(3000);
    Profile.disableOrEnableVisibility();
    expect(element(by.className("ng-untouched ng-valid ng-empty ng-dirty ng-valid-parse")).isPresent()).toEqual(true);
  });

  it("Habilitar Visibilidad", function () {

    Menu.openCloseMenu();
    Menu.getProfile();
    browser.sleep(3000);
    Profile.disableOrEnableVisibility();
    Profile.disableOrEnableVisibility();
    expect(element(by.className("ng-untouched ng-valid ng-dirty ng-valid-parse ng-not-empty")).isPresent()).toEqual(true);
  });

  it("Cambiar Cuenta por defecto", function (){
    Menu.openCloseMenu();
    Menu.getProfile();
    browser.sleep(3000);
    Profile.changeAccount();
    expect(element(by.binding("'profile.changeAccountDefault' | translate")).isPresent()).toBe(true);
  });
});
