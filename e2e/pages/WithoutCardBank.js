var OR = require('../json/OR.json');
var customlocator = require('../util/CustomLocators.js');
var customfunction = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;

var WithoutCardBank = function () {

  this.goBack = function () {
    return element(by.ngClick("cancelCardless()")).click();
  }
};
module.exports = new WithoutCardBank();
