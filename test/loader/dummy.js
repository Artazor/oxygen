var context = require('../context');

describe('loader', function() {
  it('should pass dummy test', function() {
    context.loader.dummy.should.equal('LOADER');
  });
});