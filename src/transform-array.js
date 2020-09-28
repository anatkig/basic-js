const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 
  if(!Array.isArray(arr))
  throw new CustomError('trash');
  
  const discn="--discard-next";
  const discp="--discard-prev";
  const doubn="--double-next";
  const doubp="--double-prev";
  

  if(arr.length===0)return arr;
  let arr2=new Array(arr);

 for(let i=0;i<arr2.length;i++){
  console.log(Array.isArray(arr2[i])+"prov")
   if(Array.isArray(arr2[i]))
      
      for(let y=0;i<arr2[i].length;i++){
        
     if(arr2[i][y]==="--discard-next"){ arr2[i].splice(i,2) };
   if(arr2[i][y]==="--discard-prev"){ arr2[i].splice(i-1,2)};
   if(arr2[i][y]==="--double-next"){ arr2[i].splice(i,1,arr2[i+1])};
   if(arr2[i][y]==="--double-prev"){ arr2[i].splice(i,1,arr2[i-1])};
   
      }  
   else{
   if(arr2[i]==="--discard-next"){ arr2.splice(i,2) };
   if(arr2[i]==="--discard-prev"){ arr2.splice(i-1,2)};
   if(arr2[i]==="--double-next"){ arr2.splice(i,1,arr2[i+1])};
   if(arr2[i]==="--double-prev"){ arr2.splice(i,1,arr2[i-1])};
   }
 }
  return arr2;
  
  
};
