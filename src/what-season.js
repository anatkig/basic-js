const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date)
  if(typeof date!=='object'||date==null) 
  throw new CustomError('trash');
  
  if(!date) return 'Unable to determine the time of year!';
  let m=date.getMonth();
  
  switch(m){
    case 11: return 'winter';
    case m>7: return 'fall';
    case m>4: return 'summer';
    case m>1: return 'spring';
    default: return 'winter';
  
  
  
  }
  
};
