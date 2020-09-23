// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong

// 1st way 
function getIndexToIns(arr, num) {
  return arr
          .concat(num)
          .sort((a, b) => a - b)
          .indexOf(num);
}

getIndexToIns([40, 60], 50);

// 2nd way
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}

// 3rd way
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}

// 4th way
function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr
    .sort((curr, next) => curr - next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

// 5h way
function getIndexToIns(arr, num) {
  return arr.filter(val => num > val).length;
}