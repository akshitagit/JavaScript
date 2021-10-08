// Recursive solution
let knapsackRecursive = function (profits, weights, capacity, currentIndex) {
  if (capacity <= 0 || currentIndex >= profits.length) {
    return 0;
  }

  // include current element
  let profit1 = 0;
  if (weights[currentIndex] <= capacity) {
    profit1 =
      profits[currentIndex] +
      knapsackRecursive(
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );
  }

  // exclude current element
  let profit2 = knapsackRecursive(profits, weights, capacity, currentIndex + 1);

  return Math.max(profit1, profit2);
};

// Top Down with memoisation

const dp = [];

let knapsackTopDown = function (profits, weights, capacity, currentIndex) {
  if (capacity <= 0 || currentIndex >= profits.length) {
    return 0;
  }

  dp[currentIndex] = dp[currentIndex] || [];

  if (dp[currentIndex][capacity]) {
    return dp[currentIndex][capacity];
  }

  // include current element
  let profit1 = 0;
  if (weights[currentIndex] <= capacity) {
    profit1 =
      profits[currentIndex] +
      knapsackTopDown(
        profits,
        weights,
        capacity - weights[currentIndex],
        currentIndex + 1
      );
  }

  // exclude current element
  let profit2 = knapsackTopDown(profits, weights, capacity, currentIndex + 1);

  dp[currentIndex][capacity] = Math.max(profit1, profit2);

  return dp[currentIndex][capacity];
};

// Bottom Up with tabulation

let knapsackBottomUp = function (profits, weights, capacity) {
  const dp = new Array(profits.length)
    .fill(0)
    .map(() => Array(capacity + 1).fill(0));

  for (let c = 1; c <= capacity; c++) {
    dp[0][c] = c >= weights[0] ? profits[0] : 0;
  }

  for (let i = 1; i < profits.length; i++) {
    for (let c = 1; c <= capacity; c++) {
      dp[i][c] =
        c >= weights[i]
          ? Math.max(dp[i - 1][c], profits[i] + dp[i - 1][c - weights[i]])
          : dp[i - 1][c];
    }
  }

  return dp[profits.length - 1][capacity];
};

let solveKnapsack = function (profits, weights, capacity) {
  // return knapsackRecursive(profits, weights, capacity, 0);
  // return knapsackTopDown(profits, weights, capacity, 0);
  return knapsackBottomUp(profits, weights, capacity);
};

var profits = [1, 6, 10, 16];
var weights = [1, 2, 3, 5];
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 7)}`
);
console.log(
  `Total knapsack profit: ---> ${solveKnapsack(profits, weights, 6)}`
);
