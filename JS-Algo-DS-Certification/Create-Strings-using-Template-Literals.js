const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // 1st way
  for(let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }

  // 2nd way
  const failureItems = arr.map(item => `<li class="text-warning">${item}</li>`);
  
  return failureItems;
}

const failuresList = makeList(result.failure);
