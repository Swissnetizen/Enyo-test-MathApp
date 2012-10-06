   String.prototype.replaceAt=function(index, char) {
      return this.substr(0, index) + char + this.substr(index+char.length);
   }

//fiqures out how many decimal places are in a number
var CalculateDecimalPlaces = function(number) {
    number += "";
    var PassedDecimalPoint = false;
    var DecimalPlaces = 0;
    for (i=0; i<number.length; i++) {
        if(PassedDecimalPoint)  {
            DecimalPlaces += 1;
        } else if(number[i] == ".")  {
            PassedDecimalPoint = true;
        }
            
            
       }
       return DecimalPlaces;
      };
                
//Code below was from http://forums.devarticles.com/javascript-development-22/javascript-to-round-to-2-decimal-places-36190.html
function RoundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
};
        
    
    
    
                
    
