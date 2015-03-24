
var keyword = require('..');
var assert = require('assert');

describe('closest-color-keyword', function() {

  it('should return a string', function() {
    var name = keyword('#f00');
    assert.equal(typeof name, 'string');
  });

  it('should return red', function() {
    var name = keyword('#f00');
    assert.equal(name, 'red');
  });


  it('should return fuchsia', function() {
    var name = keyword('#ff00ff');
    assert.equal(name, 'fuchsia');
  });

  it('should return lime', function() {
    var name = keyword('#00ff00');
    assert.equal(name, 'lime');
  });

  it('should return brown', function() {
    var name = keyword('#a52a2a');
    assert.equal(name, 'brown');
  });

  it('should return chocolate', function() {
    var name = keyword('#d2691e');
    assert.equal(name, 'chocolate');
  });

});

