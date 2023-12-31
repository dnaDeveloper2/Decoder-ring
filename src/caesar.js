const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (shift === 0 || shift < -25 || shift > 25) {
      return false;
    }

    const lowerCaseInput = input.toLowerCase();

    const result = Array.from(lowerCaseInput).map((char) => {
      if (char.match(/[a-z]/)) {
        const code = char.charCodeAt(0);
        let shiftedCode;

        if (encode) {
      
          shiftedCode = code + shift;
          if (shiftedCode < 97) {
            shiftedCode += 26;
          } else if (shiftedCode > 122) {
            shiftedCode -= 26;
          }
        } else {
          
          shiftedCode = code - shift;
          if (shiftedCode < 97) {
            shiftedCode += 26;
          } else if (shiftedCode > 122) {
            shiftedCode -= 26;
          }
        }

        return String.fromCharCode(shiftedCode);
      } else {
        return char;
      }
    });

    return result.join('');
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
