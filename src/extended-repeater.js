const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,opt) {
 


 
// throw new CustomError('Not implemented');

console.log(opt)

  let st=str;
 let stfn="";
  if(!('repeatTimes' in opt)) opt['repeatTimes']=0;
     if(!("separator" in opt)) opt["separator"]="";
  if(!("addition" in opt)) opt["addition"]="";
     if(!("additionRepeatTimes" in opt)) opt["additionRepeatTimes"]=0;
  if(!("additionSeparator" in opt)) opt["additionSeparator"]="";
     
 for(let y=0; y<opt.additionRepeatTimes;y++){
      st+=opt.additionSeparator+opt.addition;
 }
 stfn=st;
     for(let i=0; i<opt['repeatTimes']; i++)
    stfn=stfn+opt.separator+st;
  
     return stfn;
};
  
