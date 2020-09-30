function convertor (n){
    let num = n;
    var ans = [];
    while(num >= 8){
        ans.push(num % 8);
        num = Math.floor(num/8); 
    }
    if(num !=0) {
        ans.push(num);
    }
    var octal = 0;
    for(let i = ans.length - 1; i >=  0 ; i--){
        octal = octal * 10 + ans[i];
    }
    return octal;
}
console.log(convertor(189))