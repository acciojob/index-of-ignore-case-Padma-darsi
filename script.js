function indexOfIgnoreCase(s1, s2) {
  // write your code here

	function indexOfIgnoreCase(str, subStr) {
  // Convert both the string and the substring to lowercase
  let lowerStr = str.toLowerCase();
  let lowerSubStr = subStr.toLowerCase();

  // Use the indexOf method to find the first occurrence of subStr in str
  return lowerStr.indexOf(lowerSubStr);
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
