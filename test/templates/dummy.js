var context = require('../context');

describe('templates', function() {
  it('should pass dummy test', function() {
    context.templates.dummy.should.equal('TEMPLATES');
  });
});