var OR = require('../../json/OR.json');
var loginFlow = require('../../pages/LoginFlow.js');
var using = require('jasmine-data-provider');

describe("Escenario: Usuario se loguea a la aplicacion", function() {
    beforeEach(function () {

      browser.get(OR.testsinurl);
    });
/*
    it("BNT-1634 - Verificar despues de 2 equivocaciones en insertar codigo de SMS, al tercer intento continua flujo de login exitoso", function () {

       loginFlow.loginWithCredentials(OR.locators.login.ci, OR.locators.login.bdate);
       loginFlow.insertSentSMS(OR.locators.login.wrongSMS1);
       loginFlow.insertSentSMS(OR.locators.login.wrongSMS2);
       loginFlow.insertSentSMS(OR.locators.login.sms);
       var lockIcon = element(by.className("icon icon-lock"));
       expect(lockIcon.isPresent()).toEqual(true);
      });
*/
    it("BNT-1625 - Verificar usuario se loguee por primera vez exitosamente", function () {

      loginFlow.loginFirstTime(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.sms, OR.locators.login.pin);
      var elementHome = element(by.className("logo"));
      expect(elementHome.isPresent()).toEqual(true);

    });

    it("BNT-1626 - Verificar usuario se loguee exitosamente", function () {

      loginFlow.loginToApp(OR.locators.login.ci, OR.locators.login.bdate, OR.locators.login.pin);
      var elementHome = element(by.className("logo"));
      expect(elementHome.isPresent()).toEqual(true);

    });
});
