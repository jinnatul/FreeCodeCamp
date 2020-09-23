// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/chunky-monkey

// 1st way 
function chunkArrayInGroups(arr, size) {
  let temp = [];
  for (let i = 0; i < arr.length; i += size) {
    temp.push(arr.slice(i, i + size));
  }
  return temp;
}

chunkArrayInGroups(["a", "b", "c", "d", "f"], 2);

// 2nd way
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0, size));
  }
  return newArr;
}