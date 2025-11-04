buy sell stock
length of longest substring
anagram 
palindrome
two sum 


1️⃣ Two Sum – Hash Map Approach
Array: [2, 7, 11, 15], Target: 9

Step:
- Map = {}
- i=0, num=2 → complement=7 → not in map → store 2:0
- i=1, num=7 → complement=2 → found! → return [0,1]

Visual:
Index: 0 1 2  3
Nums:  2 7 11 15
Map:   {2:0} → find 7 → yes → [0,1]


2️⃣ Anagram – Sort / HashMap
Words: "listen" & "silent"

Step:
- Count letters or sort
- "listen" → l i s t e n → sorted = eilnst
- "silent" → s i l e n t → sorted = eilnst → match → true

Visual:
listen → [l,i,s,t,e,n] → sorted → eilnst
silent → [s,i,l,e,n,t] → sorted → eilnst ✅

3️⃣ Palindrome – Two Pointers
Word: "racecar"

Step:
- left=0, right=6
- Compare r==r, a==a, c==c, e==e → done → palindrome

Visual:
r a c e c a r
^         ^
left     right → move inward
All match → true


4️⃣ Longest Substring Without Repeating Characters – Sliding Window
String: "pwwkew"

Step:
- left=0, right=0, set={}
- Expand right, add chars until repeat
- If repeat → remove from left until no repeat
- Track maxLength

Visual:

Index: 0 1 2 3 4 5
Chars: p w w k e w

Step:
p → {p} max=1
pw → {p,w} max=2
w repeat → remove p → {w} left=1
wk → {w,k} max=2
wke → {w,k,e} max=3 ✅


5️⃣ Max Profit (Buy/Sell Stock) – Track Min Price

Prices: [7,1,5,3,6,4]

Step:
- minPrice = ∞, maxProfit = 0
- For each price:
   profit = price - minPrice
   update maxProfit
   update minPrice if smaller

Visual:
Price: 7 1 5 3 6 4
minPrice: 7 → 1
Profit:   0 → 0 → 4 → 2 → 5 → 3
Best Profit = 5 (buy at 1, sell at 6)

Tip for Interviews

Two Sum → HashMap

Anagram → Sort / HashMap

Palindrome → Two pointers

Longest Substring → Sliding window + Set

Max Profit → Track minPrice + one pass