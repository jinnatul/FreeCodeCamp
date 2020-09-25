// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/telephone-number-validator

function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
  
  telephoneCheck("555-555-5555");
  
/*  
  Code Explanation

1) ^ denotes the beginning of the string.
2) (1\s?)? allows for “1” or "1 " if there is one.
3) \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
4) x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
5) [\s\-]? checks for spaces or dashes between the groups of digits.
6) $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).

Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.

*/