// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype

// The global veriable
let s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){
  let newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i]))
  }
  // Only change code above this line
  return newArray;

};

let new_s = s.myMap(function(item){
  return item * 2;
});
console.log(new_s)