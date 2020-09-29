const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let lengthnospace=string.split("").filter(a=>a.toUpperCase()!==a.toLowerCase()).length;
    let arr=string.toLowerCase().split("");
    let keyl=key.toLowerCase();
    
    for(let i=0;i<arr.length;i++){
    
    let count trash=0;
      if(!arr[i].toLowerCase()!==arr[i].toUpperCase())
        count++;
      else 
    
    }
    
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
