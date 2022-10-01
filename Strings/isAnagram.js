// Simple function that checks if two strings are anagrams. Returns true or false. 

function isAnagram(a,b){
    if (a.length !== b.length){
        return false;
    } 
    var counter = 0; 
    for (var i=0; i<a.length; i++){
        for (var j=0; j<b.length; j++){
            if (a.charAt(i) === b.charAt(j)){
                counter++; 
                break;
            } 
        }
    }
    if (counter === a.length){
        return true;
    } return false;
    
}