const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if(!Array.isArray(arr))
  throw new CustomError('trash');
  
  const discn="--discard-next";
  const discp="--discard-prev";
  const doubn="--double-next";
  const doubp="--double-prev";
  

  if(arr.length===0)return arr;
  let arr2=arr.slice(0);

 for(let i=0;i<arr2.length;i++){
  

      
     
  
   if(arr2[i]==="--discard-next"){ arr2.splice(i,2) }
  if(arr2[i]==="--discard-prev"){if(i-1===-1)arr2.splice(i,1);  else arr2.splice(i-1,2)}
   if(arr2[i]==="--double-next"){ if(i+1===arr2.length) arr2.splice(i,1); else arr2.splice(i,1,arr2[i+1])}
    if(arr2[i]==="--double-prev"){if(i-1===-1)arr2.splice(i,1);  else arr2.splice(i,1,arr2[i-1])}
     
   
 
   }
  return arr2//.filter(a=>a!==discn&&a!==discp&&a!==doubn&&a!==doubp);
  
  
};
