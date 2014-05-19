'use strict';

describe('Service: Usersocket', function () {

  // load the service's module
  beforeEach(module('socketClientApp'));

  // instantiate service
  var Usersocket;
  beforeEach(inject(function (_Usersocket_) {
    Usersocket = _Usersocket_;
  }));

  it('should do something', function () {
    expect(!!Usersocket).toBe(true);
  });

});
