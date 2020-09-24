// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/dna-pairing

// 1st way
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  let paired = [];

  // Function to check with strand to pair.
  let search = function(char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}
// test here
pairElement("GCG");


// 2nd way
function pairElement(str) {
  //create object for pair lookup
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };
  //split string into array of characters
  let arr = str.split("");
  //map character to array of character and matching pair
  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");