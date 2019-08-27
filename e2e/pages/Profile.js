var OR = require('../json/OR.json');
var customfunctions = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;

var Profile = function(){

  this.disableOrEnableVisibility = function(){
    element(by.model("profile.visibility")).click();
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[0]).then(function () {
        browser.sleep(3000);
        element(by.className("popup-body")).getText().then(function (text){
          console.log(text);
        });

        element(by.buttonText("Aceptar")).click();
      });
    });
    return this;
  };


  this.changeAccount = function(){
    var btnChangeAccount = element(by.binding("'profile.changeAccountDefault' | translate"));
    browser.actions().mouseMove(btnChangeAccount).perform();
    btnChangeAccount.click();
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[0]).then(function () {
        element(by.className("popup-body")).getText().then(function (text){
          console.log(text);
        });
        /* var items = element(by.className('account-content list')).all(by.tagName('input'));
        var item1 = items.get(1);
        browser.wait(EC.elementToBeClickable(item1), 5000);
        item1.click(); */

        browser.sleep(3000);
        element(by.buttonText("Aceptar")).click();
      });
    });
    browser.actions().mouseMove(btnChangeAccount).perform();
    return this;
  };
}

module.exports = new Profile();