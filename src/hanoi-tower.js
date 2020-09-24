const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disk, speed) {
  
  let turn=Math.pow(2,disk)-1;
 
let obj={

turns:turn,
  seconds: Math.floor(turn/(speed/3600))

}

return obj;
};

