function stringAnagram(param1, param2)
{
    let strOne = param1.toLowerCase();
    let strTwo = param2.toLowerCase();

    if(strOne.length !== strTwo.length){
        return false;
    }

    if(strOne === strTwo){
        return true;
    }

    let arrStringCounter = {};

    for (let i in strOne) {
        arrStringCounter[strOne[i]] = (arrStringCounter[strOne[i]] || 0) + 1;           
        arrStringCounter[strTwo[i]] = (arrStringCounter[strTwo[i]] || 0) - 1;           
    }

    for (let j in arrStringCounter) {
        if (arrStringCounter[j] !== 0)
            return false;
    }
 
    return true;

}

//Example string anagram

console.log(stringAnagram('Inch','Chin'));
console.log(stringAnagram('one','two'));
console.log(stringAnagram('Study','Dusty'));
console.log(stringAnagram('Eleven plus two','Twelve plus one'));
