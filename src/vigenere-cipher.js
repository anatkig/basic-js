const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    // remove line with error and write your code here
  }    
  decrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    // remove line with error and write your code here
  }
}

module.exports = VigenereCipheringMachine;
