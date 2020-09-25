const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
chain: "",
 
  getLength() {
     console.log(this);
  
   // throw new CustomError('Not implemented');
    return this.chain.length; 
  },
  addLink(value) {
    this.chain+=value;
     console.log(this,value);
  if(!value)
   this.chain+="( )";
    
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    
    let ch=this.chain;
    this.chain="";
    return ch;
  }
};

module.exports = chainMaker;
