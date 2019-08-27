var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var menu = require('../../pages/Menu.js');
var contacts = require('../../pages/Contacts.js')

var customfunction = require('../../util/CustomFunctions.js');

describe("Escenario: Usuario puede gestionar contactos, favoritos, Bisamigos y familia", function() {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
  });

  it("BNT-1683 - Verificar Contactos se abre desde Menu principal y muestra lista de contactos, favoritos, Bisamigos y Familia", function () {

    menu.openCloseMenu();
    menu.getContacts();
    let contactsTitle = customfunction.elementDisplayedByClassName("title title-center header-item");
    expect(contactsTitle.getText()).toMatch("Contactos");

    let contactList = customfunction.getListOfElements("collection-repeat-container");
    contactList.then(function (elements){
      for(let i = 0; i < elements.length; ++i){
        contactList.get(i).getText().then(function (text){
           console.log("Contact #" + i + ": " + text);
        });
      }
    });
    expect(contactList.count()).not.toBe(0);

    element(by.buttonText("Favoritos")).click();

  });

});
