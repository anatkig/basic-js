const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  
  constructor (bul){
  
if(typeof bul==="undefined"||bul)
this.bul=true;
else this.bul=false;
}
  encrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let arr=[];
   if(this.bul===true)
    arr=string.toLowerCase().split("");
    else arr=string.toLowerCase().split("").reverse();
    
    
    let keyl=key.toLowerCase();
 
       let count=0;
    for(let i=0;i<arr.length;i++){
  

      if(!(arr[i].toLowerCase()!==arr[i].toUpperCase()))
        count++;
      else {
     
      let diff=arr[i].charCodeAt(0)-97;
        let keyc=keyl.charCodeAt((i-count)%keyl.length);
     
        let index=(keyc+diff)<=122?(keyc+diff):((keyc+diff)%122)+96;
           //console.log(string,key);
        let newlet=String.fromCharCode(index);
      arr[i]=newlet;
    
      }
    
    }
    
   return arr.join("").toUpperCase();
   
  }    
  decrypt(string,key) {
    if(!string||!key)
    throw new CustomError('trash');
    
    let arr=[];
   if(this.bul===true)
    arr=string.toLowerCase().split("");
    else arr=string.toLowerCase().split("").reverse();
  
      let keyl=key.toLowerCase();
       let count=0;
    
    for(let i=0;i<arr.length;i++){
    
     if(!(arr[i].toLowerCase()!==arr[i].toUpperCase()))
        count++;
     
    
     else {
     
      let diff=arr[i].charCodeAt(0);
        let keyc=keyl.charCodeAt((i-count)%keyl.length);
     
       let middiff=diff-keyc;
       
        let index=(middiff+97)>=97?(middiff+97):(middiff+97)+26;
           
        let newlet=String.fromCharCode(index);
      arr[i]=newlet;
    
      }
    
    }
    
   return arr.join("").toUpperCase();
   
    
  }
}

module.exports = VigenereCipheringMachine;
