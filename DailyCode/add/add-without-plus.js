function add(num1, num2){
    while(num2!=0){
        carry = num1 & num2 //carry
        num1 = num1 ^ num2
        num2 = carry << 1
    }
    return num1
}

console.log(add(5, 7))