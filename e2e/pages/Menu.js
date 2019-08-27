
var OR = require('../json/OR.json');
var customlocator = require('../util/CustomLocators.js');
var customfunction = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;
var listMenu = customfunction.getListOfElements("list");

var Menu = function(){

  this.openCloseMenu = function(){
    let toggleButton = customfunction.elementDisplayedByClassName("button button-icon button-clear ion-navicon");
    browser.sleep(3000);
    toggleButton.click();
    return this;
  };

  this.getProfile = function () {

    let profileOption = customfunction.elementDisplayedByClassName("icon icon-category icon-user");
    profileOption.click();

    let titleProfile = customfunction.elementDisplayedByClassName("title title-center header-item");
    titleProfile.getText().then(function (text){
      console.log("Result is: " + text);
    });

    return titleProfile.getText();
  };

  this.getContacts = function () {

    var contactOption = customfunction.elementDisplayedByClassName("icon icon-category icon-contacts");
    contactOption.click();

    return this;
  };

  this.getLastMovements = function () {

    var lastMovementsOption = customfunction.elementDisplayedByClassName("icon icon-category icon-movimientos");
    lastMovementsOption.click();

    var titleLastMovements = customfunction.elementDisplayedByClassName("title title-center header-item");
    titleLastMovements.getText().then(function (text){
      console.log("Result is: " + text);
    });

    return titleLastMovements.getText();
  };

  this.getRequestFunds = function () {

    var requestFundsOption = customfunction.elementDisplayedByClassName("icon icon-category icon-solicitudes");
    requestFundsOption.click();

    var titleRequestFunds = customfunction.elementDisplayedByClassName("title title-center header-item");
    titleRequestFunds.getText().then(function (text){
      console.log("Result is: " + text);
    });

    return titleRequestFunds.getText();
  };

  this.getTransfers = function () {

    var transfersOption = customfunction.elementDisplayedByClassName("icon icon-category icon-transferencia");
    transfersOption.click();

    var titleTranfers = customfunction.elementDisplayedByClassName("title title-center header-item");
    titleTranfers.getText().then(function (text){
      console.log("Result is: " + text);
    });

    return titleTranfers.getText();
  };

  this.getMobileOrder = function () {

    var mobileOrderOption = customfunction.elementDisplayedByClassName("icon icon-category icon-giro-movil");
    mobileOrderOption.click();

    var titleMobileOrder = customfunction.elementDisplayedByClassName("title title-center header-item");
    titleMobileOrder.getText().then(function (text){
      console.log("Result is: " + text);
    });

    return titleMobileOrder.getText();
  };

  this.getWithoutCardBank = function(){
    let cardBankOption = listMenu.get(11); //Sin tarjeta
    browser.actions().mouseMove(cardBankOption).perform();
    cardBankOption.click();
    return this;
  };

  this.logoutFromApp = function(closeOption) {

    let logoutOption = element(by.ngClick("logout()"));
    browser.actions().mouseMove(logoutOption).perform();
    logoutOption.click();
    browser.getAllWindowHandles().then(function (handles){
      browser.switchTo().window(handles[0]).then(function () {
        element(by.buttonText(closeOption)).click();
      });
    });

    return this;
  };
};
module.exports = new Menu();
