function indexOfIgnoreCase(s1, s2) {
  // write your code here
// Convert both strings to lowercase for case-insensitive comparison
  let lowerS1 = s1.toLowerCase();
  let lowerS2 = s2.toLowerCase();
  
  // Use indexOf to find the index of the substring in the main string
  return lowerS1.indexOf(lowerS2);

}

// Examples
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple")); // Output: 2
console.log(indexOfIgnoreCase("test", "aaa")); // Output: -1

}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
