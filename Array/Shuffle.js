function shuffle(arr = []) {
  const copy = arr.slice();

  let currentIndex = arr.length;
  let randomIndex;
  while (currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [copy[currentIndex], copy[randomIndex]] = [
      copy[randomIndex], copy[currentIndex]];
  };

  return copy;
};
