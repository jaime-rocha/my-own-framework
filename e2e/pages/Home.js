var OR = require('../json/OR.json');
var customlocator = require('../util/CustomLocators.js');
var customfunction = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;

var Home = function () {

  this.getRequestFunds = function () {
    let requestFounds = element(by.ngClick2('redirectModule(0)'));
    browser.wait(EC.elementToBeClickable(requestFounds), 3000);
    return requestFounds.click();
  };

  this.getWithoutCardBank = function () {
    return element(by.css("button[data-ng-click='loadCardlessCashier()']")).click();
  }

};
module.exports =  new Home();
