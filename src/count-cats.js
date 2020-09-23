const CustomError = require("../extensions/custom-error");

module.exports = function countCats(number) {
  //throw new CustomError('Not implemented');
 /*let count=0;
  for(let i=0;i<number.length;i++)
    for(let y=0;y<number[0].length;y++)
      if(number[i][y]==='^^')
        count++;
  
  return count;*/
  
  return number.filter(a=>a.filter(b=>if(b==='^^'))).length; 
};
