// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const polybiusSquare = {
      1: { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e'},
      2: { 1: 'f', 2: 'g', 3: 'h', 4: 'i/j', 5: 'k'},
      3: { 1: 'l', 2: 'm', 3: 'n', 4: 'o', 5: 'p'},
      4: { 1: 'q', 2: 'r', 3: 's', 4: 't', 5: 'u'},
      5: { 1: 'v', 2: 'w', 3: 'x', 4: 'y', 5: 'z'},
    }
    const message = input.toLowerCase().split('');
    
    if (encode){
      const encryptionArray = [];
      for (let i=0; i < message.length; i++ ){
        if (message[i] == " "){
          encryptionArray.push(" ");
        }else{
          for (let r = 1; r < 6; r++ ){
            for ( let c = 1; c < 6; c++){
              if(polybiusSquare[r][c].includes(message[i])){
                encryptionArray.push(c,r);
              }
            }
          }          
        }
      }
      return encryptionArray.join('')
    }else{
      let decodeString = ""
      let messageNoSpaces = message.filter((char) => char != ' ')
      if (messageNoSpaces.length % 2 !== 0){
        return false;
      }
      for (let i = 0; i < message.length - 1; i += 2){
        if (message[i] == " "){
          decodeString += " ";
          i--;
        }else{
          let row = message[i + 1];  
          let column = message[i];
          decodeString += polybiusSquare[row][column];
          
        }
      }
      return decodeString;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
