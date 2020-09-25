const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    //throw new CustomError('Not implemented');
   
    if(!Array.isArray(arr))return 0;
    
    else return this.calculateDepth(arr.filter(a=>Array.isArray(a))[0])+1;
  }
};
