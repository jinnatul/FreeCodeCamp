// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker

function palindrome(str) {
    str = str.replace(/[^\w\s]|_/g, "")
           .replace(/\s+/g, "")
           .toLowerCase();
    let ln = str.length;
    for (let i = 0, j = ln - 1; i < ln; i++, j--) {
      if (i <= j && str[i] !== str[j]) return false;
    }
    return true;
  }
  palindrome("five|\_/|four");

/* 
  Description for regular expression

1) \w is any digit, letter, or underscore.
2) \s is any whitespace.
3) [^\w\s] is anything that's not a digit, letter, whitespace, or underscore.
4) [^\w\s]|_ is the same as #3 except with the underscores added back in.

*/