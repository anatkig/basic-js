const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if(!Array.isArray(arr))
  throw new CustomError('trash');
  
  const discn="--discard-next";
  const discp="--discard-prev";
  const doubn="--double-next";
  const doubp="--double-prev";
  
  
};
