function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
  
  console.log(fibonacci(10)); // Output: 8
  

  function fibonacciIterative(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
  
    let series = [0, 1];
    for (let i = 2; i < n; i++) {
      series.push(series[i - 1] + series[i - 2]);
    }
    return series;
  }
  
  // Example usage:
  console.log(fibonacciIterative(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]