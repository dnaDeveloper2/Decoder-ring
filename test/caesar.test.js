// Write your tests here!
const { caesar } = require('../src/caesar');
const expect = require('chai').expect;

describe('caesar', () => {
  it('should encode a message with positive shift', () => {
    expect(caesar('thinkful', 3)).to.equal('wklqnixo');
  });

  it('should decode a message with negative shift', () => {
    expect(caesar('thinkful', -3)).to.equal('qefkhcri');
  });

  it('should maintain spaces and handle special characters', () => {
    expect(caesar('This is a secret message!', 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });

  it('should ignore capital letters', () => {
    expect(caesar('THINKFUL', 3)).to.equal('wklqnixo');
  });

  // Add more test cases as needed
});
