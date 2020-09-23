const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
  if(arr)
 return arr.filter(a=>typeof a==="string").map(a=>a.trim()[0]).sort().reduce((sum,i)=>sum+=i).toUpperCase();
  else return false;
}
