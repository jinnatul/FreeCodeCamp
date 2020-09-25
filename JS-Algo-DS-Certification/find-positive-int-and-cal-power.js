// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem

const squareList = (arr) => {
  // Only change code below this line
  let data = arr.filter((x) => {
    if (x > 0 && Number.isInteger(x)) return x;
  }).map((x) => x*x)
  return data;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
