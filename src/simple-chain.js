const CustomError = require("../extensions/custom-error");


      
 const chainMaker =  {
  

 arval: [],
  getLength() {
   
  
   // throw new CustomError('Not implemented');
    return this.arval.length; 
  },
  addLink(value) {
 console.log(value);
        //if(this.arval[this.arval.length-1]==="( )")this.arval[this.arval.length-1]=value;
        //else
    this.arval.push(value);
     
  if(!value){
   
    this.arval.push("( )");
  }
        return this;
  },
  removeLink(position) {
        console.log(position);
        if(!Number.isInteger(parseInt(position))||position>=this.arval.length||position<(-this.arval.length)){
              this.arval.splice(0,this.arval.length);
    throw new CustomError('ditch');
        }
        else
 this.arval.splice(parseInt(position)-1,1);
     
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
        this.arval.splice(0,this.arval.length);
        console.log(this.arval);
  
    return chain;
  }
};

module.exports = chainMaker;
