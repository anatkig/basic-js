const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
if(sampleActivity==false||sampleActivity[0].toUpperCase()===sampleActivity[0].toLowerCase())
  return false;
  else return Math.ceil(Math.log(MODERN_ACTIVITY/HALF_LIFE_PERIOD)/parseInt(sampleActivity));
};
