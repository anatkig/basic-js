const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,opt) {
 


 
// throw new CustomError('Not implemented');



  let st="";
  if(!('repeatTimes' in opt)) opt['repeatTimes']=0;
     if(!("separator" in opt)) opt["separator"]="";
  if(!("addition" in opt)) opt["addition"]="";
     if(!("additionRepeatTimes" in opt)) opt["additionRepeatTimes"]=0;
  if(!("additionSeparator" in opt)) opt["additionSeparator"]="";
     
     for(let i=0; i<opt['repeatTimes']; i++){
    for(let y=0; y<opt.additionRepeatTimes;y++)
      st+=opt.additionSeparator+opt.addition;
    st+=opt.separator;
  }
     return st;
};
  
