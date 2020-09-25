export default class Anagram {

    static isAnagram(str1, str2) {
        if (str1.length !== str2.length) {
            // check if the length is same
            //{result:false,err:"LengthShouldBeSame"}
            return false
        } else {
            // ;
            return str1.split('').sort().join('') === str2.split('').sort().join('');
        }
    }
}
