const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
 return arr.filter(a=>typeof a==="string").map(a=>a[0]).sort().reduce((sum,i)=>sum+=i).toUpperCase();
