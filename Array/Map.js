// Invokes a callback function for each element of the array and returns
// a new array as result.

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let newArray = array.map(el => {
    let square = Math.pow(el, 2)
    return square
})

console.log(newArray)