const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  console.log(date)
  if(typeof date!=='object'||date==null) 
  throw new CustomError('trash');
  
  if(!date) return 'Unable to determine the time of year!';
  let m=date.getMonth();
  console.log(m)
  switch(m){
    case 11||0||1: return 'winter';
      
    case 10||9||8: return 'fall';
      
    case 7||6||5: return 'summer';
      
    case 4||3||2: return 'spring';
      
    default: return 'winter';
  
  
  
  }
  
};
