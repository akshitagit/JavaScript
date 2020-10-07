// Get Only Number
var numberPattern = /\d+/g;
num = 'qweasd123qasdwq1233123423534'.match(numberPattern).join('');
console.log("number: ", parseInt(num));


// Get Only String
str = 'qweasd123qasdwq1233123423534'.replace(/[^a-zA-Z]+/g, '');
console.log("string: ", str);