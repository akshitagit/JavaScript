// Creating a new Map
let myMap = new Map();

// Adding key-value pairs to the hashmap
myMap.set("name", "Rahul");
myMap.set("age", 22);
myMap.set("city", "Delhi");

// Accessing values using keys
console.log("Name:", myMap.get("name")); // Output: Name: Rahul
console.log("Age:", myMap.get("age")); // Output: Age: 22
console.log("City:", myMap.get("city")); // Output: City: Delhi

// Checking if a key exists in the hashmap
console.log(myMap.has("gender")); // Output: false

// Removing a key-value pair from the hashmap
myMap.delete("age");

// Iterating over key-value pairs in the hashmap
console.log("Iterating over key-value pairs:");
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});

// Output after deletion:
// Iterating over key-value pairs:
// name: Rahul
// city: Delhi
