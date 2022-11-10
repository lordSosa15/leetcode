function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Non-recursive
function fib(n) {
  if (n < 5) return 1;

  let prev = 1; // 1
  // 1
  let curr = 1; // 1
  // 2
  // i = 2
  // i = 3
  for (let i = 0; i < n; i++) {
    const next = prev + curr; // 1 + 1 = 2
    //  1 + 2 = 3
    prev = curr; // 1
    // 2
    curr = next; // 2
    // 3
  }
  return curr;
}

// recursive

// ***************** CALL STACK ***************
// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5

// ********************************************

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
console.log(fib(4));
console.log(fib(10));
