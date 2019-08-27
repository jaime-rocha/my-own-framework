var OR = require('../json/OR.json');
var customlocator = require('../util/CustomLocators.js');
var customfunction = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;

var Contacts = function () {

  this.searchContact = function(name) {
    element(by.model("searchContact")).sendKeys(name);
    browser.sleep(3000);
    return this;
  };

  this.selectContact = function (index) {
    let ionlist = element(by.className("contact-list disable-user-behavior")).all(by.tagName("ion-item"));
    let ionContact = ionlist.get(index);
    ionContact.getText().then(function (text){
      console.log(text);
    });

    ionContact.click();
    return this;
  };

  this.getAddAccount = function () {

    let chooseAccount = element(by.ngClick("chooseAccount()"));
    browser.wait(EC.visibilityOf(chooseAccount), 3000);
    chooseAccount.click();
    return this;
  };

  this.addNewAccount = function (accountName, phone) {

    browser.getAllWindowHandles().then(function (handles){
      browser.switchTo().window(handles[0]).then(function () {
        element(by.buttonText("Añadir Cuenta")).click();
      });
    });

    let mobileDraftOption = element(by.className("radio-content"));
    browser.wait(EC.elementToBeClickable(mobileDraftOption), 3000);
    mobileDraftOption.click();

    let nextButton = element(by.ngClick("next(1)"));
    browser.wait(EC.visibilityOf(nextButton), 3000);
    nextButton.click();

    let nameField = element(by.model("newAccount.recipient.name"));
    let lastNameField = element(by.model("newAccount.recipient.fatherLastName"));
    let motherLastNameField = element(by.model("newAccount.recipient.motherLastName"));

    nameField.getAttribute('value').then(function (text){
      if(text === ""){
        nameField.sendKeys("Pepito");
      }
      else{
        console.log("Ya hay un texto: "+ text);
      }
    });

    lastNameField.getAttribute('value').then(function (text){
      if(text === ""){
        lastNameField.sendKeys("Perez");
      }
      else{
        console.log("Ya hay un texto: "+ text);
      }
    });

    motherLastNameField.getAttribute('value').then(function (text){
      if(text === ""){
        motherLastNameField.sendKeys("Pinto");
      }
      else{
        console.log("Ya hay un texto: "+ text);
      }
    });

    element(by.model("newAccount.recipient.docTypeName")).click();
    element(by.repeater("b in buttons").row(0)).click();
    element(by.model("newAccount.recipient.docNumber")).sendKeys("8757984");

    let nextButton2 = customfunction.elementDisplayedByClassName("button button-block button-positive button-action ng-binding");
    nextButton2.click();

    let addNickBankField = customfunction.elementDisplayedByModel("newAccount.alias");
    addNickBankField.sendKeys(accountName);

    element(by.model("newAccount.recipient.phone")).sendKeys(phone);

    let addAccountButton = customfunction.elementDisplayedByClassName("button button-block button-positive button-action ng-binding");
    addAccountButton.click();
    return this;
  };

  this.addNewContact = function (name, lastname, phone) {

    let addContactButton = element(by.ngClick("addContact()"));
    browser.wait(EC.elementToBeClickable(addContactButton), 3000);
    addContactButton.click();

    //Adding new contact
    let nameField = element(by.model("newContact.firstName"));
    let lastNameField = element(by.model("newContact.lastName"));
    let phoneField = element(by.model("newContact.phone"));

    nameField.getAttribute('value').then(function (text) {
        if (text === "") {
          nameField.sendKeys(name);
        }
        else {
          console.log("Ya hay un texto: " + text);
        }
      });

    lastNameField.getAttribute('value').then(function (text){
      if(text === ""){
          lastNameField.sendKeys(lastname);
      }
      else{
          console.log("Ya hay un texto: "+ text);
      }
    });

    phoneField.getAttribute('value').then(function (text){
      if(text === ""){
          phoneField.sendKeys(phone);
      }
      else{
          console.log("Ya hay un texto: "+ text);
       }
    });

    element(by.buttonText("Añadir")).click();

    browser.getAllWindowHandles().then(function (handles){
      browser.switchTo().window(handles[0]).then(function () {
        element(by.buttonText("OK")).click();
      });
    });

    if(phone === "72235156") {
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]).then(function () {
          element(by.buttonText("Sí")).click();
        });

        browser.switchTo().window(handles[0]).then(function () {
          element(by.buttonText("Aceptar")).click();
        });
      });
    }

     return this;
  };

  this.deleteContact = function (index) {
    let ionlist = element(by.className("contact-list disable-user-behavior")).all(by.tagName("ion-item"));
    let ionContact = ionlist.get(index);
    browser.wait(EC.visibilityOf(ionContact), 3000);
    ionContact.getLocation().then(function (location){

      var startLocation = {
        x: location.x + 300,
        y: parseInt(location.y, 10) + 50
      };

      var newLocation = {
        x: startLocation.x - 100,
        y: parseInt(startLocation.y, 10)

      };

      browser.driver.touchActions()
        .tapAndHold(startLocation)
        .move(newLocation)
        .perform();
    });

    let deleteButton  = element(by.ngClick("deleteContact(contact)"));
    browser.sleep(3000);
    deleteButton.click();

    browser.getAllWindowHandles().then(function (handles){
      browser.switchTo().window(handles[0]).then(function () {
        element(by.buttonText("Sí")).click();
      });

      browser.switchTo().window(handles[0]).then(function () {
        element(by.buttonText("Aceptar")).click();
      });
    });
    return this;
  };

  this.getNewAccountSuccessPopUp = function () {
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[0]).then(function () {

        element(by.className("popup-body")).getText().then(function (text){
          console.log(text);
        });

        element(by.buttonText("OK")).click();
      });
    });
    return this;
  };
};
module.exports = new Contacts();
