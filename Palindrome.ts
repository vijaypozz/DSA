// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
//   }
  
//   console.log(isPalindrome('racecar')); // Output: true
//   console.log(isPalindrome('hello'));   // Output: false
// console.log(isPalindrome("A man, a plan, a canal: Panama")); // true


// sequence of characters that reads 
// the same forwards and backward. 
// Examples include the word "racecar" and 
// the phrase "A man, a plan, a canal – Panama!".


function isPalindrome(str) {
    // Normalize: lowercase and remove non-alphanumeric chars (optional)
    // str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
    let left = 0;  //left → starts from the beginning of the string.
    let right = str.length - 1; //right → starts from the end of the string.
   
    console.log(left,right)

    while (left < right) {
        console.log(str[left],str[right]);
        
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
        console.log(left,right,str)

    }
    console.log(left,right,str)

    return true;
  }
  
//   console.log(isPalindrome("madam"));     // true
//   console.log(isPalindrome("racecar"));   // true
  console.log(isPalindrome("hello"));     // false
//   console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
  