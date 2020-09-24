// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple

function smallestCommons(arr) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}


smallestCommons([1,5]);
