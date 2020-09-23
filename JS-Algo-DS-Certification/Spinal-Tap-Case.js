// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case

// 1st way
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");

// 2nd way
function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

// 3rd way
function spinalCase(str) {
  str = str
          .replace(/(?!^)([A-Z])/g, ' $1')
          .replace(/[_\s]+(?=[a-zA-Z])/g, '-').toLowerCase();
  return str;
}
spinalCase('This Is Spinal Tap');
