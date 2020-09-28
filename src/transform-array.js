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
  
   if(Array.isArray(arr2[i]))
      
      for(let y=0;y<arr2[i].length;y++){
        console.log(Array.isArray(arr2[i][y])+"prov")
     if(arr2[i][y]==="--discard-next"){ arr2[i].splice(y,2) };
   if(arr2[i][y]==="--discard-prev"){ if(y-1===-1)arr2[i].splice(y,1);  else arr2[i].splice(i-1,2)};
   if(arr2[i][y]==="--double-next"){if(y+1===arr2[i].length)arr2[i].splice(y,1);  else arr2[i].splice(y,1,arr2[y+1])};
   if(arr2[i][y]==="--double-prev"){if(y-1===-1)arr2[i].splice(y,1);  else arr2[i].splice(y,1,arr2[y-1])};
   
      }  
   else{
   if(arr2[i]==="--discard-next"){ arr2.splice(i,2) };
   if(arr2[i]==="--discard-prev"){if(i-1===-1)arr2.splice(i,1);  else arr2.splice(i-1,2)};
   if(arr2[i]==="--double-next"){ if(i+1===arr2.length) arr2.splice(i,1); else arr2.splice(i,1,arr2[i+1])};
   if(arr2[i]==="--double-prev"){if(i-1===-1)arr2.splice(i,1);  else arr2.splice(i,1,arr2[i-1])};
   }
 }
  return arr2;
  
  
};
