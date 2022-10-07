// splice(index,deleteCount,item1,item2,...)

var number_arr = [ 20, 30, 40, 50, 60 ];
var string_arr = [ "amit", "sumit", "anil", "prateek" ];

// splice()
// deletes 3 elements starting from index1
number_arr.splice(1, 3);

// Insert 3,4,5 at location 1
//Second element 0 indicates no deletion.
number_arr.splice(1, 0, 3, 4, 5);

// deletes two elements starting from index 1
// and add three elements.
// It contains ["amit", "xyz", "geek 1", "geek 2", "prateek"];
string_arr.splice(1, 2, "xyz", "geek 1", "geek 2");

// Printing both the array after performing splice operation
console.log("After splice op " + number_arr);
console.log("After splice op " + string_arr);

