// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/steamroller

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

steamrollArray([1, [2], [3, [[4]]]]); // [1, 2, 3, 4]
