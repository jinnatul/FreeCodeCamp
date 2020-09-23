// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending

// 1st way
function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding("He has to give me a new name", "name");

// 2nd way
function confirmEnding(str, target) {
  return str.slice(-target.length) === target
}
confirmEnding("Bastian", "n");