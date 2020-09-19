// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string

// 1st way 
function findLongestWordLength(str) {
  let record = 0;
  let i = 0;
  let wordLength = 0;
  while(true) {
    wordLength = str.indexOf(' ', i) - (i);
    if (str.indexOf(' ', i) === -1) {
      wordLength = str.length-i;
    }
    i = i + (wordLength > 0 ? wordLength : wordLength*(-1)) + 1;
    // OR...
    // i += Math.abs(wordLength)+1;
    if (wordLength > record) {
      record = wordLength;
    }
    if (i > str.length) {
      break;
    }
  }
  return record;
}

// 2nd way 
function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

  return maxLength;
}

// 3rd way
function findLongestWordLength(s) {
  return s.split(' ')
    .reduce(function(x, y) {
      return Math.max(x, y.length)
    }, 0);
}

// 4th way
function findLongestWordLength(str) {
  return Math.max(...str.split(" ").map(word => word.length));
}

// 5th way
function findLongestWordLength(str) {
  //split the string into individual words
  //(important!!, you'll see why later)
  str = str.split(" ");

  //str only has 1 element left that is the longest element,
  //return the length of that element
  if (str.length == 1) {
    return str[0].length;
  }

  //if the first element's length is greater than the second element's (or equal)
  //remove the second element and recursively call the function)
  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return findLongestWordLength(str.join(" "));
  }

  //if the second element's length is greater thant the first element's start
  //call the function past the first element
  if (str[0].length <= str[1].length) {
    // from the first element to the last element inclusive.
    return findLongestWordLength(str.slice(1, str.length).join(" "));
  }
}