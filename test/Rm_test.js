/* global describe it */
const rpn = require('reverse-polish-notation');
const assert = require('assert');

describe('reverse polish notation', () => {
  it('should be null', () => {
    assert(!rpn('4 2'));
  });
  it('should be value', () => {
    assert.equal(rpn('4 2 +'), 6);
  });
});
