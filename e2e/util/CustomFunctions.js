var EC = protractor.ExpectedConditions;

var CustomFunctions = function () {

  this.elementDisplayedByClassName = function (classname){
     return element.all(by.className(classname)).filter(function (elm){
      return elm.isDisplayed().then(function (isDisplayed){
        return isDisplayed;
       });
     });
  };

  this.elementDisplayedByModel = function(model){
    return element.all(by.model(model)).filter(function (elm){
      return elm.isDisplayed().then(function (isDisplayed){
        return isDisplayed;
      });
    });
  };

  this.elementDisplayedByBinding = function(binding) {
    return element.all(by.binding(binding)).filter(function (elm){
      return elm.isDisplayed().then(function (isDisplayed){
        return isDisplayed;
      });
    });
  };

  this.elementDisplayedByName = function(name) {
    return element.all(by.name(name)).filter(function (elm){
      return elm.isDisplayed().then(function (isDisplayed){
        return isDisplayed;
      });
    });
  };

  this.isElementPresentByClassName = function(classname){
    return element(by.className(classname)).isPresent().then(function (isPresent){
      return isPresent;
    });
  };

  this.isElementPresentByModel = function(model){
    return element(by.model(model)).isPresent().then(function (isPresent){
      return isPresent;
    });
  };

  this.isElementDisplayedonMenu = function (classname) {
    return element(by.className(classname)).isDisplayed().then(function (isDisplayed){
      return isDisplayed;
    });
  };

  this.getListOfElements = function (classname){
    return element(by.className(classname)).all(by.tagName("ion-item"));
  }

};
module.exports = new CustomFunctions();
