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
         console.log(arr[i]);
      let diff=arr[i].charCodeAt(0)-97;
        let keyc=keyl.charCodeAt((i-count)%keyl.length);
        console.log(count,i);
        let newlet=String.fromCharCode(((keyc+diff)%122)<122?(keyc+diff)%122:((keyc+diff)%122)+97);
      arr[i]=newlet;
      console.log(newlet)
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
