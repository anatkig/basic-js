const CustomError = require("../extensions/custom-error");


      
 const chainMaker =  {
  
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
     console.log(this,value,chainMaker);
  if(!value){
   this.chain+="( )";
    this.arval.push("( )");
  }
        return this;
  },
  removeLink(position) {
    //throw new CustomError('Not implemented');
   this.chain=this.chain.replace(arval[position],"");
        return this;
  },
  reverseChain() {
    //throw new CustomError('Not implemented');
    this.chain=this.chain.split('').reverse().join("");
        return this;
  },
  finishChain() {
    //throw new CustomError('Not implemented');
    
    let ch=this.chain;
    this.chain="";
    return ch;
  }
};

module.exports = chainMaker;
