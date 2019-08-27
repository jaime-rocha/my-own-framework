var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var Menu = require('../../pages/Menu.js');
var customsFunctions = require('../../util/CustomFunctions.js');
var Requests = require('../../pages/Requests.js')
describe("Escenario: Solicitar fondos", function() {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
    Requests.openFromStartMenu();
  });

  it("Verificar usuario puede ingresar a solicitudes desde el menu inicio", function () {
    Requests.openFromStartMenu();
    browser.sleep(3000);
    var title = customsFunctions.elementDisplayedByClassName("title title-center header-item");
    title.getText().then(function(text){
      console.log(text);
    });
    expect(title.getText()).toMatch("Solicitudes");
  });

  it("Verificar usuario puede ingresar a solicitudes desde el menu", function () {

    Menu.openCloseMenu();
    Menu.getRequestFunds();
    var title = customsFunctions.elementDisplayedByClassName("title title-center header-item");
    title.getText().then(function(text){
      console.log(text);
    });
    expect(title.getText()).toMatch("Solicitudes");
  });

  it("Crear nueva solicitud", function(){
    Requests.createNewRequest();
    var tabActive = element.all(by.className("tab-item-active"));
    tabActive.getText().then(function(text){
      console.log(text);
    });
    var tabActive = customsFunctions.elementDisplayedByClassName("tab-item-active");
    tabActive.getText().then(function(text){
      console.log(text);
    });
    tabActive.getText().toMatch("Pendientes");
    browser.sleep(5000);
    let requestslist = element(by.className("disable-user-behavior")).all(by.tagName("ion-item"));
    let requestItem = requestslist.get(0);
    requestItem.getText().then(function (text){
      console.log(text);
    });
    requestItem.click();
    browser.sleep(3000);
    element(by.className("list list-detail")).all(by.className("item item-icon-left")).then(function(text){
      console.log(text);
    });
  });

  it("Cancelar proceso de crear nueva solicitud", function(){
    Requests.cancelNewRequest();
  });
});
