function converter (n){
    if(n<8){
        return n; // Base Case
    }
    var smallans = convertor(Math.floor(n/8));

    var octal = smallans * 10 + n % 8; // Small Calculation

    return octal;
}
//console.log(converter(189)) Pass the number whose octal form is desired