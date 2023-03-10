// Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.



function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.replace(word[0], word[0].toUpperCase()))
    .join(' ')
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("I'm a little tea POT"));