var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var menu = require('../../pages/Menu.js');
var contacts = require('../../pages/Contacts.js');
var EC = protractor.ExpectedConditions;

describe("Escenario: Usuario puede añadir nueva cuenta de banco", function () {

  beforeEach(function () {

    browser.get(OR.testsinurl);
    loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);


  });
/*
  it("BNT-1695 - Verificar que Añadir Cuenta se abre desde el Perfil de Contacto", function () {

    menu.openCloseMenu();
    menu.getContacts();
    contacts.selectContact(0);
    contacts.getAddAccount();
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[0]).then(function () {
        let addAccountButton = element(by.buttonText("Añadir Cuenta"));
        expect(addAccountButton.isPresent()).toEqual(true);
      });
    });
  });
*/
  it("BNT-1704 - Verificar 'Crear beneficiario en eBISA' es exitoso", function () {

    menu.openCloseMenu();
    menu.getContacts();
    contacts.addNewContact("Cristian Denis", "Mamani Torres", "72235156");
    contacts.searchContact("Cristian");
    contacts.selectContact(0);
    contacts.getAddAccount();
    contacts.addNewAccount("BISA Account1", "78457329");
    loginFlow.insertSentSMS(OR.locators.login.sms);
    contacts.getNewAccountSuccessPopUp();

    let chooseAccount = element(by.ngClick("chooseAccount()"));
    browser.wait(EC.visibilityOf(chooseAccount), 3000);
    chooseAccount.click();

    let newAccount = element(by.binding("b.text"));
    expect(newAccount.getText()).toContain("BISA Account1");
    expect(newAccount.getText()).toContain("78457329");
  });

  afterAll(function () {

    contacts.deleteContact(0);

  });
});
