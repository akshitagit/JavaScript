function convertToOctal(num) {
  if (typeof num !== "number") {
    throw new Error("Input must be a valid number.");
  }

  if (num <= 0 || num >= 1e9) {
    throw new Error(
      "Number must be greater than zero and less than one billion."
    );
  }

  return num.toString(8);
}

console.log(convertToOctal(63)); // 77
