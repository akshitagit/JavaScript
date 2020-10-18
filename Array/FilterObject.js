var obj = {
    'homes': [{
            "home_id": "1",
            "price": "925",
            "sqft": "1100",
            "num_of_beds": "2",
            "num_of_baths": "2.0",
        }, {
            "home_id": "2",
            "price": "1425",
            "sqft": "1900",
            "num_of_beds": "4",
            "num_of_baths": "2.5",
        },
        // ... (more homes) ...     
    ]
};
// (Note that because `price` and such are given as strings in your object,
// the below relies on the fact that <= and >= with a string and number
// will coerce the string to a number before comparing.)
var newArray = obj.homes.filter(function (el) {
  return el.price <= 1000 &&
         el.sqft >= 500 &&
         el.num_of_beds >= 2 &&
         el.num_of_baths >= 1.5; // Changed this so a home would match
});
console.log(newArray);
