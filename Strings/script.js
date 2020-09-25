/*Author: Jayanth Kumar Tumuluri 
  Github: Jayanth20
*/
function removeDuplicates() {
    var str = document.getElementById("stringinp").value;
    var n = str.length;
    if (n <= 1 || n > 1000) {
        alert('Please enter a valid string');
    } else {
        let j = "";
        let r = "";
        for (var i = 0; i < n; i++) {
            let chars = str.charAt(i);
            if (chars !== j) {
                r += chars;
                j = chars;
            }
        }
        document.getElementById('result').innerHTML = "Result after removal: " + r;
        console.log(r);
    }
}