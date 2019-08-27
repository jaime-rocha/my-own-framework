
var OR = require('../json/OR.json');
var customfunctions = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;

var LoginFlow = function(){

  this.loginWithCredentials = function(ci, bdate){
    element(by.model(OR.locators.login.cinumber)).sendKeys(ci);
    element(by.model(OR.locators.login.birthdate)).sendKeys(bdate);
    element(by.buttonText(OR.locators.login.nextbuttontext)).click();
    return this;
  };

  this.insertSentSMS = function (sms) {
    element(by.model(OR.locators.login.token)).sendKeys(sms);
    element(by.buttonText(OR.locators.login.enterbuttontext)).click();

    if(sms !== OR.locators.login.sms){
      browser.getAllWindowHandles().then(function (handles) {
        browser.switchTo().window(handles[0]).then(function () {

          element(by.className("popup-body")).getText().then(function (text){
            console.log(text);
          });

          element(by.buttonText(OR.locators.login.acceptbuttontext)).click();
        });
      });
    }

    return this;
  };

  this.createSecurityPin = function(spin){
    element(by.model(OR.locators.login.pinsecurity)).sendKeys(spin);
    element(by.buttonText(OR.locators.login.createbuttontext)).click();
    return this;
  };

  this.rewriteSecurityPin = function(spin){
    element(by.model(OR.locators.login.pinsecurity2)).sendKeys(spin);
    element(by.buttonText(OR.locators.login.enterbuttontext)).click();
    browser.sleep(3000);
    return this;
  };

  this.chooseVisibilityMode = function(visibility_mode){
    element(by.binding(visibility_mode)).click();
    element(by.buttonText(OR.locators.login.nextbuttontext)).click();
  };

  this.loginToApp = function(ci, bdate, pin){

    let pinTextField =  customfunctions.isElementPresentByModel(OR.locators.login.pinsecurity2);

    if(pinTextField === true){

      element(by.model(OR.locators.login.pinsecurity2)).sendKeys(pin);
      element(by.buttonText(OR.locators.login.enterbuttontext)).click();
      browser.sleep(3000);
    }
    else {
      //In case of not to find login screen, PIN is inserted directly

      element(by.model(OR.locators.login.cinumber)).sendKeys(ci);
      element(by.model(OR.locators.login.birthdate)).sendKeys(bdate);
      element(by.buttonText(OR.locators.login.nextbuttontext)).click();
      browser.sleep(3000);

      //Insert valid pin
      element(by.model(OR.locators.login.pinsecurity2)).sendKeys(pin);
      element(by.buttonText(OR.locators.login.enterbuttontext)).click();
      browser.sleep(3000);

      //Privacity, accept or not visibility to other BISA clients
      element(by.binding(OR.locators.login.acceptvisibility)).click();
      element(by.binding(OR.locators.login.nextbuttonbind)).click();
      browser.sleep(3000);

      //Getting pop up to select default bank account
      element(by.buttonText(OR.locators.login.acceptbuttontext)).click();
      browser.sleep(3000);
    }

    return this;
  };

  this.loginFirstTime = function(ci, bdate, sms, pin){
    element(by.model(OR.locators.login.cinumber)).sendKeys(ci);
    element(by.model(OR.locators.login.birthdate)).sendKeys(bdate);
    element(by.buttonText(OR.locators.login.nextbuttontext)).click();
    browser.sleep(2000);

    //Next screen - insert sms code
    element(by.model(OR.locators.login.token)).sendKeys(sms);
    element(by.buttonText(OR.locators.login.enterbuttontext)).click();
    browser.sleep(2000);

    //Next screen -  Create an own security PIN
    element(by.model(OR.locators.login.pinsecurity)).sendKeys(pin);
    element(by.buttonText(OR.locators.login.createbuttontext)).click();
    browser.sleep(2000);

    //Next screen - Re-write security PIN
    element(by.model(OR.locators.login.pinsecurity2)).sendKeys(pin);
    element(by.buttonText(OR.locators.login.confirmbuttontext)).click();
    browser.sleep(2000);

    //Next screen - Privacity, accept or not visibility to other BISA clients
    element(by.binding(OR.locators.login.acceptvisibility)).click();
    element(by.buttonText(OR.locators.login.nextbuttontext)).click();
    browser.sleep(2000);

    //Getting pop up to select default bank account
    element(by.buttonText(OR.locators.login.acceptbuttontext)).click();
    browser.sleep(3000);
    return this;
  };

};

module.exports = new LoginFlow();
