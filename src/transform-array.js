const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr))
  throw new CustomError('trash');
  
  const discn="--discard-next";
  const discp="--discard-prev";
  const doubn="--double-next";
  const doubp="--double-prev";
  
  let com=arr.filter(a=>typeof a==="string");
  if(arr.length===0)return arr;
  let arr2=new Array(arr);
console.log(arr2)
 for(let i=0;i<arr2.length;i++){
   if(Array.isArray(arr2[i]))arr2[i]=transform(arr2[i]);
   else
   if(arr2[i]==="--discard-next"){ arr2.splice(i,2) };
   if(arr2[i]==="--discard-prev"){ arr2.splice(i-1,2)};
   if(arr2[i]==="--double-next"){ arr2.splice(i,1,arr2[i+1])};
   if(arr2[i]==="--double-prev"){ arr2.splice(i,1,arr2[i-1])};
  
 }
  return arr2;
  
  
};
