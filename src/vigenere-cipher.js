const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let lengthnospace=string.split("").filter(a=>a.toUpperCase()!==a.toLowerCase()).length;
    let arr=string.toLowerCase().split("");
    let keyl=key.toLowerCase();
    
    return
   
  }    
  decrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let lengthnospace=string.split("").filter(a=>a.toUpperCase()!==a.toLowerCase()).length;
    let arr=string.toLowerCase().split("");
      let keyl=key.toLowerCase();
  }
}

module.exports = VigenereCipheringMachine;
