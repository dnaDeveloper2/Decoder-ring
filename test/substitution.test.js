const { substitution } = require('../src/substitution');
const expect = require('chai').expect;

describe('substitution', () => {
  it('should encode a message by using the given substitution alphabet', () => {
    expect(substitution('thinkful', 'xoyqmcgrukswaflnthdjpzibev')).to.equal('jrufscpw');
  });

  it('should decode a message by using the given substitution alphabet', () => {
    expect(substitution('jrufscpw', 'xoyqmcgrukswaflnthdjpzibev', false)).to.equal('thinkful');
  });


  it('should preserve spaces', () => {
    expect(substitution('message', '$wae&zrdxtfcygvuhbijnokmpl')).to.equal('y&ii$r&');
  });

  it('should return false for invalid alphabet length', () => {
    expect(substitution('thinkful', 'short')).to.equal(false);
  });

  it('should return false for duplicate characters in the alphabet', () => {
    expect(substitution('thinkful', 'abcabcabcabcabcabcabcabcyz')).to.equal(false);
  });

  // Add more test cases as needed
});
