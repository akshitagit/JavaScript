let fibonacci = (n, seq=[0,1]) => --n > 0 
  ? fibonacci(n, seq.concat([seq[seq.length - 1] + seq[seq.length - 2]]))
  : seq

console.table(fibonacci(20))
