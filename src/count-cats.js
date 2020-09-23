const CustomError = require("../extensions/custom-error");

module.exports = function countCats(number) {
  //throw new CustomError('Not implemented');
 let count=0;
  for(let i of number)
    for(let y of i)
      if(y ==='^^')
        count++;
  
  return count;
  


};
