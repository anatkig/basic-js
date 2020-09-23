const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
  console.log(arr);
  if(Array.isArray(arr)&&arr.length>0)
 return arr.filter(a=>typeof a==="string").map(a=>a.trim()[0].toUpperCase()).sort().reduce((sum,i)=>sum+=i);
  else return false;
}
