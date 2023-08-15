const repeatString = function(str, num) {

 let newString = ""
 if (num < 0){
   return "ERROR"
 }
 for (i = 0; i<num; i++){
    newString = newString + str;
    
 }//console.log(newString) 
 return newString;
};


// Do not edit below this line
module.exports = repeatString;
