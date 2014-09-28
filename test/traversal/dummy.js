var context = require('../context');

describe('traversal', function() {
  it('should pass dummy test', function() {
    context.traversal.dummy.should.equal('TRAVERSAL');
  });
});