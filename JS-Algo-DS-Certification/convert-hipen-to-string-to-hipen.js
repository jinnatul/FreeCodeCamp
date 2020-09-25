// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/combine-an-array-into-a-string-using-the-join-method

// Hipen to String 
function sentensify(str) {
  // Only change code below this line
  return str.split(/\W/).join(" ");
  // Only change code above this line
}
let out = sentensify("May-the-force-be-with-you");
console.log(out)


// String to Hipen
function urlSlug(title) {
  return title
          .toLowerCase()
          .trim()
          .split(/\s+/)
          .join("-");
          
}
// Only change code above this line
console.log(urlSlug(" Winter Is Coming"));