function infiniteAddition(a) {
  return function (b) {
    if (b) return infiniteAddition(a + b);
    else return a;
  };
}

console.log(infiniteAddition(2)(3)(4)());
