const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,opt) {
 // throw new CustomError('Not implemented');
 if(!opt) return str;
 console.log(opt);
  let options = opt;
  let st="";
  if(!("repeatTimes" in options) options["repeatTimes"]=0;
     if(!("separator" in options) options["separator"]="";
  if(!("addition" in options) options["addition"]="";
     if(!("additionRepeatTimes" in options) options["additionRepeatTimes"]=0;
  if(!("additionSeparator" in options) options["additionSeparator"]="";
     
     for(let i=0; i<options.repeatTimes; i++){
    for(let y=0; y<options.additionRepeatTimes;y++)
      st+=options.additionSeparator+options.addition;
    st+=options.separator;
  }
     return st;
};
  
