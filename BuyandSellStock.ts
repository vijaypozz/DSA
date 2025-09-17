function maxProfit(prices) {
    let minPrice = prices[0];   // lowest price seen so far
    let maxProfit = 0;
  
    for (let price of prices) {
      minPrice = Math.min(minPrice, price);  // update min price
      maxProfit = Math.max(maxProfit, price - minPrice); // check profit
    }
  
    return maxProfit;
  }
  
  console.log(maxProfit([7,1,5,3,6,4])); // 5

//   Keep track of the minimum price so far.

// At each step, check profit = current price - min price.

// Update max profit.