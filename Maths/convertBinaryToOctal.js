const binaryToDecimal = (input) => {
  return parseInt(input.toString(), 2);
};

export const binaryToOctal = (input) => {
  const decimal = binaryToDecimal(input);
  return Number(decimal.toString(8));
};
