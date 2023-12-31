const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    if (!alphabet || typeof alphabet !== 'string' || alphabet.length !== 26) {
      return false;
    }

    const uniqueChars = [...new Set(alphabet)];
    if (uniqueChars.length !== 26) {
      return false; 
    }

    const standardAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const inputLower = input.toLowerCase();

    let result = '';

    for (let i = 0; i < inputLower.length; i++) {
      const char = inputLower[i];

      if (char === ' ') {
        result += ' ';
      } else if (char.match(/[a-z]/)) {
        const index = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
        result += encode ? alphabet[index] : standardAlphabet[index];
      } else {
       
        const specialCharIndex = encode ? standardAlphabet.indexOf(char) : alphabet.indexOf(char);
        result += encode ? alphabet[specialCharIndex] : standardAlphabet[specialCharIndex];
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
