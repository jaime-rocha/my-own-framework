'use strict';

describe('Device Reg', function () {
  var scope, $httpBackend;

  beforeEach(module('bisaMobile'));

  beforeEach(inject(function ($rootScope, $controller, $compile, $templateCache, $state) {
    scope = $rootScope.$new();

    $controller('WelcomeCtrl', { $scope: scope });
    $compile($templateCache.get('components/login/sign-in.html'))(scope);
  }));

  it('should have a SignIn controller', function() {
    expect('bisaMobile.WelcomeCtrl').toBeDefined();
  });

  it('should initialize successfully', inject(function($state) {
    expect(scope.user.celNumber).toBeNull();
  }));
});

