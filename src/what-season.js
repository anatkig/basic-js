const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if(typeof date!=='object') 
  throw new CustomError('trash');
  
  if(!date) return 'Unable to determine the time of year!';
  let m=date.getMonth();
  
  switch(m){
    case m<2: return 'winter';
    case m<5: return 'spring';
    case m<8: return 'summer';
    case m<11: return 'winter';
    default: return 'winter';
  
  
  }
  
};
