const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let lengthnospace=string.split("").filter(a=>a.toUpperCase()!==a.toLowerCase()).length;
    let arr=string.toLowerCase().split("");
    let keyl=key.toLowerCase();
    let arr2=[];
       let count=0;
    for(let i=0;i<arr.length;i++){
  

      if(!(arr[i].toLowerCase()!==arr[i].toUpperCase()))
        count++;
      else {
     
      let diff=arr[i].charCodeAt(0)-97;
        let keyc=keyl.charCodeAt((i-count)%keyl.length);
     
        let index=((keyc+dif)<122?(keyc+diff)%122:((keyc+diff)%122)+97;
           console.log(index);
        let newlet=String.fromCharCode(index);
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
