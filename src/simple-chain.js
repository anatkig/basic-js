const CustomError = require("../extensions/custom-error");

const chainMaker = {
  
chain: "",
 arval: [],
  getLength() {
     console.log(this);
  
   // throw new CustomError('Not implemented');
    return this.chain.length; 
  },
  addLink(value) {
    this.chain+=value;
    this.arval.push(value);
     console.log(this,value);
  if(!value){
   this.chain+="( )";
    this.arval.push("( )");
  }
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
   
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
