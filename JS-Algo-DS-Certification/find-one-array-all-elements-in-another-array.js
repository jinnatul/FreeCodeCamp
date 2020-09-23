// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations

function mutation(arr) {
  let first = arr[0];
  let second = arr[1]; 

  return second
          .split('')
          .toLowerCase()
          .every(function(letter) {
            return first.toLowerCase().indexOf(letter) != -1;
          });
}

mutation(["hello", "hey"]);
