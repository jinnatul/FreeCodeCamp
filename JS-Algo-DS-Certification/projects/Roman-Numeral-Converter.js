// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

function convertToRoman(num) {
    let romanNums = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
    for (i in romanNums) {
      while (num >= romanNums[i] ) {
        roman += i;
        num -= romanNums[i];
      }
    }
    return roman;
  }
  
  let a = convertToRoman(891);
  console.log(a)