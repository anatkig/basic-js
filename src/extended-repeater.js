const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str,opt) {
 


 
// throw new CustomError('Not implemented');

console.log(str,opt.separator)

  let st=str;
 if(typeof st==="boolean")st=st.toString();
 
 let stfn="";
  if(!('repeatTimes' in opt)) opt['repeatTimes']=0;
     if(!("separator" in opt)) opt["separator"]="+";
 else if(typeof opt["separator"]==="undefined") opt["separator"]="+";
  if(!opt.hasOwnProperty("addition")||typeof opt["addition"]==="undefined") opt["addition"]="";
     if(!("additionRepeatTimes" in opt)) opt["additionRepeatTimes"]=0;
  if(!opt.hasOwnProperty("additionSeparator")||typeof opt["additionSeparator"]==="undefined") opt["additionSeparator"]="|";
     
 
 st+=opt.addition;
 for(let y=0; y<opt.additionRepeatTimes-1;y++){
      st+=opt.additionSeparator+opt.addition;
 }
 stfn=st;
     for(let i=0; i<opt['repeatTimes']-1; i++)
    stfn=stfn+opt.separator+st;
  
     return stfn;
};
  
