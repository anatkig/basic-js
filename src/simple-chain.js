const CustomError = require("../extensions/custom-error");


      
 const chainMaker =  {
  

 arval: [],
  getLength() {
   
  
   // throw new CustomError('Not implemented');
    return this.arval.length; 
  },
  addLink(value) {

      
        
        if(value==null)
      this.arval.push("( null )");
              else
    this.arval.push("( "+value+" )");
     
          

        return this;
  },
  removeLink(position) {
 
        if(typeof position!=="number"||isNaN(position)||!Number.isInteger(position)||position>this.arval.length||position<1){
              this.arval.splice(0,this.arval.length);
             
    throw new Error('THROWN');
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
       
  
    return chain;
  }
};

module.exports = chainMaker;
