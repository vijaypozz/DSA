// Sort both strings → if equal → they are anagrams.
// "listen" → "silent" ✅ anagram
// "rat" → "car" ❌ not anagram
// What is an Anagram?

// 👉 Two words are called anagrams if they contain the same characters in the same frequency,
//  but maybe in a different order


// function isAnagram(s, t) {
//     if (s.length !== t.length) return false;
//     return s.split('').sort().join('') , t.split('').sort().join('');//[ 'eilnst', 'eilnst' ]
//   }
  
//   console.log(isAnagram("listen", "silent")); // true
//   console.log(isAnagram("rat", "car"));       // false
  

  function isAnagram(s, t) {
    if (s.length !== t.length) return false;
  
    let count = {};
  
    for (let char of s) { 
        // { l: 1, i: 1, s: 1, t: 1, e: 1, n: 1 }
        // { r: 1, a: 1 }
        console.log(count);
        
      count[char] = (count[char] || 0) + 1;
    }
  
    for (let char of t) {
        // { l: 0, i: 0, s: 0, t: 0, e: 0, n: 0 }
        // { r: 1, a: 1 }

      if (!count[char]) return false; 
      count[char]--;

    }
    console.log("ee",count);

    return true;
  }
  
//   console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("rat", "car"));       // 

// Count letters in "listen" → { l:1, i:1, s:1, t:1, e:1, n:1 }

// Subtract letters of "silent" → counts all go to 0

// ✅ So they’re anagrams.
// If all values in the count object match perfectly (no leftover counts),
//  then the strings are anagrams; otherwise, they are not.
