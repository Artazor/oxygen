var context = require('../context');

describe('models', function() {
  it('should pass dummy test', function() {
    context.models.dummy.should.equal('MODELS');
  });
});