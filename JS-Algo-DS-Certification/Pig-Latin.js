// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/pig-latin

function translatePigLatin(str) {
  let consonantRegex = /^[^aeiou]+/;
  let myConsonants = str.match(consonantRegex);
  return myConsonants != null 
    ? str
        .replace(myConsonants, "")
        .concat(myConsonants)
        .concat("ay")
    : str
        .concat("way");
}
translatePigLatin("consonant");
