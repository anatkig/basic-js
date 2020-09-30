const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 //console.log(date.toString())
   if(!date) return 'Unable to determine the time of year!';
  if(typeof date!=='object') 
  throw new Error('trash');
 if(new Date().toString()===date.toString())
  throw new Error('trash');
  

  let m=date.getMonth();
 
  switch(m){
    case 11: return 'winter';
      case 1: return 'winter';
      case 0: return 'winter';
      
    case 10: return 'fall';
      case 9: return 'fall';
      case 8: return 'fall';
      
    case 7: return 'summer';
      case 6: return 'summer';
      case 5: return 'summer';
      
    case 4: return 'spring';
      case 3: return 'spring';
      case 2: return 'spring';
    default: return 'winter';
  
  
  
  }
  
};
