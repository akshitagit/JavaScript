function reverseStringJavascript(str) {
   
    let splitString = str.split(""); 
  
   
    let reverseArray = splitString.reverse(); 
   
 
  
    let joinStringArray = reverseArray.join(""); 
  
    return joinStringArray; 
}
 
reverseStringJavascript("Hacktoberfest");