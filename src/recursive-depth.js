const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
   console.log(arr);
    if(!Array.isArray(arr))return 0;
    else if(arr.length===0)return 1;
    else if(arr===undefined)return 1;
    
    else return this.calculateDepth(arr.filter(a=>Array.isArray(a)).map(a=>this.calculateDepth(a)).reduce((a,b)=>Math.max(a,b)))+1;
  }
};
