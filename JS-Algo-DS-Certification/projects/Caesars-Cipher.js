// freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/caesars-cipher

function rot13(str) {
    let ans = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
        let chASCII = str.charCodeAt(i) + 13;
        if (chASCII > 90) chASCII -= 26;
        ans += String.fromCharCode(chASCII);
      } else {
        ans += str[i];
      }
    }
    return ans;
  }
  
  let a = rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");
  console.log(a)