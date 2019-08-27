'use strict';

describe('Pin Creation Controller', function () {
  var scope, $httpBackend;

  beforeEach(module('bisaMobile'));

  beforeEach(inject(function ($rootScope, $controller, $compile, $templateCache, $state) {
    scope = $rootScope.$new();

    $controller('SignInCtrl', { $scope: scope });
    $compile($templateCache.get('components/login/sign-in.html'))(scope);
  }));

  it('should have a SignIn controller', function() {
    expect('bisaMobile.SignInCtrl').toBeDefined();
  });

  it('should initialize successfully', inject(function($state) {
    expect(scope.user.pin1).toBeNull();
    expect(scope.user.pin2).toBeNull();
  }));
});

