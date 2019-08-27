var OR = require('../json/OR.json');
var customlocator = require('../util/CustomLocators.js');
var customfunction = require('../util/CustomFunctions.js');
var EC = protractor.ExpectedConditions;

var Requests = function () {
	this.openFromStartMenu = function(){
		browser.sleep(5000);
		let redirectModule = element(by.ngClick2("redirectModule(0)"));
		browser.wait(EC.visibilityOf(redirectModule), 3000);
    redirectModule.click();
    return this;
  };
  
	this.selectContact = function () {
		element(by.ngClick("contactModal()")).click();
		let ionlist = element(by.className("contact-list select-contact-list disable-user-behavior")).all(by.tagName("ion-item"));
    let ionContact = ionlist.get(4);
    ionContact.getText().then(function (text){
      console.log(text);
    });
		ionContact.click();
		browser.sleep(5000);
		return this;
	};

	this.selectCurrency = function() {
		element(by.model("newRequest.currency.name")).click();
		browser.sleep(5000);
		let actionSheet = element(by.className("action-sheet-wrapper action-sheet-up")).all(by.tagName("button"));
		let btnBolivianos = actionSheet.get(0);
		browser.sleep(5000);
		btnBolivianos.click();
		return this;
	};

	this.createNewRequest = function(){
		browser.sleep(5000);
		var btnNewRequest = element(by.binding("userRequests.createRequestTitle' | translate"));
    btnNewRequest.getText().then(function(text){
      console.log(text)
		})
		browser.sleep(5000);
    btnNewRequest.click();
		//Seleccionar contacto
		this.selectContact();
    //Monto a solicitar
		element(by.model("newRequest.amount")).sendKeys("20");
		//Seleccionar tipo de moneda
		this.selectCurrency();
    //Motivo de la solicitud
		element(by.model("newRequest.reason")).sendKeys("Probando e2e");
    browser.sleep(5000);
    
		element(by.binding("'global.next' | translate")).click();
		element(by.binding("'global.send' | translate")).click();
    browser.getAllWindowHandles().then(function (handles) {
      browser.switchTo().window(handles[0]).then(function () {
        element(by.className("popup-body")).getText().then(function (text){
          console.log(text);
        });
        browser.sleep(3000);
        element(by.buttonText("OK")).click();
      });
    });
		return this;
	};

	this.cancelNewRequest = function(){
		browser.sleep(3000);
		var btnNewRequest = element(by.binding("userRequests.createRequestTitle' | translate"));
    btnNewRequest.getText().then(function(text){
      console.log(text)
		})
		browser.sleep(3000);
		btnNewRequest.click();
		this.selectContact();
    element(by.model("newRequest.amount")).sendKeys("20");
		this.selectCurrency();
		element(by.model("newRequest.reason")).sendKeys("Probando e2e");
		browser.sleep(3000);
		element(by.binding("'global.next' | translate")).click();
		browser.sleep(3000);
    //element(by.binding("'global.cancel' | translate")).click();
    let btnCancel = element(by.ngClick("cancelTransferRequest()"));
    browser.wait(EC.visibilityOf(btnCancel), 3000)
    btnCancel.click();
		return this;
	};
}

module.exports = new Requests();