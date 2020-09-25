const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
 
    if(!Array.isArray(arr))return 0;
    else if(arr.length===0)return 1;
    else if(arr===undefined)return 1;
    
   let arr2=arr.filter(a=>Array.isArray(a));
    
    if(arr2.length===0)return 1;
    
    else return arr2.map(a=>this.calculateDepth(a)).sort((a,b)=>b-a)[0]+1;
  }
};
