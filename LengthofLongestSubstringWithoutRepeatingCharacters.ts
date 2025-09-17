function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0, maxLen = 0;
  
    for (let right = 0; right < s.length; right++) {
      while (set.has(s[right])) {
        set.delete(s[left]); // remove leftmost
        left++;
      }
      set.add(s[right]);
      maxLen = Math.max(maxLen, right - left + 1);
    }
  
    return maxLen;
  }
  
  console.log(lengthOfLongestSubstring("abcabcbb")); // 3
//   We are asked to find the maximum profit from buying and selling a stock once. 
// I iterate through the prices while keeping track of the minimum price seen so far.
//  For each price, I calculate the potential profit if I sold at that price, and update the maximum profit accordingly.
//   This ensures I always buy at the lowest point before selling.
//    For example, in [7,1,5,3,6,4], the lowest price is 1 and the highest selling price after that is 6, giving a maximum profit of 5.

//   | Day | Price | minPrice | price - minPrice | maxProfit | Explanation                               |
// | --- | ----- | -------- | ---------------- | --------- | ----------------------------------------- |
// | 0   | 7     | 7        | 7 - 7 = 0        | 0         | First day, nothing to do                  |
// | 1   | 1     | 1        | 1 - 1 = 0        | 0         | New lowest price → update minPrice        |
// | 2   | 5     | 1        | 5 - 1 = 4        | 4         | Sell at 5 → profit 4 → update maxProfit   |
// | 3   | 3     | 1        | 3 - 1 = 2        | 4         | Profit smaller than maxProfit → ignore    |
// | 4   | 6     | 1        | 6 - 1 = 5        | 5         | Sell at 6 → profit 5 → update maxProfit ✅ |
// | 5   | 4     | 1        | 4 - 1 = 3        | 5         | Profit smaller than maxProfit → ignore    |


// Day:      0   1   2   3   4   5
// Price:    7   1   5   3   6   4

// Day 0 → Price 7

// minPrice = 7 (first price)

// maxProfit = 0 (no sale yet)

// Day 1 → Price 1

// minPrice updated to 1 → this is the best day to buy so far

// maxProfit = 0 (profit if sold today = 1 - 1 = 0)

// Day 2 → Price 5

// minPrice = 1 (buy at 1)

// profit if sold today = 5 - 1 = 4 → maxProfit updated to 4

// Day 3 → Price 3

// minPrice = 1

// profit = 3 - 1 = 2 → less than maxProfit → ignore

// Day 4 → Price 6

// minPrice = 1

// profit = 6 - 1 = 5 → maxProfit updated to 5 ✅

// Best trade so far: buy at 1, sell at 6

// Day 5 → Price 4

// minPrice = 1

// profit = 4 - 1 = 3 → less than maxProfit → ignore