const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
chain: "",
 
  getLength() {
     console.log(this);
  
   // throw new CustomError('Not implemented');
    return this.chain.length; 
  },
  addLink() {
     console.log(this);
  
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
    return this.chain;
  }
};

module.exports = chainMaker;
