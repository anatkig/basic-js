const CustomError = require("../extensions/custom-error");


      
 const chainMaker =  {
  

 arval: [],
  getLength() {
   
  
   // throw new CustomError('Not implemented');
    return this.arval.length; 
  },
  addLink(value) {
 console.log(value);
    this.arval.push(value);
     
  if(!value){
   
    this.arval.push("( )");
  }
        return this;
  },
  removeLink(position) {
        if(!Number.isInteger(position))
    throw new CustomError('ditch');
        
        else
 this.arval.splice(position-1,1);
     
        return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
        this.arval.reverse();
  
        return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    
  let chain=this.arval.join("~~");
        this.arval=[];
  
    return chain;
  }
};

module.exports = chainMaker;
