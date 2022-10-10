const bubbleSort = (arr) => {
  let finalArr = arr;

  for (let i = 0; i <= finalArr.length; i++) {
    for (let j = 1; j <= finalArr.length; j++) {
      if (finalArr[j - 1] > finalArr[j]) {
        temp = finalArr[j - 1];
        finalArr[j - 1] = finalArr[j];
        finalArr[j] = temp;
      }
    }
  }
  return finalArr;
};
