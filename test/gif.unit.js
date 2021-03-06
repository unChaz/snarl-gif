var assert = require('chai').assert;

var plugin = require('../');

describe('snarl-gif', function() {
  describe('#interpret()', function () {
    it('should exist as a function', function () {
      assert.equal(typeof plugin.gif, 'function');
    });
    it('should parse an input', function (done) {
      var input = {
        parsed: 'sure'
      };

      plugin.gif(input, function(err, msg) {
        assert.isNull(err);
        assert.isOk(msg)
        done(err);
      });
    });
  });
});
