'use strict';

describe('Profile Controller', function () {
  var scope, $httpBackend;

  beforeEach(module('bisaMobile'));

  beforeEach(inject(function ($rootScope, $controller, $compile, $templateCache, $state) {
    scope = $rootScope.$new();

    $controller('ProfileCtrl', { $scope: scope });
    $compile($templateCache.get('components/profile/pofile.html'))(scope);
  }));

  it('should have a Profile controller', function() {
    expect('bisaMobile.ProfileCtrl').toBeDefined();
  });

  it('should initiate successfully', inject(function($state) {
    expect(scope.profile.name).toBeNull();
    expect(scope.profile.photo).toBeNull();
    expect(scope.profile.address).toBeNull();
    expect(scope.profile.email).toBeNull();
    expect(scope.profile.phoneNumber).toBeNull();
    expect(scope.profile.accounts.length).toEqual(0);
  }));
});

