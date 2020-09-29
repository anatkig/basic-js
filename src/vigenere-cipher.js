const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let lengthnospace=string.split("").filter(a=>a.toUpperCase()!==a.toLowerCase()).length;
    let arr=string.toLowerCase().split("");
    let keyl=key.toLowerCase();
    let arr2=[];
   
    for(let i=0;i<arr.length;i++){
  
    let count=0;
      if(!(arr[i].toLowerCase()!==arr[i].toUpperCase()))
        count++;
      else {
         console.log(arr[i]);
      let diff=arr[i].charCodeAt(0)-97;
        let keyc=keyl.charCodeAt((i-count)%lengthnospace);
        
        let newlet=String.fromCharCode(keyc+diff);
      arr[i]=newlet;
      
      }
    
    }
    
   return arr.join("").toUpperCase();
   
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
