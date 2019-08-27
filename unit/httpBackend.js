'use strict';

/* Request interceptors */
var
  authPostRequest;
/* Request interceptors */


/* API Matchers */
var
// https://api.zatar.com/v1/authentokens
  authentication_rx = new RegExp('^http*.*\/loginMobile/login'),

/* API Matchers */

// Predefined objects
var currentUser;

beforeEach(module('bisaModule'));
beforeEach(inject(function ($httpBackend) {

  // We should clear login credentials before each


/******************************************************/
/* API Components
/******************************************************/

/* AUTHENTICATION */
  var authMock = {
      'message': 'OK'
    },
    authMockHeaders = {};

  authPostRequest = $httpBackend.whenPOST(authentication_rx).respond(authMock, authMockHeaders);
/* AUTHENTICATION */

}));

// Initialize main app object - in this case should be currentUser
beforeEach(inject(function ($httpBackend) {
}));



