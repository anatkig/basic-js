const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date)
  if(typeof date!=='object'||date==null) 
  throw new CustomError('trash');
  
  if(!date) return 'Unable to determine the time of year!';
  let m=date.getMonth();
  console.log(m)
  switch(m){
    case 11: return 'winter';
      break;
    case m>7: return 'fall';
      break;
    case m>4: return 'summer';
      break;
    case m>1: return 'spring';
      break;
    default: return 'winter';
  
  
  
  }
  
};
