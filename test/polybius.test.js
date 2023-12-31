const { polybius } = require('../src/polybius');
const expect = require('chai').expect;

describe('polybius', () => {
  it('should encode a message by translating each letter to number pairs', () => {
    expect(polybius('message')).to.equal('23513434112251');
  });

  it('should decode a message by translating each pair of numbers to a letter', () => {
    expect(polybius('23513434112251', false)).to.equal('message');
  });

  it('should translate both "i" and "j" to 42', () => {
    expect(polybius('i j')).to.equal('42 42');
  });

  it('should decode "42" to "(i/j)"', () => {
    expect(polybius('42', false)).to.equal('i/j');
  });

  it('should maintain spaces during encoding', () => {
    expect(polybius('hello world')).to.equal('3251131343 2543241341');
  });

  it('should maintain spaces during decoding', () => {
    expect(polybius('3251131343 2543241341', false)).to.equal('hello world');
  });

  it('should return false if the input has an odd number of characters (excluding spaces) during decoding', () => {
    expect(polybius('2351343411225 17', false)).to.equal(false);
  });
  
});
